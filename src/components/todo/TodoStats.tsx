interface Props {
  total: number;
  completed: number;
}

export default function TodoStats({ total, completed }: Props) {
  if (total === 0) return null;

  return (
    <p className="text-sm text-muted text-center">
      {completed} of {total} completed
    </p>
  );
}
