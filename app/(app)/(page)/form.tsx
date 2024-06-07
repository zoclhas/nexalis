"use client";

import { Button } from "@/components/ui/button";
import { HTMLInputTypeAttribute, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitForm } from "./action";
import { Loader } from "lucide-react";

const SubmitButton = ({
  state,
}: {
  state: { message: string; error: boolean };
}) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending || !state.error}>
      {pending && <Loader className="animate-spin" />}&nbsp;
      {!state.error && state.message.length > 2 ? state.message : "Submit"}
    </Button>
  );
};

export const Form = () => {
  const [state, formAction] = useActionState(submitForm, {
    message: "",
    error: true,
  });

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 rounded-2xl bg-zinc-100 p-4"
    >
      {/* Honeypot field */}
      <div className="hidden">
        <input name="name" type="text" placeholder="Your Name" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          name="first_name"
          label="Name"
          type="text"
          placeholder="Your Name"
          required
          disabled={!state.error}
        />
        <Input
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder=""
          disabled={!state.error}
        />
      </div>

      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="email@example.com"
        required
        disabled={!state.error}
      />

      <label htmlFor="message" className="grid gap-0.5">
        <span>
          <span className="text-sm">
            Message
            <span className="text-red-500">*</span>
          </span>
        </span>
        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          required
          disabled={!state.error}
          className="max-h-32 min-h-20 resize-y rounded-lg border border-zinc-300 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/25 disabled:pointer-events-none disabled:opacity-50"
        />
      </label>

      <SubmitButton state={state} />
    </form>
  );
};

const Input = ({
  name,
  label,
  type,
  placeholder = label,
  required,
  disabled,
}: {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}) => {
  return (
    <label htmlFor={name} className="grid gap-0.5">
      <span>
        <span className="text-sm">
          {label}
          {required ? <span className="text-red-500">*</span> : ""}
        </span>
      </span>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="rounded-lg border border-zinc-300 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/25 disabled:pointer-events-none disabled:opacity-50"
      />
    </label>
  );
};
