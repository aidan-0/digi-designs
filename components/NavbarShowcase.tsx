import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
	return (
		<>
			{/* full-width nav */}
			<div
				className="shadow rounded-b-xl top-0 sticky z-50 w-full bg-navbar-bg border-b border-border dark:bg-navbar-bg flex items-center justify-between py-6 px-4 md:px-8"
				id="navbar-style"
			>
				<Link href="/">
					<Image
						src="/webp-logos/Digi_Designs_Logo_Blue.webp"
						alt="Digi Logo"
						width={150}
						height={150}
						className="w-28 h-14"
					/>
				</Link>

				<div className="absolute right-1/2 translate-x-1/2 transform">
					<div className="hidden md:flex gap-x-10 items-center text-gray-800 dark:text-dd-light font-semibold text-2xl cursor-pointer">
						<Link
							href="/showcase"
							className="hover:text-dd-light-blue transition duration-400"
						>
							showcase
						</Link>
						<Link
							href="/#services"
							scroll={true}
							// offset={-80}


							className="hover:text-dd-light-blue transition duration-400">
							services
						</Link>
						<Link
							href="/#process"
							scroll={true}
							// offset={-120}
							className="hover:text-dd-light-blue transition duration-400"
						>
							process
						</Link>
						<Link
							href="/#guarantees"
							scroll={true}
							// offset={-50}

							className="hover:text-dd-light-blue transition duration-400"
						>
							guarantees
						</Link>
					</div>
				</div>

				<div className="flex flex-row items-center gap-2 sm:gap-6">
					<Link
						href="#contact"
						className="cursor-pointer px-4 sm:px-5 py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
					>
						Contact Us
					</Link>
					<ModeToggle />
				</div>
			</div>
		</>
	);
};

export default Navbar;
