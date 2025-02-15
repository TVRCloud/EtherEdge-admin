import InfoCardSmall from "../../components/dashboard/InfoCardSmall";
import DashDbStatus from "./DashDbStatus";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <InfoCardSmall
            key={index}
            mainTitle="3,000"
            subTitle="Users"
            mainImage=""
            mainIcon="users"
            titleIcon="home"
            isLoading={true}
          />
        ))}
      </div>

      <div>
        <DashDbStatus />
      </div>
    </div>
  );
};

export default Dashboard;
