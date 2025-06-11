import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHome } from "./home.hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, History } from "lucide-react";
import { UserRepo } from "./components/user-repo";
import { BarLoader } from "react-spinners";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useRef, useState } from "react";

export const Home = () => {
  const {
    searchResult,
    keyword,
    setKeyword,
    handleSearch,
    isLoading,
    suggestions,
    showSuggestion,
    setShowSuggestion,
    searchRef,
    clearHistory,
  } = useHome();

  return (
    <div className="md:px-72 md:pt-36 px-8 pt-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(keyword);
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
            <Button type="submit" variant={"link"} className=" z-20">
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
                  <div
                    className="flex items-center space-x-2 flex-1"
                    onMouseDown={() => {
                      handleSearch(suggestion);
                    }}
                  >
                    <History className="w-3.5 h-3.5" />
                    <p key={suggestion}>{suggestion}</p>
                  </div>
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

        <BarLoader color="#2671d9" loading={isLoading} className="!w-full" />
      </form>

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
    </div>
  );
};
