"use client";

export default function LinkButton({ path, text = "Button" }: LinkButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 mb-2 rounded w-32">
      <a href={path}>{text}</a>
    </button>
  );
}

type LinkButtonProps = {
  path: string;
  text: string;
};
