export default function Card({ header, content, link }: CardParams) {
  return (
    <a
      href={link}
      className="relative flex flex-col mt-2 hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 text-gray-700 bg-clip-border rounded-xl mr-4 mb-2 h-48"
    >
      <div className="p-6">
        <CardHeader header={header} />
        <CardBody content={content} />
      </div>
    </a>
  );
}

function CardHeader({ header }: CardHeaderParams) {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {header}
    </h5>
  );
}

function CardBody({ content }: CardBodyParams) {
  return (
    <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-4 mb-4">
      {content}
    </p>
  );
}

export type CardParams = {
  header: string;
  content: string;
  link?: string;
};

type CardHeaderParams = {
  header: string;
};

type CardBodyParams = {
  content: string;
};
