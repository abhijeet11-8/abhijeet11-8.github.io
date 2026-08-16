import type { CollectionEntry } from "astro:content";
import { siteConfig } from "@/site.config";

export function getFormattedDate(
	date: Date | undefined,
	options?: Intl.DateTimeFormatOptions,
): string {
	if (date === undefined) {
		return "Invalid Date";
	}

	return new Intl.DateTimeFormat(siteConfig.lang, {
		...(siteConfig.date.options as Intl.DateTimeFormatOptions),
		...options,
	}).format(date);
}

export function collectionDateSort(
	a: CollectionEntry<"post" | "project">,
	b: CollectionEntry<"post" | "project">,
) {
	const aDate = "publishDate" in a.data ? a.data.publishDate : a.data.sortDate;
	const bDate = "publishDate" in b.data ? b.data.publishDate : b.data.sortDate;
	return bDate.getTime() - aDate.getTime();
}
