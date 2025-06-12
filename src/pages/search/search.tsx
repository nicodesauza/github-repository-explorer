import { cn } from "@/lib/utils";
import { GlobalSearch } from "@/components/global-search/global-search";
import { useSearchParamsSync } from "@/components/global-search/hooks/use-search-params-sync";

export const Search = () => {
  const { updateQuery } = useSearchParamsSync();

  return (
    <div
      className={cn(
        "min-h-screen min-w-screen px-20 md:px-48",
        "py-10 md:py-12"
      )}
    >
      <div className={cn("w-full", "md:w-[800px] md:max-w-full")}>
        <GlobalSearch
          onSearch={(keyword) => {
            updateQuery(keyword);
          }}
        />
      </div>
    </div>
  );
};
