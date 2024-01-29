import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export function ButtonLoading({
  variant = "default",
}: {
  variant: ButtonVariant;
}) {
  return (
    <Button disabled variant={variant}>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}
