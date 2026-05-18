"use client";

import { useActionState } from "react";
import { FormAlert } from "@/components/ui/FormAlert";
import type { ActionState } from "@/actions/profile";

type ActionFormProps = {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  children: React.ReactNode;
  submitLabel: string;
};

export function ActionForm({ action, children, submitLabel }: ActionFormProps) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="space-y-5">
      {state?.error ? <FormAlert message={state.error} /> : null}
      {state?.success ? <FormAlert message={state.success} variant="success" /> : null}
      {children}
      <button type="submit" disabled={pending} className="btn-primary w-full sm:w-auto">
        {pending ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
