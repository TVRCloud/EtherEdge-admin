import {
  FiHome,
  FiSettings,
  FiUsers,
  FiFolder,
  FiPieChart,
  FiMail,
} from "react-icons/fi";
import { Skeleton, SkeletonCircle } from "../ui/skeleton";

type Props = {
  mainTitle: string;
  subTitle: string;
  mainImage?: string;
  mainIcon?: string;
  titleIcon?: string;
  isLoading?: boolean;
};

// Icon mapping for easier access
const iconMapping: Record<string, JSX.Element> = {
  home: <FiHome />,
  settings: <FiSettings />,
  users: <FiUsers />,
  folder: <FiFolder />,
  pieChart: <FiPieChart />,
  mail: <FiMail />,
};

const InfoCardSmall = ({
  mainTitle,
  subTitle,
  mainImage,
  mainIcon,
  titleIcon,
  isLoading,
}: Props) => {
  return (
    <div className="rounded-[20px] bg-white dark:bg-dark-primary-bg flex p-[20px] pt-[20px] pr-[12.789px] pb-[21px] pl-[17px] items-start gap-[18.211px]">
      {isLoading ? (
        <div className="flex gap-3 w-full">
          <div className="w-[22%]">
            <SkeletonCircle size="12" />
          </div>

          <div className="w-[78%] flex flex-col gap-2">
            <Skeleton height="5" width="70%" />
            <Skeleton  height="5" />
          </div>
        </div>
      ) : (
        <>
          <div className="w-[22%]">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-main-bg dark:bg-dark-main-bg">
              {mainImage ? (
                <img src={mainImage} alt="profile-avatar" />
              ) : mainIcon && iconMapping[mainIcon] ? (
                <div className="flex items-center justify-center w-full h-full">
                  {iconMapping[mainIcon]}
                </div>
              ) : null}
            </div>
          </div>

          <div className="w-[78%]">
            <p className="text-[14px] font-medium text-text-secondary dark:text-dark-text-secondary">
              {subTitle}
            </p>
            <div className="flex items-center text-[22px] font-bold text-text-primary dark:text-dark-text-primary">
              {titleIcon && iconMapping[titleIcon] && (
                <div className="mr-2">{iconMapping[titleIcon]}</div>
              )}
              <h4>{mainTitle}</h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoCardSmall;
