import { defineFunction } from "@aws-amplify/backend";

export const handleEmail = defineFunction({
	name: "handle-email",
	entry: "./handler.ts",
});
