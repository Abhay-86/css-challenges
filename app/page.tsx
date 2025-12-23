import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { lazy, Suspense } from "react";

// Lazy load components for better performance
const Dec21 = lazy(() => import("@/components/css/Dec21"));
const Dec20 = lazy(() => import("@/components/css/Dec20"));
const Dec19 = lazy(() => import("@/components/css/Dec19"));
const Dec18 = lazy(() => import("@/components/css/Dec18"));
const Dec17 = lazy(() => import("@/components/css/Dec17"));
const Dec16 = lazy(() => import("@/components/css/Dec16"));
const Dec15 = lazy(() => import("@/components/css/Dec15"));
const Dec14 = lazy(() => import("@/components/css/Dec14"));

const items = ["Dec21", "Dec20", "Dec19", "Dec18", "Dec17", "Dec16", "Dec15","Dec14"];

const componentMap: Record<string, React.ComponentType> = {
  Dec21: Dec21,
  Dec20: Dec20,
  Dec19: Dec19,
  Dec18: Dec18,
  Dec17: Dec17,
  Dec16: Dec16,
  Dec15: Dec15,
  Dec14: Dec14,
};

// Map each challenge/date to its CSSBattle url. Update per-item links as you solve them.
const linkMap: Record<string, string> = {
  Dec21: "https://cssbattle.dev/play/ArcjIfPj8fkr7EX2Km56",
  Dec20: "https://cssbattle.dev/play/1qDvtL9IDM2z2zW5Jtx2",
  Dec19: "https://cssbattle.dev/play/PGbERCTxzKMLkBImphKz",
  Dec18: "https://cssbattle.dev/play/GsEMtYqgRk2sQ3588dPj",
  Dec17: "https://cssbattle.dev/play/PD1RVCBVhUGKYXTqJOpR",
  Dec16: "https://cssbattle.dev/play/ujoQ19gIDKfouA2jBWyh",
  Dec15: "https://cssbattle.dev/play/31cMU96X4BSQxoJRkWak",
  Dec14: "https://cssbattle.dev/play/qPIDsl1GfFSfpmk01pQO",
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
                <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
                  {Component ? <Component /> : <div>Not found</div>}
                </Suspense>
              </CardContent>

              <CardFooter>
                {linkMap[item] ? (
                  <a
                    href={linkMap[item]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View on CSSBattle
                  </a>
                ) : null}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}



