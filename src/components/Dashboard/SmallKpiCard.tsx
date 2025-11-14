interface SmallKpiCardProps {
  title: string;
  value: string;
  accent?: "red" | "green" | "indigo";
}

const SmallKpiCard = ({ title, value, accent = "indigo" }: SmallKpiCardProps) => {
  const accentColor = accent === "red" ? "text-red-500" : accent === "green" ? "text-green-500" : "text-indigo-500";
  return (
    <div className="app-panel p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="text-sm text-gray-500 dark:text-gray-300">{title}</div>
      <div className={`mt-2 text-xl font-semibold ${accentColor}`}>{value}</div>
    </div>
  );
};

export default SmallKpiCard;