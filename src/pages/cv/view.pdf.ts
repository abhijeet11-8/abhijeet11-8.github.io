import { readFile } from "node:fs/promises";

export async function GET() {
	const pdf = await readFile(new URL("../../../public/cv/cv.pdf", import.meta.url));

	return new Response(pdf, {
		headers: {
			"Content-Disposition": 'inline; filename="Abhijeet-Vikram-CV.pdf"',
			"Content-Type": "application/pdf",
			"X-Content-Type-Options": "nosniff",
		},
	});
}
