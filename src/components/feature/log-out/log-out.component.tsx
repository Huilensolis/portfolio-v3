"use client";

import { Button } from "@/components/ui/button/button.component";
import { createClient } from "@/utils/supabase/client";
import { DoorOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogOutBtn() {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  async function logOut() {
    setLoading(true);
    const supabase = createClient();

    await supabase.auth.signOut();

    router.refresh();
  }
  return (
    <Button loading={loading} onClick={logOut} size="sm">
      log out
      <DoorOpen className="h-4 w-4" />
    </Button>
  );
}
