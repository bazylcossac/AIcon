"use client";
import { createTRPCReact } from "@trpc/react-query";
import { AppRouterType } from "./routers";

export const trpc = createTRPCReact<AppRouterType>();
