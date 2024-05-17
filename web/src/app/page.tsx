import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap 4">
      <h1 className="text-3xl font-semibold">Welcome</h1>
      <Link href="/list">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}
