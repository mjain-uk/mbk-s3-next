import { defineFunction } from "@aws-amplify/backend";

export const handleEmailFunction = defineFunction({
	name: "handle-email-function",
	entry: "./handler.ts",
});
