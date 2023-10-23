import { twMerge, type ClassNameValue } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

/**
 * Merges class names and returns a string of unique class names.
 * @param classLists An array of class names (strings) or objects.
 * @returns A string of unique class names.
 * @throws An error if the input is not an array of class names (strings) or objects.
 */
export function cn(...classLists: ClassValue[]): string {
    if (!Array.isArray(classLists)) {
        throw new Error(
            "cn() only accepts an array of class names (strings) or objects"
        );
    }
    const mergedClasses = twMerge(clsx(...classLists)) as unknown as ClassNameValue[];
    return mergedClasses.join(" ");
}
