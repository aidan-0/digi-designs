import ContactForm from "@/components/ContactForm";
import { FadeText } from "@/components/magicui/fade-text";
import NavbarShowcase from "@/components/NavbarShowcase";
import Link from "next/link";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import BoxReveal from "@/components/magicui/box-reveal";
import { CheckIcon } from "@/components/icons/check-icon";

const page = () => {
	return (
		<div className="min-h-screen bg-fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:14px_24px]">
			{/* Nav Bar */}
			<NavbarShowcase />

			{/* Main Section */}
			<main className="">
				<div className="px-5 xl:px-0 sm:px-10 lg:px-20 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-12 sm:mt-20 max-w-[1600px]">
					{/* Hero and CTA - START */}
					<h1 className="text-[11vw] leading-[11vw] xs:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] mx-auto z-20 font-bold text-center flex flex-col sm:flex-row justify-center">
						<div className="flex justify-center">
							<FadeText
								className="text-dd-dark dark:text-dd-light"
								direction="right"
								framerProps={{
									show: {
										transition: { delay: 0 },
									},
								}}
								text="Project"
							/>
							<FadeText
								className=" text-dd-light-blue px-2"
								direction="left"
								framerProps={{
									show: { transition: { delay: 0 } },
								}}
								text="Showcase"
							/>
						</div>
					</h1>
					<div className="flex justify-center items-center gap-3 xs:gap-4 pt-12">
						<Link
							href="mailto:hello@digidesigns.com.au"
							className="fade-in opacity-0 md:w-[210px] text-center px-4 sm:px-12 py-2 font-semibold hover:bg-dd-dark hover:text-dd-light rounded-[6px] text-dd-dark border-dd-dark border-2  bg-dd-light dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(255,176,50),2px_2px_rgba(255,176,50),3px_3px_rgba(255,176,50),4px_4px_rgba(255,176,50)] dark:hover:shadow-[1px_1px_rgba(255,176,50),2px_2px_rgba(255,176,50),3px_3px_rgba(255,176,50),4px_4px_rgba(255,176,50)]"
						>
							Get in Touch
						</Link>
					</div>
				</div>

				{/* Projects Section */}
				<div
					id="projects"
					className="px-5 sm:px-10 lg:px-20 xl:px-0 mt-12 md:mt-20 flex flex-col justify-center max-w-[1600px] xl:w-4/5 2xl:w-[68%] md:mx-auto fade-in opacity-0"
				>
					<div className="flex justify-center">
						<BoxReveal
							boxColor={"#4e9edd"}
							duration={0.65}
							textDelay={.5}
							boxDelay={.25}
						>
							<h2 className="text-3xl md:text-5xl font-medium">
								Swipe through our latest projects
							</h2>
						</BoxReveal>
					</div>
					<div className="flex py-12 justify-center">
						<ProjectCard />
					</div>
				</div>

				{/* Contact Section */}
				<div
					id="contact"
					className="px-5 sm:px-10 lg:px-20 xl:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto py-12 md:py-20 max-w-[1600px]"
				>
					<section
						id="contact"
						className="fade-in opacity-0 w-full flex flex-col md:grid md:grid-cols-2 bg-card/90 border border-border shadow dark:shadow-custom-inset p-5 xs:p-10 rounded-xl md:gap-8"
					>
						<div className="flex justify-center items-center order-2 md:order-1">
							<ContactForm />
						</div>
						<div className="flex flex-col justify-center order-1 md:order-2 gap-4">
							<h4 className="text-3xl md:text-4xl lg:text-5xl">
								Get in touch today
							</h4>
							<p className="text-xl sm:text-2xl">
								Receive an estimate tailored to your specific
								needs by completing the form.
							</p>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

export default page;
