"use client";

import { Button } from "./ui/button";

export default function LinkButton({ path, text = "Button" }: LinkButtonProps) {
  return (
    <a href={path}>
      <Button>{text}</Button>
    </a>
  );
}

type LinkButtonProps = {
  path: string;
  text: string;
};
