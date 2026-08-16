declare module "@pagefind/default-ui" {
	declare class PagefindUI {
		constructor(arg: unknown);
	}
}

declare module "pdfjs-dist/build/pdf.mjs" {
	export const getDocument: (...args: unknown[]) => any;
	export const GlobalWorkerOptions: { workerSrc: string };
}
