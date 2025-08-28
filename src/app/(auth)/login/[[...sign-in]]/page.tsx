"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="grid min-h-[60vh] place-items-center p-6">
      <SignIn routing="hash" signUpUrl="/signup" />
    </main>
  );
}
