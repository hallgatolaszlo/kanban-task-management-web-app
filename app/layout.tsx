import { ThemeProvider } from "@/app/components/ThemeProvider";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["500", "700"],
});

export const metadata: Metadata = {
	title: "kanban",
	description:
		"A simple and beautiful Kanban app to manage your projects and tasks",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${plusJakartaSans.className} antialiased`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
