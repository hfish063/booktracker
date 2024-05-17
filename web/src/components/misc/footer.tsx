import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr></hr>
      <footer className="py-6 px-8">
        <Link href="https://github.com/hfish063" target="_blank">
          Github
        </Link>
      </footer>
    </>
  );
}
