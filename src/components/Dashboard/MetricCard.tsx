interface MetricCardProps {
  title: string;
  value: string;
  sub?: string;
  color?: "blue" | "green" | "yellow" | "purple";
}

const MetricCard = ({ title, value, sub, color = "blue" }: MetricCardProps) => {
  const colorMap: Record<string, string> = {
    blue: "from-blue-50 to-blue-100 text-blue-800",
    green: "from-green-50 to-green-100 text-green-800",
    yellow: "from-yellow-50 to-yellow-100 text-yellow-800",
    purple: "from-purple-50 to-purple-100 text-purple-800",
  };

  return (
    <div className={`rounded-lg p-4 bg-gradient-to-br ${colorMap[color]} border border-gray-200 dark:border-gray-700 shadow-sm`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="mt-2 text-2xl font-bold">{value}</div>
          {sub && <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">{sub}</div>}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">◎</div>
      </div>
    </div>
  );
};

export default MetricCard;