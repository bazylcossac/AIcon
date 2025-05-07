"use client";
import {
  defaultShouldDehydrateQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import superjson from "superjson";
import { ReactNode } from "react";
import { trpc } from "./trpcClient";
import { httpBatchLink } from "@trpc/client";

export default function Provider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: superjson.deserialize,
      },
    },
  });

  const cclient = trpc.createClient({
    links: [httpBatchLink({ url: "http://localhost:3000/api/trpc" })],
  });

  return (
    <trpc.Provider client={cclient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
