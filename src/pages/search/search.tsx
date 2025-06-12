import { cn } from "@/lib/utils";
import { GlobalSearch } from "@/components/global-search/global-search";
import { useSearchParamsSync } from "@/components/global-search/hooks/use-search-params-sync";
import { FolderSearch, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const Search = () => {
  const { updateQuery } = useSearchParamsSync();

  return (
    <div
      className={cn(
        "min-h-screen min-w-screen px-20 md:px-30",
        "py-10 md:py-12"
      )}
    >
      <div className="flex justify-between text-gray-600">
        <div className="flex items-end mb-5">
          <FolderSearch className="text-blue-500 w-8 h-8 mr-2" />
          <p className="text-md md:text-lg">Discover Github</p>
        </div>
        <Link to={"/"}>
          <div className="md:flex items-center hidden hover:bg-accent px-3 py-2 rounded-md">
            <p>GitHub Repositories Explorer</p>
          </div>
          <div className="flex bg-blue-200 mt-2 text-xs items-end md:hidden hover:bg-accent px-3 py-2 rounded-md">
            <Github className="w-4 h-4" />
          </div>
        </Link>
      </div>
      <div className="flex  justify-between">
        <div className={cn("w-full", "md:w-[800px] md:max-w-full")}>
          <div className="pl-2">
            <GlobalSearch
              onSearch={(keyword) => {
                updateQuery(keyword);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
