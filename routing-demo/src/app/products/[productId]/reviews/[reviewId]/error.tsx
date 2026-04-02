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
// Error always bubble up to find th closes parent error boundary
// An error.tsx file handdles errors not just for its own folder, but for all the nested child
// segment below it to

// By strategically placing error.tsx files at different levels in your route folder, you
// can control exactly how detailed you error handling gets

// Where you put your error.tsx file makes a huge difference - it determines exactly
// which parts of your UI get affected when things go wrong.
