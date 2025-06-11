import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon, Frown } from "lucide-react";
import type { UserRepoProps } from "./user-repo.types";
import { useUserRepo } from "./user-repo.hooks";
import { BarLoader } from "react-spinners";
import { cn } from "@/lib/utils";
import { LANGUAGE_COLORS } from "@/lib/constants/language-colors";

export function UserRepo(props: UserRepoProps) {
  const { data, isLoading, isEmptyState } = useUserRepo(props);

  if (isLoading) {
    return <BarLoader color="pink" loading className="!w-full !h-1" />;
  }

  if (isEmptyState) {
    return (
      <div className="space-y-3 w-full flex flex-col justify-center items-center py-10">
        <Frown color="pink" className="w-14 h-14" />
        <p>This user does not have any repositories yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2 pt-2">
      {data.map((item) => {
        return (
          <Card key={item.id} className="w-full">
            <CardHeader>
              <CardTitle>
                <div className="items-start flex space-x-1.5">
                  <p>{item.full_name}</p>
                  <Badge
                    variant="secondary"
                    className="-mt-1 h-4 text-xs font-normal"
                  >
                    {item.visibility}
                  </Badge>
                </div>
                <div className="flex space-x-5 items-center mt-2">
                  <div className="flex space-x-1 items-center">
                    <div
                      className={cn("w-2 h-2 bg-blue-900 rounded-full")}
                      style={{
                        backgroundColor: LANGUAGE_COLORS[item.language],
                      }}
                    ></div>
                    <p className="text-xs font-light">{item.language}</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <p className="text-xs font-light">{item.updated_at}</p>
                  </div>
                </div>
              </CardTitle>

              <CardAction className="flex items-center space-x-1">
                <p className="text-sm">{item.stargazers_count}</p>
                <StarIcon className="w-4 h-4 mb-0.5" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <div> {item.description}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
