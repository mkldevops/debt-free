"use client";

import { buttonVariants } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <Link href="/sign-in" className={buttonVariants({ variant: "ghost" })}>
      Sign In
      <LogIn className="mr-2 h-4 w-4" />
    </Link>
  );
};
