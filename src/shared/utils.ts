import { twMerge } from "tailwind-merge";
import { cx } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/types";

export const cn = (...args: ClassValue[]) => twMerge(cx(args));