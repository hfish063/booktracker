import LinkButton from "@/components/link-button";

export default function Home() {
  return (
    <div className="flex flex-col gap 4">
      <h1 className="text-3xl font-semibold">Welcome</h1>
      <LinkButton path="/list" text="Get Started" />
    </div>
  );
}
