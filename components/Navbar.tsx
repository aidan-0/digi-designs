// Not in use atm

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
	return (
		<>
		{/* regular nav */}
		{/* <Element
			name="top"
			className="overflow-hidden shadow rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-dd bg-dd-light dark:bg-card flex items-center justify-between py-6 px-4 md:px-8 max-w-[1600px]"
		>
			<Link href="/">
				<Image
					src="/webp-logos/Digi_Designs_Logo_Blue.webp"
					alt="Digi Logo"
					width={128}
					height={128}
					className="w-28"
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

			<div className="flex flex-row items-center gap-6">
				<Link
					href="mailto:hello@digidesigns.com.au"
					className="px-4 sm:px-5 py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
				>
					Contact Us
				</Link>
				<ModeToggle />
			</div>
		</Element> */}
		{/* full-width nav */}
		<Element
			name="top"
			className=" shadow rounded-b-[6px] top-0 sticky z-50 w-full bg-dd bg-dd-light dark:bg-card flex items-center justify-between py-6 px-4 md:px-8"
		>
			<Link href="/">
				<Image
					src="/webp-logos/Digi_Designs_Logo_Blue.webp"
					alt="Digi Logo"
					width={128}
					height={128}
					className="w-28"
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

			<div className="flex flex-row items-center gap-6">
				<Link
					href="mailto:hello@digidesigns.com.au"
					className="px-4 sm:px-5 py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
				>
					Contact Us
				</Link>
				<ModeToggle />
			</div>
		</Element>
		</>
	);
};

export default Navbar;
