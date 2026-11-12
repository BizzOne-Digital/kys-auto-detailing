import { cn } from "@/lib/utils";

export const inputCls =
  "block w-full min-h-12 rounded-xl border bg-white px-4 py-3 text-base text-navy-950 placeholder:text-slate-400 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/20 disabled:opacity-60";

/** Label + control + error message, wired together with ids for screen readers. */
export function FormField({
  id,
  label,
  error,
  required,
  optional,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy-900">
        {label}
        {required && (
          <span aria-hidden className="ml-0.5 text-red-600">
            *
          </span>
        )}
        {optional && <span className="ml-1 font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function fieldProps(id: string, error?: string) {
  return {
    id,
    name: id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: cn(inputCls, error ? "border-red-400" : "border-slate-200"),
  } as const;
}

/** Hidden field bots tend to fill in; real users never see it. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor="company">Company</label>
      <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
