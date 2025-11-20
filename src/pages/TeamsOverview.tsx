import MetricCard from "components/Dashboard/MetricCard";
import { useNavigate } from "react-router-dom";

const TeamsOverview = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">CA Teams Overview</h2>
          <div className="text-sm text-gray-500">Overview of all CA teams</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MetricCard 
            title="Deployment Frequency" 
            value="0.1" 
            sub="deployments/day" 
            color="blue" 
            onClick={() => {
              const metricData = { title: "Deployment Frequency", value: "0.1", type: "deployment-frequency" };
              navigate("/dashboard/teams-overview/services", { state: metricData });
            }}
          />
          <MetricCard 
            title="Lead Time" 
            value="4.5d" 
            sub="average lead time" 
            color="green" 
            onClick={() => {
              const metricData = { title: "Lead Time", value: "4.5d", type: "lead-time" };
              navigate("/dashboard/teams-overview/services", { state: metricData });
            }}
          />
          <MetricCard 
            title="Change Failure Rate" 
            value="0.0%" 
            sub="failure rate" 
            color="yellow" 
            onClick={() => {
              const metricData = { title: "Change Failure Rate", value: "0.0%", type: "change-failure-rate" };
              navigate("/dashboard/teams-overview/services", { state: metricData });
            }}
          />
          <MetricCard 
            title="MTTR" 
            value="0h" 
            sub="time to recovery (30 days)" 
            color="purple" 
            onClick={() => {
              const metricData = { title: "MTTR", value: "0h", type: "mttr" };
              navigate("/dashboard/teams-overview/services", { state: metricData });
            }}
          />
        </div>

      </div>
  );
};

export default TeamsOverview;