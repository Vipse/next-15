import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ShoppingCartButton = () => (
  <Button asChild variant="ghost">
    <Link href="/cart">
      <ShoppingCartIcon /> Cart
    </Link>
  </Button>
);

const SignInButton = () => (
  <Button asChild>
    <Link href="/sign-in">
      <UserIcon /> Sign In
    </Link>
  </Button>
);

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <ShoppingCartButton />
        <SignInButton />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVerticalIcon />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <ShoppingCartButton />
            <SignInButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
