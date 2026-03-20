"use client";

import { useSession } from "next-auth/react";

export type IsLoggedInValue = "yes" | "no";

export const getIsLoggedInValue = (
  session: unknown,
  status?: string
): IsLoggedInValue => {
  if (status === "authenticated") {
    return "yes";
  }

  return (session as any)?.user ? "yes" : "no";
};

export const withIsLoggedIn = (
  properties: Record<string, unknown> | undefined,
  isLoggedIn: IsLoggedInValue
) => ({
  ...(properties ?? {}),
  is_logged_in: isLoggedIn,
});

export const useIsLoggedInValue = (): IsLoggedInValue => {
  const { data: session, status } = useSession();
  return getIsLoggedInValue(session, status);
};
