"use client";

import { BASE_URL } from "@/app/sitemap";
import { GitHub } from "@/components/icons/github";
import { Button } from "@/components/ui/button/button.component";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export function SignInWithGithubBtn({
  redirectAfterSignIn = BASE_URL,
}: {
  redirectAfterSignIn?: string;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  async function signIn() {
    try {
      setLoading(true);

      const supabase = createClient();

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${BASE_URL}/en/auth/confirm?next=${redirectAfterSignIn}`,
        },
      });

      if (error) throw new Error(error.message);
    } catch (error) {
      //
      setLoading(false);
    }
  }
  return (
    <Button
      className="dark:fill-neutral-50 fill-neutral-900 dark:text-neutral-50 text-neutral-900"
      size="sm"
      onClick={signIn}
      loading={loading}
    >
      log in
      <GitHub className="w-4 h-4" />
    </Button>
  );
}
