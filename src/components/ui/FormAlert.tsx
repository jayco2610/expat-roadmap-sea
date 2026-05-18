export function FormAlert({ message, variant = "error" }: { message: string; variant?: "error" | "success" }) {
  return (
    <p
      className={`rounded-xl px-4 py-3 text-sm ${
        variant === "error"
          ? "bg-red-500/10 text-red-700 dark:text-red-300"
          : "bg-[#34c759]/10 text-[#248a3d] dark:text-[#34c759]"
      }`}
      role="alert"
    >
      {message}
    </p>
  );
}
