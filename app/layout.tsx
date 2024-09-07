import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], variable: '--font-poppins', weight: ["300", "400", "500", "600", "700"]});


export const metadata: Metadata = {
	title: "Digi Designs",
	description: "We Make Damn Good Websites | Professional Web Design & Development",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					// disableTransitionOnChange
				>
          <Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
