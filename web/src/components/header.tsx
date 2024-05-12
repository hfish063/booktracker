import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <>
      <header className="py-6 px-8 bg-green-700">
        <Button variant="ghost">
          <Link href="/">Home</Link>
        </Button>
      </header>
      <hr></hr>
    </>
  );
}
