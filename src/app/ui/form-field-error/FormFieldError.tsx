import React from "react";

interface Props {
  errors: string | string[] | undefined;
}
const FormFieldError = ({ errors }: Props) => {
  if (errors) {
    if (typeof errors === "string") {
      return (
        <span className="block w-full pl-6 text-left text-red-700">
          {errors}
        </span>
      );
    }
    return errors.map((error, index) => {
      return (
        <span key={index} className="block w-full pl-6 text-left text-red-700">
          {error}
        </span>
      );
    });
  }
  return null;
};

export default FormFieldError;
