import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/Navbar";
import { Poppins, Space_Grotesk } from "next/font/google";
import { ModeToggle } from "@/components/ModeToggle";

// const poppins = Poppins({
// 	subsets: ["latin"],
// 	variable: "--font-poppins",
// 	weight: ["300", "400", "500", "600", "700"],
// });
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
				{/* <ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					// disableTransitionOnChange
				> */}
					{/* <ModeToggle /> causes nav bar to move atm */}
					{children}
				{/* </ThemeProvider> */}
			</body>
		</html>
	);
}
