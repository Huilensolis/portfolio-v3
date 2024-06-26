"use client";

import { Button } from "@/components/ui/button/button.component";
import { useFormStatus } from "react-dom";

export function CreateCommentBtn() {
  const { pending } = useFormStatus();
  return (
    <Button variant="default" type="submit" loading={pending}>
      comment
    </Button>
  );
}
