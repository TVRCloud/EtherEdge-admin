import {
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText,
} from "@components/ui/progress-circle";
import { Skeleton, SkeletonCircle } from "@components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { fetchDbStatus } from "apiCalls";

const DashDbStatus = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["db-status"],
    queryFn: fetchDbStatus,
  });

  // Calculate usage percentage
  const getUsagePercentage = () => {
    if (!data) return 0;
    const dataSize = Number.parseFloat(data.dataSize.split(" ")[0]);
    const storageSize = Number.parseFloat(data.storageSize.split(" ")[0]);
    return Math.round((dataSize / storageSize) * 100);
  };

  if (isLoading) {
    return (
      <div className="max-w-[300px] h-[200px] rounded-[20px] p-[20px] bg-primary-bg flex flex-col gap-2 items-center">
        <Skeleton height="5" width="70%" />
        <Skeleton height="5" width="90%" />
        <div className="mt-3">
          <SkeletonCircle size={20} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[300px] h-[200px] rounded-[20px] p-[20px] bg-primary-bg flex flex-col gap-2 items-center">
        <p>Error fetching DB status</p>
      </div>
    );
  }

  const usagePercentage = getUsagePercentage();

  return (
    <div className="max-w-[300px] h-auto rounded-[20px] p-[20px] bg-primary-bg flex flex-col gap-2 items-center">
      <h2 className="text-text-primary font-bold text-lg">DB Status</h2>
      <p className="text-text-secondary">Current Database Usage</p>

      <div className="mt-3">
        <ProgressCircleRoot size="xl" value={usagePercentage}>
          <ProgressCircleRing cap="round" color="var(--primary-color)" />
          <ProgressCircleValueText>{usagePercentage}%</ProgressCircleValueText>
        </ProgressCircleRoot>
      </div>

      <div className="flex justify-between w-full mt-4 text-sm">
        <div className="text-text-secondary">
          <p>Data Size</p>
          <p className="font-medium text-text-primary">{data?.dataSize}</p>
        </div>
        <div className="text-text-secondary">
          <p>Storage Size</p>
          <p className="font-medium text-text-primary">{data?.storageSize}</p>
        </div>
      </div>
    </div>
  );
};

export default DashDbStatus;
