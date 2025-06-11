import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  showClearButton?: boolean;
  classNameWrapper?: string;
  onClear?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      classNameWrapper,
      type,
      prefixIcon,
      suffixIcon,
      showClearButton,
      onClear,
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
    return (
      <div className={cn("relative w-full", classNameWrapper)}>
        {prefixIcon && (
          <div className="h-[var(--input-field-height)] w-h-[var(--input-field-height)] absolute">
            <div className="h-full flex items-center pl-3 justify-center">
              {prefixIcon}
            </div>
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-[var(--input-field-height)] w-full rounded-md border border-neutral-100 bg-white px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-neutral-400 placeholder:text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:bg-neutral-400",
            props["aria-invalid"] && "border-bagRed focus:border-bagRed",
            prefixIcon ? "pl-12" : "",
            suffixIcon ? "pr-12" : "",
            className
          )}
          value={value}
          onChange={(val) => {
            onChange?.(val);
          }}
          ref={inputRef}
          {...props}
        />
        <div
          className={cn(
            "h-[var(--input-field-height)] absolute z-20 right-2 top-0"
          )}
        >
          <div className="h-full flex items-center justify-center ">
            {showClearButton && !!value && (
              <Button
                type="button"
                variant="link"
                className="p-0"
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (inputRef.current) {
                    inputRef.current.value = "";
                  }
                  onClear?.();
                }}
              >
                <X className="w-4 h-4 text-red-300" />
              </Button>
            )}
            <div className="">{suffixIcon}</div>
          </div>
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
