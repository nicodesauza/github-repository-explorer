import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHome } from "./home.hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, History, ServerCog } from "lucide-react";
import { UserRepo } from "./components/user-repo";
import { BarLoader } from "react-spinners";
import { cn } from "@/lib/utils";

export const Home = () => {
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
    isList,
    isError,
  } = useHome();

  return (
    <div
      className={cn(
        "min-h-screen min-w-screen px-20 md:px-48",
        isList ? "py-10 md:py-12" : "flex justify-center items-center pb-32"
      )}
    >
      <div
        className={cn(
          "w-full",
          isList ? "md:w-[800px] md:max-w-full" : "md:w-[600px]"
        )}
      >
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
                <Search className="cursor-pointer w-4 h-4 text-red-400" />
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
                      <p key={suggestion}>{suggestion}</p>
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

        {isError ? (
          <div
            data-testid="error-response"
            className="space-y-3 w-full flex flex-col justify-center items-center py-10"
          >
            <ServerCog color="red" className="w-24 h-24" />
            <p className="text-red-600">Something went wrong.</p>
          </div>
        ) : (
          <Accordion type="single" collapsible={true} className="px-2">
            {searchResult.map((item) => {
              return (
                <AccordionItem value={item.login} key={item.login}>
                  <AccordionTrigger className="rounded-none border-b-2 py-3">
                    <div className="flex items-center gap-2 w-full">
                      <div className="text-xl text-default font-semibold">
                        {item.login}
                      </div>
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
