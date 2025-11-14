const DashboardOverview = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">What can I help with?</h2>

        <div className="w-full">
          <div className="rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 flex items-center gap-3 shadow-md">
            <button className="text-gray-500 dark:text-gray-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              +
            </button>
            <input
              className="flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-2 py-2"
              placeholder="Ask anything"
            />
            <div className="flex items-center gap-2">
              <button className="text-gray-500 dark:text-gray-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">🧠</button>
              <button className="text-gray-500 dark:text-gray-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">🎤</button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500 dark:text-gray-400 text-center">Tip: try "Can you please provide me list of all pending PRs.?"</div>
      </div>
    </div>
  );
};

export default DashboardOverview;