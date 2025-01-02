"use server";
import type { ContactFormSchema } from "@/app/actions/contact/zod.schema";
import { z } from "zod";

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
	data: FormData,
): Promise<FormState> {
	const formData = Object.fromEntries(data);

	try {
		const response = await fetch(
			"https://main.d2cippkfpoeust.amplifyapp.com/api/handle-email-function",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			},
		);

		const result = await response.json();

		if (result.success) {
			return { success: true };
		}
		return {
			success: false,
			formErrors: ["Could not send the query. Try again later."],
		};
	} catch (error) {
		console.error("Error:", error);
		return {
			success: false,
			formErrors: ["Could not send the query. Try again later."],
		};
	}
}
