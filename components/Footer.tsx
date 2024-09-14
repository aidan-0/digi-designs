import Image from "next/image";

const Footer = () => {
	return (
		<footer className="border-t bg-card dark:bg-background-darker font-medium mt-12 md:mt-20 h-20 rounded-t-xl flex flex-row justify-around items-center">
			<div>
				<a
					href="mailto:hello@digidesigns.com.au"
					className="hover:text-[#035193] transition duration-400"
				>
					hello@digidesigns.com.au
				</a>
			</div>
			<div>
				© {new Date().getFullYear()} Digi Designs - Aidan McDonald{" "}
			</div>
			<div className="flex flex-row gap-3 justify-center items-center">
				<Image
					src="/icons/github-mark.svg"
					alt="Github logo"
					width={30}
					height={30}
					className="cursor-pointer h-8 w-8 hover:brightness-150 transition duration-400"
				/>
				<Image
					src="/icons/linkedin-logo.svg"
					alt="LinkedIn logo"
					width={30}
					height={30}
					className="cursor-pointer h-9 w-9 hover:brightness-150 transition duration-400"
				/>
			</div>
		</footer>
	);
};

export default Footer;
