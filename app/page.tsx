"use client";

import { CheckIcon } from "@/components/icons/check-icon";
import BoxReveal from "@/components/magicui/box-reveal";
import { FadeText } from "@/components/magicui/fade-text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

export default function Home() {
	return (
		<>
			<div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
				{/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}
				{/* Nav Bar */}
				<Element
					name="top"
					className="overflow-hidden shadow rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-dd-light dark:bg-card flex items-center justify-between py-6 px-4 md:px-8 mx-6"
				>
					<Link href="/">
						<Image
							src="/webp-logos/Digi_Designs_Logo_Blue_Long.webp"
							alt="Digi Logo"
							width={1000}
							height={1000}
							className="w-56"
						/>
					</Link>

					<div className="absolute right-1/2 translate-x-1/2 transform">
						<div className="hidden md:flex gap-x-10 items-center text-gray-800 dark:text-dd-light font-semibold text-2xl cursor-pointer">
							<Link
								href="/showcase"
								className="hover:text-dd-light-blue transision duration-250"
							>
								showcase
							</Link>
							<ScrollLink
								to="services"
								smooth={true}
								className="hover:text-dd-light-blue transision duration-250"
							>
								services
							</ScrollLink>
							<ScrollLink
								to="process"
								smooth={true}
								className="hover:text-dd-light-blue transision duration-250"
							>
								process
							</ScrollLink>
							<ScrollLink
								to="guarantees"
								smooth={true}
								className="hover:text-dd-light-blue transision duration-250"
							>
								guarantees
							</ScrollLink>
						</div>
					</div>

					<Link
						href="mailto:hello@digidesigns.com.au"
						className="px-5 py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
					>
						Contact Us
					</Link>
				</Element>

				{/* Main Section */}
				<main className="md:pb-10">
					<div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-12 sm:mt-20">
						<h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mx-auto z-20 font-bold text-center flex flex-col sm:flex-row justify-center">
							<FadeText
								className="text-dd-dark dark:text-dd-light"
								direction="right"
								framerProps={{
									show: { transition: { delay: 0.3 } },
								}}
								text="We make"
							/>
							<div className="flex justify-center">
							<FadeText
								className=" text-dd-light-blue px-2"
								direction="up"
								framerProps={{
									show: { transition: { delay: 0 } },
								}}
								text="damn"
							/>
							<FadeText
								className="text-dd-dark dark:text-dd-light"
								direction="left"
								framerProps={{
									show: { transition: { delay: 0.3 } },
								}}
								text="good websites."
							/>
							</div>
						</h1>

						<p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-600">
							Change to CTASOur mission is simple; make you a damn
							good website.
						</p>
						</div>
						<div className="flex md:justify-center items-center gap-x-4">
						<Link
							href="mailto:hello@digidesigns.com.au"
							className="px-12 py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
						>
							Book a Call
						</Link>
						<Link
							href="mailto:hello@digidesigns.com.au"
							className="px-12 py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-dark border-dd-dark border-2  bg-dd-light dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
						>
							Showcase
						</Link>
					</div>
					
					
					{/*  */}
					<div className="grid grid-cols-3 md:grid-cols-3 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16 md:w-4/5">
						<BoxReveal boxColor={"#4e9edd"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-2 md:gap-x-4 items-center">
								<CheckIcon className="text-dd-light-blue text-xl"/>
								Websites
							</p>
						</BoxReveal>
						<BoxReveal boxColor={"#4e9edd"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-2 md:gap-x-4 items-center">
								<CheckIcon className="text-dd-light-blue text-xl"/>
								Applications
							</p>
						</BoxReveal>
						<BoxReveal boxColor={"#4e9edd"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-2 md:gap-x-4 items-center">
								<CheckIcon className="text-dd-light-blue text-xl"/>
								Solutions
							</p>
						</BoxReveal>
					</div>




				</main>
			</div>
		</>
	);
}
