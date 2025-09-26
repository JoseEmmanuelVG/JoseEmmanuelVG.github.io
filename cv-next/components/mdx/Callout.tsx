// components/mdx/Callout.tsx
import { ReactNode } from "react";

export default function Callout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "success";
  title: string;
  children: ReactNode;
}) {
  const colors = {
    info: "bg-blue-50 border-blue-300 text-blue-700",
    warning: "bg-yellow-50 border-yellow-300 text-yellow-700",
    success: "bg-green-50 border-green-300 text-green-700",
  };

  return (
    <div
      className={`my-4 rounded-md border p-4 ${colors[type]}`}
      role="alert"
    >
      <strong className="block font-medium mb-1">{title}</strong>
      <div className="text-sm">{children}</div>
    </div>
  );
}
