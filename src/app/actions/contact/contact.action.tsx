"use server";
import type { ContactFormSchema } from "@/app/actions/contact/zod.schema";
import { z } from "zod";
import type { Schema } from "../../../../amplify/data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import outputs from "../../../../amplify_outputs.json";

Amplify.configure(outputs);

const client = generateClient<Schema>();

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
		const response = await client.queries.handleEmail({
			body: JSON.stringify(formData),
		});

		const result = response.data;

		// 	if (result.success) {
		// 	return { success: true };
		// }
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
