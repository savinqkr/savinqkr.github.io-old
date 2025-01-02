"use client";

import { HTMLInputTypeAttribute, InputHTMLAttributes, useCallback, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormTextInputProps<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  name: Path<T>;
  control: Control<T>;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

const FormTextInput = <T extends FieldValues>({
  name,
  control,
  placeholder,
  error,
  disabled,
  type,
  ...props
}: FormTextInputProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          {...props}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={`flex h-12 w-full items-center self-stretch rounded-lg border px-3 py-2 text-body_medium_14 ${
            error
              ? "border-error bg-white text-black"
              : isFocused
                ? "border-point bg-white text-black"
                : disabled
                  ? "cursor-not-allowed border-gray07 bg-gray04 text-gray07"
                  : "border-gray07 bg-white text-black placeholder:text-gray10"
          } ${!disabled && "focus:outline-none"} `}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={error ? "true" : "false"}
        />
      )}
    />
  );
};

export default FormTextInput;
