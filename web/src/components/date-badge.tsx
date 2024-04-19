export default function DateBadge({ date }: DateBadgeParams) {
  const localDate = new Date(date).toLocaleString();
  return (
    <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
      {localDate}
    </span>
  );
}

type DateBadgeParams = {
  date: string;
};
