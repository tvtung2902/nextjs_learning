"use client";
import { func } from "action";
import { useActionState, startTransition } from "react";


export default function SubmitButton() {
  const [state, triggerAction, isPending] = useActionState(func, { success: false });

  return (
    <button
      onClick={() => startTransition(() => triggerAction())}
      disabled={isPending}
    >
      {isPending ? "loading..." : "cre post"}
    </button>
  );
}