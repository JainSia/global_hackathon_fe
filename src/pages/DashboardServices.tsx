import MetricCard from "../components/Dashboard/MetricCard";
import SmallKpiCard from "../components/Dashboard/SmallKpiCard";

const DashboardServices = () => {
  return (
    <div className="space-y-6">
      {/* Services panel */}
      <div className="app-panel p-4 rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">MDSD Department Services (2)</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">2 services</div>
          </div>
          <div className="text-sm text-indigo-600 dark:text-indigo-300">Manage Services →</div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="p-3 rounded border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">SPS</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">bitbucket · atlassian</div>
              </div>
              <div className="text-sm text-gray-500">Overview</div>
            </div>
          </div>

          <div className="p-3 rounded border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">MDSN</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">integration</div>
              </div>
              <div className="text-sm text-gray-500">Overview</div>
            </div>
          </div>
        </div>
      </div>

      {/* DORA Metrics */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">DORA Metrics</h2>
          <div className="text-sm text-gray-500">DevOps Research & Assessment</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MetricCard title="Deployment Frequency" value="0.1" sub="deployments/day" color="blue" />
          <MetricCard title="Lead Time" value="4.5d" sub="average lead time" color="green" />
          <MetricCard title="Change Failure Rate" value="0.0%" sub="failure rate" color="yellow" />
          <MetricCard title="MTTR" value="0h" sub="time to recovery (30 days)" color="purple" />
        </div>

        <div className="mt-4 app-panel p-3 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-300">DORA Benchmark Comparison</div>
          <div className="mt-2 text-xs text-gray-500">Deployment Frequency · Lead Time · Change Failure Rate · MTTR</div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SmallKpiCard title="Open Pull Requests" value="52" />
        <SmallKpiCard title="Automation Coverage" value="0.0%" />
        <SmallKpiCard title="Defect Density" value="0.50" accent="red" />
        <SmallKpiCard title="Open Bugs" value="203" accent="red" />
        <SmallKpiCard title="Total Test Cases" value="1236" accent="green" />
        <SmallKpiCard title="Avg PR Review Time" value="143.9h" />
      </div>
    </div>
  );
};

export default DashboardServices;