import Link from "next/link";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <>
      <header className="flex flex-col bg-green-500">
        <Link href="/" className="hover:bg-sky-100">
          <Button
            className="hover:text-sky-800 text-white py-6 px-8 w-full"
            variant="link"
          >
            Home
          </Button>
          <hr />
        </Link>
        <Link href="/list" className="hover:bg-sky-100">
          <Button
            className="hover:text-sky-800 text-white py-6 px-8 w-full"
            variant="link"
          >
            Reading Lists
          </Button>
          <hr />
        </Link>
        <Link href="/list" className="hover:bg-sky-100">
          <Button
            className="hover:text-sky-800 text-white py-6 px-8 w-full"
            variant="link"
          >
            Completed Books
          </Button>
          <hr />
        </Link>
      </header>
      <hr></hr>
    </>
  );
}
