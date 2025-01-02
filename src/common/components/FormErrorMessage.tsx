import React from "react";
import { FieldValues, FieldError, Message } from "react-hook-form";

interface FormErrorMessageProps<T extends FieldValues> {
  error?:
    | FieldError
    | (Record<
        string,
        Partial<{
          type: string | number;
          message: Message;
        }>
      > &
        Partial<{
          type: string | number;
          message: Message;
        }>);
}

function FormErrorMessage<T extends FieldValues>({
  error,
}: FormErrorMessageProps<T>) {
  return (
    <>
      {error?.message && (
        <span className="text-subtitle_medium_14 text-error">
          {error.message}
        </span>
      )}
    </>
  );
}

export default FormErrorMessage;
