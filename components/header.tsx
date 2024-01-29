/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/6p3whosiMgB
 */
import { HeaderLinks } from "@/src/header/HeaderLinks";
import { HandCoins, UserIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header
      key="1"
      className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="flex items-center gap-4">
        <Link
          className="text-lg font-semibold flex items-center gap-2"
          href="/"
        >
          <HandCoins />
          Debt Free
        </Link>
      </div>
      <HeaderLinks />
    </header>
  );
}
