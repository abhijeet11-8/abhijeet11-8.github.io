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

type SortableContentEntry = {
	data: {
		publishDate?: Date;
		sortDate?: Date;
	};
};

export function collectionDateSort(a: SortableContentEntry, b: SortableContentEntry) {
	const aDate = a.data.publishDate ?? a.data.sortDate;
	const bDate = b.data.publishDate ?? b.data.sortDate;
	if (!aDate || !bDate) {
		return 0;
	}
	return bDate.getTime() - aDate.getTime();
}
