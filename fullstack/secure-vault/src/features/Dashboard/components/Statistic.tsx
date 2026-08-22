function Statistic({
  statistic,
}: {
  statistic: { statistic: string; count: number };
}) {
  return (
    <div className="bg-card rounded-xl p-6 flex-1">
      <h1 className="text-sm">{statistic.statistic}</h1>
      <p className="text-4xl font-semibold">{statistic.count}</p>
    </div>
  );
}

export default Statistic;
