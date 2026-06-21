"use client";

import { useActionState } from "react";
import { signIn, signUp, type AuthState } from "@/actions/auth";
import { FormAlert } from "@/components/ui/FormAlert";
import { FormField } from "@/components/ui/FormField";

export function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const action = mode === "signin" ? signIn : signUp;
  const [state, formAction, pending] = useActionState(action, undefined as AuthState);

  return (
    <form action={formAction} className="card-apple mx-auto max-w-md space-y-5 p-6 sm:p-8">
      <div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-[#111114] dark:text-[#f5f5f5]">
          Welcome
          <span className="block text-[#7d8c63]">
            {mode === "signin" ? "Sign in" : "Create account"}
          </span>
        </h1>
        <p className="mt-3 text-sm text-[#6e6e73] dark:text-[#9a9a9e]">
          {mode === "signin"
            ? "Access your expat profile and post listings."
            : "Join the community. Set up your profile next."}
        </p>
      </div>
      {state?.error ? <FormAlert message={state.error} /> : null}
      <FormField label="Email" name="email" type="email" required autoComplete="email" />
      <FormField
        label="Password"
        name="password"
        type="password"
        required
        autoComplete={mode === "signin" ? "current-password" : "new-password"}
        hint={mode === "signup" ? "Minimum 8 characters" : undefined}
      />
      <button type="submit" disabled={pending} className="btn-primary w-full">
        {pending ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"}
      </button>
    </form>
  );
}
