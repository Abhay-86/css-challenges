import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Dec20 from "@/components/css/Dec20";
import Dec19 from "@/components/css/Dec19";
import Dec18 from "@/components/css/Dec18";
import Dec17 from "@/components/css/Dec17";

const items = ["Dec20", "Dec19", "Dec18", "Dec17"];

const componentMap: Record<string, React.ComponentType> = {
  Dec20: Dec20,
  Dec19: Dec19,
  Dec18: Dec18,
  Dec17: Dec17,
};

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Daily CSS Experiments
        </h1>
        <p className="mt-2 text-gray-500">
          Exploring creative UI components
        </p>
      </header>

      <div className="
        grid gap-6 p-4
        place-items-center
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      ">
        {items.map((item) => {
          const Component = componentMap[item];

          return (
            <Card key={item} className="w-[300px] h-[300px]">
              <CardHeader>
                <CardTitle>{item}</CardTitle>
                <CardDescription>
                  This is a {item} card.
                </CardDescription>
              </CardHeader>

              <CardContent className="h-[200px] flex items-center justify-center">
                {Component ? <Component /> : <div>Not found</div>}
              </CardContent>

              <CardFooter></CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}


