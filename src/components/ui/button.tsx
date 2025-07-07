export function Button({ children, className = "", variant = "default" }: any) {
  const base = variant === "outline"
    ? "border px-4 py-2 rounded-md bg-white"
    : "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md";
  return <button className={`${base} ${className}`}>{children}</button>;
}
