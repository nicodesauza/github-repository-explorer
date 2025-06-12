import { cn } from "@/lib/utils";
import { GlobalSearch } from "@/components/global-search/global-search";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "min-h-screen min-w-screen px-20 md:px-48",
        "flex flex-col justify-center items-center pb-40"
      )}
    >
      <div className="text-2xl mb-4">Github Repositories Explorer</div>
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
