import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
	return (
		<>
			{/* full-width nav */}
			<Element
				name="top"
				className="shadow rounded-b-xl top-0 sticky z-50 w-full bg-navbar-bg border-b border-border dark:bg-navbar-bg flex items-center justify-between py-6 px-4 md:pl-8 reg:px-8"
				id="navbar-style"
			>
				<Link href="/">
					<Image
						src="/webp-logos/Digi_Designs_Logo_Blue.webp"
						alt="Digi Logo"
						width={128}
						height={128}
						className="w-28 h-14"
					/>
				</Link>

				<div className="absolute right-1/2 translate-x-1/2 transform">

					<div className="hidden reg:flex gap-x-10 items-center text-gray-800 dark:text-dd-light font-semibold text-2xl cursor-pointer">
						<Link
							href="/showcase"
							className="hover:text-dd-light-blue transition duration-400"
						>
							showcase
						</Link>
						<ScrollLink
							to="services"
							smooth={true}
							offset={-80}

							className="hover:text-dd-light-blue transition duration-400">
							services
						</ScrollLink>
						<ScrollLink
							to="process"
							smooth={true}
							offset={-120}
							className="hover:text-dd-light-blue transition duration-400"
						>
							process
						</ScrollLink>
						<ScrollLink
							to="guarantees"
							smooth={true}
							offset={-50}

							className="hover:text-dd-light-blue transition duration-400"
						>
							guarantees
						</ScrollLink>
					</div>
				</div>

				<div className="flex flex-row items-center gap-4 reg:gap-6 pr-[72px] reg:pr-0">
					<ScrollLink
						to="contact"
						smooth={true}
						offset={-50}
						className="hidden xs:flex cursor-pointer px-3 reg:px-5 py-1 reg:py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
					>
						Contact Us
					</ScrollLink>
					<ModeToggle />
				</div>
			</Element>
		</>
	);
};

export default Navbar;
