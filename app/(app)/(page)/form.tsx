"use client";

import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { action } from "./action";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Form = () => {
  const [state, submit, pending] = useActionState(action, undefined);

  return (
    <form action={submit}>
      {/* Honeypot field */}
      <div className="hidden">
        <input name="name" type="text" placeholder="Your Name" />
      </div>

      <div className="grid gap-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              name="first_name"
              type="text"
              id="name"
              placeholder="Your Name"
              required
              disabled={(state && !state.error) || pending}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="tel">Phone Number</Label>
            <Input
              name="phone"
              id="tel"
              type="tel"
              placeholder=""
              disabled={(state && !state.error) || pending}
            />
          </div>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>

          <Input
            name="email"
            type="email"
            id="email"
            placeholder="email@example.com"
            required
            className="w-full max-w-none"
            disabled={(state && !state.error) || pending}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="message">Message</Label>

          <Textarea
            name="message"
            id="message"
            required
            className="max-h-32 min-h-20 w-full max-w-none"
            disabled={(state && !state.error) || pending}
          />
        </div>
      </div>

      <Button
        className="mt-4 w-full py-1.5 text-lg"
        type="submit"
        disabled={(state && !state.error) || pending}
      >
        Submit
      </Button>
    </form>
  );
};
