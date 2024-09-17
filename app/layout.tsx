import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import GlobalAnimations from "@/components/GlobalAnimations";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Digi Designs",
	description:
		"We Make Damn Good Websites | Professional Web Design & Development",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${space_grotesk.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<GlobalAnimations />
					{children}
					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
