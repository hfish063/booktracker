import Link from "next/link";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <>
      <header className="flex flex-col border-r-2">
        <Link href="/" className="hover:bg-sky-100">
          <Button className="py-6 px-8 w-full" variant="link">
            Home
          </Button>
        </Link>
        <Link href="/list" className="hover:bg-sky-100">
          <Button className="py-6 px-8 w-full" variant="link">
            Reading Lists
          </Button>
        </Link>
      </header>
      <hr></hr>
    </>
  );
}
