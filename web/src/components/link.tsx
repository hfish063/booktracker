export function Link({ path, text }: LinkProps) {
  return (
    <a
      href={path}
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2 mb-2 w-24"
    >
      {text}
    </a>
  );
}

type LinkProps = {
  path: string;
  text: string;
};
