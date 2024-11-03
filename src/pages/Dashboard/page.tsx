const Dashboard = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div>
      <h1>Dashboard</h1>

      <button
        onClick={toggleDarkMode}
        className="p-2 bg-primary-color dark:bg-dark-primary-color text-white"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Dashboard;
