"use client";

import { useCallback, useState } from "react";

/** Copies a value (e.g. a contract ID or tx hash) to the clipboard and tracks copied state briefly. */
export function useCopyToClipboard(resetAfterMs = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (value: string) => {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), resetAfterMs);
    },
    [resetAfterMs],
  );

  return { copied, copy };
}
