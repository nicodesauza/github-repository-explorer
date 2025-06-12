import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGlobalSearch } from "./global-search.hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, History, ServerCog, Frown } from "lucide-react";
import { BarLoader } from "react-spinners";
import type { GlobalSearchProps } from "./global-search.types";
import { UserRepo } from "../repositories/user-repo";
import highlightText from "@/lib/utils/highlight";

export const GlobalSearch = (props: GlobalSearchProps) => {
  const {
    searchResult,
    keyword,
    setKeyword,
    onClickSearch,
    isLoading,
    suggestions,
    showSuggestion,
    setShowSuggestion,
    searchRef,
    clearHistory,
    isError,
    isEmptyState,
  } = useGlobalSearch(props);

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onClickSearch(keyword);
        }}
      >
        <Input
          ref={searchRef}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onClear={() => setKeyword("")}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          showClearButton
          placeholder="Search user"
          suffixIcon={
            <Button
              type="submit"
              variant={"link"}
              className="z-20"
              data-testid="submit-search"
            >
              <Search className="cursor-pointer w-4 h-4 text-blue-500" />
            </Button>
          }
        />

        {showSuggestion && (
          <div className="relative mx-[0.5px]">
            <div className="rounded-b-md -mt-1 absolute w-full top-0 z-10 border-b border-neutral-100 bg-white py-1 text-sm shadow-sm transition-colors max-h-64 overflow-y-auto">
              {suggestions.map((suggestion) => (
                <div
                  className="py-1 flex justify-between items-center hover:bg-accent px-3"
                  key={suggestion}
                >
                  <Button
                    type="button"
                    variant={"link"}
                    className="flex items-center justify-start space-x-2 flex-1 hover:no-underline"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      onClickSearch(suggestion);
                    }}
                  >
                    <History className="w-3.5 h-3.5" />
                    <p key={suggestion}>{highlightText(suggestion, keyword)}</p>
                  </Button>
                  <Button
                    type="button"
                    variant={"link"}
                    className="text-xs font-light z-20"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      clearHistory(suggestion);
                    }}
                  >
                    clear
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {isLoading && (
          <BarLoader
            data-testid="loader"
            color="#2671d9"
            loading
            className="!w-full"
          />
        )}
      </form>

      <div className="mt-4">
        {isError ? (
          <div
            data-testid="error-response"
            className="space-y-3 w-full flex flex-col justify-center items-center py-10"
          >
            <ServerCog color="red" className="w-24 h-24" />
            <p className="text-red-600">Something went wrong.</p>
          </div>
        ) : isEmptyState ? (
          <div
            data-testid="empty-state"
            className="space-y-3 w-full flex flex-col justify-center items-center py-10"
          >
            <Frown color="pink" className="w-24 h-24" />
            <p>There is no data to be display</p>
          </div>
        ) : (
          <Accordion type="single" collapsible={true} className="">
            {searchResult.map((item) => {
              return (
                <AccordionItem value={item.login} key={item.login}>
                  <AccordionTrigger className="rounded-none px-3 hover:no-underline hover:bg-accent hover:cursor-pointer border-b-2 py-3">
                    <div className="w-full ">
                      <div className="text-sm text-gray-600 font-semibold">
                        {item.login}
                      </div>
                      <div className="text-xs">{item.type}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="max-h-96 overflow-auto">
                    <UserRepo userLogin={item.login} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        )}
      </div>
    </div>
  );
};
