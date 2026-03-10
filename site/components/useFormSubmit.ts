'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormResult {
  status: Status;
  mailto: string | null;
  errorMsg: string | null;
}

export function useFormSubmit() {
  const [result, setResult] = useState<FormResult>({ status: 'idle', mailto: null, errorMsg: null });

  async function submit(data: Record<string, string>) {
    setResult({ status: 'sending', mailto: null, errorMsg: null });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setResult({ status: 'success', mailto: json.mailto, errorMsg: null });
      } else {
        setResult({ status: 'error', mailto: null, errorMsg: json.error ?? 'Erreur inconnue' });
      }
    } catch {
      setResult({ status: 'error', mailto: null, errorMsg: 'Erreur réseau' });
    }
  }

  function reset() {
    setResult({ status: 'idle', mailto: null, errorMsg: null });
  }

  return { ...result, submit, reset };
}
