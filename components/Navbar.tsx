// Not in use atm

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

const Navbar = () => {
	return (
		<Element
			name="top"
			className="overflow-hidden shadow rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-background flex items-center justify-between py-6 px-4 md:px-8 mx-6"
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
				<div className="hidden md:flex gap-x-10 items-center text-gray-800 font-semibold text-2xl cursor-pointer">
					<Link href="/showcase" className="hover:text-dd-light-blue">
						showcase
					</Link>
					<ScrollLink
						to="services"
						smooth={true}
						className="hover:text-dd-light-blue"
					>
						services
					</ScrollLink>
					<ScrollLink
						to="process"
						smooth={true}
						className="hover:text-dd-light-blue"
					>
						process
					</ScrollLink>
					<ScrollLink
						to="guarantees"
						smooth={true}
						className="hover:text-dd-light-blue"
					>
						guarantees
					</ScrollLink>
				</div>
			</div>

			<div className="flex items-center gap-x-4">
				<a
					href="mailto:hello@digidesigns.com.au"
					className="px-5 py-2 hover:bg-dd-light hover:text-dd-dark rounded-[6px] border-2 border-dd-dark text-dd-light bg-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
				>
					Contact Us
				</a>
			</div>
		</Element>
	);
};

export default Navbar;
