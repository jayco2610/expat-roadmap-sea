type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  hint?: string;
  defaultValue?: string | number;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
  rows?: number;
  autoComplete?: string;
};

export function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  hint,
  defaultValue,
  as = "input",
  options,
  rows = 4,
  autoComplete,
}: FormFieldProps) {
  const baseClass =
    "mt-1.5 w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-[#1d1d1f] outline-none transition focus:border-[#ff6a00] focus:ring-2 focus:ring-[#ff6a00]/25 dark:border-white/12 dark:bg-[#161618] dark:text-[#f5f5f7]";

  return (
    <label className="block">
      <span className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
        {label}
        {required ? <span className="text-[#ff6a00]"> *</span> : null}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          rows={rows}
          className={baseClass}
        />
      ) : as === "select" ? (
        <select
          name={name}
          required={required}
          defaultValue={defaultValue}
          className={baseClass}
        >
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          className={baseClass}
        />
      )}
      {hint ? <span className="mt-1 block text-xs text-[#6e6e73] dark:text-[#a1a1a6]">{hint}</span> : null}
    </label>
  );
}
