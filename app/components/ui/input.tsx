//@types
import React, { ComponentProps } from "react";

//@utils
import { cn } from "../../utils";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
  helperText?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  helperTextClassName?: string;
  isError?: boolean;
  isValid?: boolean;
}

/**
 * Returns the input component
 * @param InputProps
 * @returns JSX.Element
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      id,
      type = "text",
      wrapperClassName,
      labelClassName,
      isError,
      isValid,
      helperTextClassName,
      ...inputProps
    },
    ref,
  ) => (
    <div className={cn("flex flex-col", wrapperClassName)}>
      {label ? (
        <label
          htmlFor={id}
          className={cn(
            "mb-2 block text-sm font-medium",
            isError && "text-red-500",
            isValid && "text-green-700",
            labelClassName,
          )}
        >
          {label}
        </label>
      ) : null}

      <input
        className={cn(
          "block w-full rounded-lg border p-2.5 text-sm",
          isError && "input-error",
          isValid && "input-success",
          labelClassName,
        )}
        ref={ref}
        {...inputProps}
      />

      {helperText ? (
        <p
          role="alert"
          className={cn(
            "mt-2 block text-sm",
            isError && "text-red-500",
            isValid && "text-green-700",
            helperTextClassName,
          )}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  ),
);

Input.displayName = "Input";

export default Input;
