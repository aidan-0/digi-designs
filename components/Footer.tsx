import Image from "next/image";

const Footer = () => {
	return (
		<footer className="border-t bg-card dark:bg-background-darker font-medium mt-12 md:mt-20 min-h-20 rounded-t-xl flex flex-col md:flex-row justify-around items-center py-6 ">
			<div>
				<a
					href="mailto:hello@digidesigns.com.au"
					className="hover:text-[#035193] transition duration-400"
				>
					hello@digidesigns.com.au
				</a>
			</div>
			<div className="pt-[6px] pb-6 md:p-0">
				© {new Date().getFullYear()} Digi Designs - Aidan McDonald{" "}
			</div>
			<div className="flex flex-row gap-3 justify-center items-center">
			<a href="https://github.com/aidan-0" target="_blank" rel="nofollow">
				<Image
					src="/icons/github-mark.svg"
					alt="Github logo"
					width={30}
					height={30}
					className="cursor-pointer h-8 w-8 hover:brightness-150 transition duration-400"
				/>
				</a>
				<a href="https://www.linkedin.com/in/aidan-mcdonald0/" target="_blank" rel="nofollow">
				<Image
					src="/icons/linkedin-logo.svg"
					alt="LinkedIn logo"
					width={30}
					height={30}
					className="cursor-pointer h-9 w-9 hover:brightness-150 transition duration-400"
				/>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
