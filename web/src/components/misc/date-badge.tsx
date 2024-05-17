import { Badge } from "../ui/badge";

export default function DateBadge({ date }: DateBadgeParams) {
  const localDate = new Date(date).toLocaleString();
  return <Badge className="line-clamp-2">{localDate}</Badge>;
}

type DateBadgeParams = {
  date: string;
};
