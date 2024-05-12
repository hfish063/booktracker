import Link from "next/link";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <>
      <header className="flex flex-col border-r-2">
        <Link href="/">
          <Button className="py-6 px-8 w-full" variant="ghost">
            Home
          </Button>
        </Link>
        <Link href="/list">
          <Button className="py-6 px-8 w-full" variant="ghost">
            Reading Lists
          </Button>
        </Link>
      </header>
      <hr></hr>
    </>
  );
}
