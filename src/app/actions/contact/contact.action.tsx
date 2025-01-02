"use server";
import AWS from "aws-sdk";

import { z } from "zod";
import { ContactFormSchema } from "./zod.schema";

// Create instance of AWS
const ses = new AWS.SES({ region: "eu-west-2" });

type TContactForm = z.infer<typeof ContactFormSchema>;

export type FormState = {
  formErrors?: string[];
  fieldErrors?: {
    // eslint-disable-next-line no-unused-vars
    [key in keyof TContactForm]?: string[];
  };
  fields?: Record<string, string>;
  success: boolean;
};

export async function onSubmitAction(
  prev: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      ...parsed.error.flatten(),
      fields,
      success: false,
    };
  }

  try {
    const { name, email: clientEmail, requirement } = parsed.data;

    // Email 1: Send confirmation email to the client
    const sendEmailToClient: AWS.SES.SendEmailRequest = {
      Source: "admin@makeupbykopal.com", // Must be verified in SES
      Destination: {
        ToAddresses: [clientEmail],
      },
      Message: {
        Body: {
          Html: {
            Data: `
              <html>
                <body>
                  <h1>Thank you for your inquiry, ${name}!</h1>
                  <p>We have received your message and will get back to you shortly.</p>
                  <p><strong>Your Inquiry:</strong></p>
                  <p>${requirement}</p>
                  <p>Best Regards,<br>Makeup by Kopal</p>
                </body>
              </html>
            `,
          },
          Text: {
            Data: `Hi ${name},\n\nThank you for getting in touch. We've received your message and will get back to you shortly.\n\nBest regards,\nKopal`,
          },
        },
        Subject: {
          Data: "Thank you for contacting us!",
        },
      },
    };

    // Email 2: Send inquiry details email to the admin
    const sendEmailToAdmin: AWS.SES.SendEmailRequest = {
      Source: "admin@makeupbykopal.com", // Must be verified in SES
      Destination: {
        ToAddresses: ["admin@makeupbykopal.com"],
      },
      Message: {
        Body: {
          Html: {
            Data: `
              <html>
                <body>
                  <h1>New Inquiry from ${name}</h1>
                  <p>Client Email ${clientEmail}</p>
                  <p><strong>Requirement:</strong></p>
                  <p>${requirement}</p>
                </body>
              </html>
            `,
          },
          Text: {
            Data: `New Inquiry from ${name}\n\nRequirement: ${requirement}`,
          },
        },
        Subject: {
          Data: `New MBK Salon Enquiry by ${name}`,
        },
      },
    };

    // Send both emails
    await Promise.all([
      ses.sendEmail(sendEmailToClient).promise(),
      ses.sendEmail(sendEmailToAdmin).promise(),
    ]);

    return { success: true };
  } catch (error) {
    console.error("Error sending emails:", error);
    return {
      success: false,
      formErrors: [
        "Could not send the query. Contact on phone if problem persists.",
      ],
    };
  }
}
