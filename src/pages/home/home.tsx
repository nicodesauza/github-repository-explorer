import { cn } from "@/lib/utils";
import { GlobalSearch } from "@/components/global-search/global-search";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "min-h-screen min-w-screen px-20 md:px-48",
        "flex flex-col justify-center items-center pb-40 space-y-8",
        "bg-[url('/images/background.jpg')] bg-cover bg-center"
      )}
    >
      <div className="text-center">
        <p className="text-5xl text-gray-500 mb-2">
          Github Repositories Explorer
        </p>
        <p className="text-gray-700 text-xl font-normal">
          Discover GitHub accounts and Explore interesting projects
        </p>
      </div>
      <div className={cn("w-full", "md:w-[600px]")}>
        <GlobalSearch
          onSearch={(keyword) => {
            navigate("/search?q=" + keyword);
          }}
        />
      </div>
    </div>
  );
};
