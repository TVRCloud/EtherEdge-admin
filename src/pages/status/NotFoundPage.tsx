import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="flex flex-col gap-3 items-center text-text-primary dark:text-dark-text-primary pt-[75px]">
    <img src="/assets/error404.png" alt="" />

    <h1 className="text-[46px] font-bold">
      Ah, dang. We didn't find that page.
    </h1>
    <p className="text-[18px]">
      Maybe it’s best you start back at our home page...
      <Link className="text-primary-color dark:text-dark-primary-color" to="/">
        Return at home here.
      </Link>
    </p>
  </div>
);

export default NotFoundPage;
