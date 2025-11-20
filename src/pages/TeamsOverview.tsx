import { useEffect, useState } from "react";
import MetricCard from "components/Dashboard/MetricCard";
import { useNavigate } from "react-router-dom";
import axiosInstance from "services/axiosConfig";

interface Team {
  id: number;
  teamName: string;
}

const TeamsOverview = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axiosInstance.get('/insights/team-list');
        setTeams(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch teams');
        console.error('Error fetching teams:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">CA Teams Overview</h2>
          <div className="text-sm text-gray-500">Overview of all CA teams</div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mb-4">
            <div className="text-sm text-blue-900 dark:text-blue-100">Loading teams...</div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 mb-4">
            <div className="text-sm text-red-900 dark:text-red-100">Error: {error}</div>
          </div>
        )}

        {/* Teams list */}
        {teams.length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-medium mb-3">Teams ({teams.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {teams.map((team) => (
                
                <div 
                  key={team.id} 
                  onClick={() => {
                    const metricData = { title: team.teamName, teamId: team.id };
                    navigate("/dashboard/teams-overview/services", { state: metricData });
                  }}
                  className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                >
                  <div className="text-sm font-medium">{team.teamName}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">ID: {team.id}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
        </div> */}

      </div>
  );
};

export default TeamsOverview;