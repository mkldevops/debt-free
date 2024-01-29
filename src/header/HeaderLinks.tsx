"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ButtonLoading } from "@/components/button-loading";

export const HeaderLinks = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return ButtonLoading({ variant: "link" });

  if (error) throw new Error("Error loading user data.");

  return (
    <div className="flex items-center gap-4">
      {!user && (
        <Link className="text-sm font-medium" href="/api/auth/login">
          Login
        </Link>
      )}

      {user && (
        <>
          <Link className="text-sm font-medium" href="/transactions">
            Transactions
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <UserIcon className="w-5 h-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom">
              <DropdownMenuLabel>{user.nickname}</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/api/auth/logout">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </div>
  );
};
