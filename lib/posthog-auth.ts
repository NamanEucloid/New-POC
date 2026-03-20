"use client";

import { useSession } from "next-auth/react";

export type IsLoggedInValue = "yes" | "no";

let currentUserId: string | null = null;

const getCurrentUserId = (session: unknown): string | null => {
  return ((session as any)?.user?.id as string | undefined) ?? null;
};

export const getIsLoggedInValue = (
  session: unknown,
  status?: string
): IsLoggedInValue => {
  currentUserId = getCurrentUserId(session);

  if (status === "authenticated") {
    return "yes";
  }

  return currentUserId ? "yes" : "no";
};

export const withIsLoggedIn = (
  properties: Record<string, unknown> | undefined,
  isLoggedIn: IsLoggedInValue
) => ({
  ...(properties ?? {}),
  is_logged_in: isLoggedIn,
  user_id: isLoggedIn === "yes" ? currentUserId : null,
});

export const useIsLoggedInValue = (): IsLoggedInValue => {
  const { data: session, status } = useSession();
  return getIsLoggedInValue(session, status);
};
