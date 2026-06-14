import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const params = await searchParams;
  const mode = params.mode === "signup" ? "signup" : "signin";

  return (
    <PageShell>
      <AuthForm mode={mode} />
      <p className="mt-6 text-center text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
        {mode === "signin" ? (
          <>
            No account?{" "}
            <Link href="/login?mode=signup" className="text-[#ff6a00] hover:underline">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-[#ff6a00] hover:underline">
              Sign in
            </Link>
          </>
        )}
      </p>
    </PageShell>
  );
}
