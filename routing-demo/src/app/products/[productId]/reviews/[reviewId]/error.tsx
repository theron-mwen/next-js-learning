"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const handleClick = () => {
    startTransition(() => {
      reset();
      router.refresh();
    });
  };
  return (
    <div>
      <p> {error.message}</p>
      <button onClick={handleClick}>Try again</button>
    </div>
  );
}
