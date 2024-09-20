"use client";

import ContactForm from "@/components/ContactForm";
import { FadeText } from "@/components/magicui/fade-text";
import NavbarShowcase from "@/components/NavbarShowcase";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import BoxReveal from "@/components/magicui/box-reveal";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);




export default function Showcase() {
	useGSAP(() => {
		gsap.fromTo(
			".carousel-cards",
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 0.5,
				stagger: 0.25,
				scrollTrigger: {
					trigger: ".carousel-cards",
					start: "top 95%",
				},
			}
		);
	}, []);

	return (
		<div className="min-h-screen bg-fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:14px_24px]">
			{/* Nav Bar */}
			<NavbarShowcase />

			{/* Main Section */}
			<main className="">
				<div className="px-5 xl:px-0 sm:px-10 lg:px-20 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-12 reg:mt-20 max-w-[1600px]">
					{/* Hero and CTA - START */}
					<h1 className="text-[11vw] leading-[11vw] xs:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] mx-auto z-20 font-bold text-center flex flex-col sm:flex-row justify-center">
						<div className="flex justify-center">
							<FadeText
								className="text-dd-dark dark:text-dd-light px-1 xs:px-2"
								direction="right"
								framerProps={{
									show: {
										transition: { delay: 0.1 },
									},
								}}
								text="Project"
							/>
							<FadeText
								className=" text-dd-light-blue px-1 sm:px-2"
								direction="left"
								framerProps={{
									show: { transition: { delay: 0.1 } },
								}}
								text="Showcase"
							/>
						</div>
					</h1>
				</div>

				{/* Projects Section */}
				<div
					id="projects"
					className="px-5 sm:px-10 lg:px-20 xl:px-0 mt-4 reg:mt-12 flex flex-col justify-center max-w-[1600px] xl:w-4/5 2xl:w-[68%] md:mx-auto fade-in opacity-0"
				>
					<div className="flex flex-col justify-center items-center text-center">
						<BoxReveal
							boxColor={"#4e9edd"}
							duration={0.65}
							textDelay={0.5}
							boxDelay={0.25}
						>
							<h2 className="text-2xl sm:text-4xl md:text-4xl reg:text-5xl font-medium">
								Swipe through our latest projects
							</h2>
						</BoxReveal>
						<p className="text-xl md:text-2xl pt-2 dark:text-gray-400 text-gray-600">
							or <span className="text-dd-light-blue">click</span>{" "}
							to learn more
						</p>
					</div>
					<div className="flex py-8 reg:py-20 justify-center">
						<ProjectCard />
					</div>
				</div>

				{/* Contact Section */}
				<div
					id="contact"
					className="fade-in opacity-0  px-5 sm:px-10 lg:px-20 xl:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto pb-12 md:pb-20 max-w-[1600px]"
				>
					<section
						id="contact"
						className="w-full flex flex-col md:grid md:grid-cols-2 bg-card/90 border border-border shadow dark:shadow-custom-inset p-5 xs:p-10 rounded-xl md:gap-8"
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