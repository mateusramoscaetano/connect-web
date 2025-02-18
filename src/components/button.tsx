"use client";

import type { ComponentProps } from "react";

type Props = ComponentProps<"button">;

export function Button({ ...props }: Props) {
  return (
    <button
      {...props}
      type="button"
      className="px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300 relative flex justify-between items-center gap-2"
    />
  );
}
