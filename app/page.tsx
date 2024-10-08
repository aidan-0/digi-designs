"use client";

import React from "react";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { CheckIcon } from "@/components/icons/check-icon";
import BoxReveal from "@/components/magicui/box-reveal";
import { FadeText } from "@/components/magicui/fade-text";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { BackgroundBeamsDemo } from "@/components/demos/background-beams-demo";
import NavbarHome from "@/components/NavbarHome";
import ContactForm from "@/components/ContactForm";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { services } from "@/data";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
	useGSAP(() => {
		gsap.fromTo(
			".services-items",
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				stagger: 0.15,
				scrollTrigger: {
					trigger: ".services-items",
					start: "top 95%",
				},
			}
		);

		gsap.fromTo(
			".features-item",
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				stagger: 0.15,
				scrollTrigger: {
					trigger: ".features-item",
					start: "top 95%",
				},
			}
		);
	}, []);

	return (
		<>
			<div className="min-h-screen bg-fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:14px_24px]">
				{/* Nav Bar */}
				<NavbarHome />

				{/* Main Section */}
				<main className="">
					<div className="px-5 xl:px-0 sm:px-10 lg:px-20 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-12 sm:mt-20 max-w-[1600px]">
						{/* Hero and CTA - START */}
						<div className="">
							<h1 className="text-[11vw] leading-[11vw] xs:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] mx-auto z-20 font-bold text-center flex flex-col sm:flex-row justify-center">
								<div className="flex justify-center">
									<FadeText
										className="text-dd-dark dark:text-dd-light"
										direction="right"
										framerProps={{
											show: {
												transition: { delay: 0.35 },
											},
										}}
										text="We make"
									/>
									<FadeText
										className=" text-dd-light-blue px-2"
										direction="up"
										framerProps={{
											show: { transition: { delay: 0.1 } },
										}}
										text="damn"
									/>
								</div>
								<FadeText
									className="text-dd-dark dark:text-dd-light"
									direction="left"
									framerProps={{
										show: { transition: { delay: 0.35 } },
									}}
									text="good websites."
								/>
							</h1>
							<p className="fade-in opacity-0 text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto dark:text-gray-400 text-gray-600">
								Get an estimate tailored to your specific needs
								by completing the form below.
							</p>
							<div className="flex justify-center items-center gap-3 xs:gap-4">
								<Link
									href="mailto:hello@digidesigns.com.au"
									className="fade-in opacity-0 md:w-[210px] text-center px-4 sm:px-12 py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
								>
									Get in Touch
								</Link>
								<Link
									href="/showcase"
									className="fade-in opacity-0 md:w-[210px] text-center px-4 sm:px-12 py-2 font-semibold hover:bg-dd-dark hover:text-dd-light rounded-[6px] text-dd-dark border-dd-dark border-2  bg-dd-light dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(255,176,50),2px_2px_rgba(255,176,50),3px_3px_rgba(255,176,50),4px_4px_rgba(255,176,50)] dark:hover:shadow-[1px_1px_rgba(255,176,50),2px_2px_rgba(255,176,50),3px_3px_rgba(255,176,50),4px_4px_rgba(255,176,50)]"
								>
									Showcase
								</Link>
							</div>
							{/* Hero and CTA - END */}
							{/* Box Reveal - START*/}
							<div id="services" /> {/* Scroll to services */}
							<div className="fade-in opacity-0 flex flex-row flex-wrap gap-3 sm:gap-4 items-center justify-center lg:gap-44 md:mx-auto mt-12 md:mt-16 md:w-4/5 text-xl font-semibold">
								<BoxReveal boxColor={"#4e9edd"} duration={0.5} textDelay={1} boxDelay={0.75}>
									<p className="flex gap-2 md:gap-x-4 items-center">
										<CheckIcon className="text-dd-light-blue" />
										Websites
									</p>
								</BoxReveal>
								<BoxReveal
									boxColor={"#4e9edd"}
									duration={0.5}
									textDelay={1.25}
									boxDelay={1}
								>
									<p className="flex gap-2 md:gap-x-4 items-center">
										<CheckIcon className="text-dd-light-blue" />
										Applications
									</p>
								</BoxReveal>
								<BoxReveal
									boxColor={"#4e9edd"}
									duration={0.5}
									textDelay={1.5}
									boxDelay={1.25}
								>
									<p className="flex gap-2 md:gap-x-4 items-center">
										<CheckIcon className="text-dd-light-blue" />
										Solutions
									</p>
								</BoxReveal>
							</div>
							{/* Box Reveal - END */}
						</div>

						{/* Services - Start */}
						<Element name="services">
							<div className="fade-in opacity-0 md:px-0 md:mx-auto pt-16 md:pt-20">
								<h2 className="text-3xl md:text-5xl text-center font-medium">
									Built from the ground up
								</h2>
								<p className="text-center pt-4 md:w-1/2 mx-auto text-xl md:text-2xl dark:text-gray-400 text-gray-500">
									All of our services are designed to help
									your business stand out
								</p>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10 ">
									{services.map((service) => (
										<div
											key={service.title}
											className="services-items flex flex-col justify-between h-full text-center p-4 hover:scale-[1.03] transition-transform duration-500 rounded-md  bg-card/90 border border-border shadow-md dark:shadow-custom-inset"
										>
											<Image
												src={service.icon}
												width={400}
												height={400}
												className="object-contain w-full h-52 rounded-md"
												alt="image"
											/>
											<h5 className="text-xl font-medium">
												{service.title}
											</h5>
											<p className="dark:text-gray-400 text-gray-500">
												{service.description}
											</p>
										</div>
									))}
								</div>
							</div>
						</Element>
						{/* Services - End */}
					</div>

					{/* Scroll Velocity - Start */}
					<section className="py-16 md:py-20">
						<ScrollBasedVelocityDemo />
						<div id="process" />
					</section>
					{/* Scroll Velocity - End */}

					<div className="px-5 xl:px-0 sm:px-10 lg:px-20 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-0 md:mt-12 sm:mt-20 max-w-[1600px]">
						<Element name="process">
							<div className="fade-in opacity-0 md:px-0 md:mx-auto">
								<h2 className="text-3xl md:text-5xl md:text-center font-medium flex flex-wrap items-center gap-x-2 mx-auto justify-center">
									Our{" "}
									<span className="text-dd-light-blue flex gap-x-1 items-center">
										{" "}
										<Image
											src={"/icons/squiggle.svg"}
											width={100}
											height={100}
											className="w-6"
											alt="image"
										/>
										Development
										<Image
											src={"/icons/star.svg"}
											width={100}
											height={100}
											className="w-6 mb-8"
											alt="image"
										/>
									</span>{" "}
									Process
								</h2>

								<p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl dark:text-gray-400 text-gray-500">
									We craft each of our services to ensure your
									business stands out and gets the attention
									it deserves.
								</p>

								<div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1100px] mx-auto gap-3 sm:gap-0 ">
									<div className="w-full md:w-3/5 order-2 md:order-1">
										<AnimatedBeamMultipleOutputDemo />
									</div>
									<div className="w-full md:w-2/5 order-1 md:order-2 md:ml-0">
										<BoxRevealDemo />
									</div>
								</div>
							</div>
						</Element>

						{/* Testimonials - Start */}
						<section className="fade-in opacity-0 mt-16 md:mt-20">
							{/* Trusted By - START */}
							<h2 className="text-3xl md:text-5xl text-center font-medium flex flex-wrap items-center mx-auto justify-center">
								Trusted by Local Australian Businesses
							</h2>
							<p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl dark:text-gray-400 text-gray-500">
								Your local partner for tailored web solutions
								that drive results.
							</p>
							<div className="md:flex items-center justify-between gap-y-4 my-4 gap-x-28 mx-auto">
								<div className="md:w-2/5">
									<div className="flex my-6 gap-x-5 w-full">
										<div>
											<h4 className="text-dd-light-blue text-3xl md:text-5xl">
												<NumberTicker value={1000} /> +
												<p className="dark:text-gray-400 text-gray-500 text-sm md:text-md">
													Hours of Development
												</p>
											</h4>
										</div>

										<div className="w-px bg-gray-300 self-stretch"></div>

										<div className="flex-1 m-auto">
											<h4 className="text-dd-light-blue text-3xl md:text-5xl whitespace-nowrap">
												<NumberTicker value={25} /> +
												<p className="dark:text-gray-400 text-gray-500 text-sm md:text-md text-wrap">
													Projects Completed
												</p>
											</h4>
										</div>
									</div>
								</div>

								<div className="overflow-hidden md:w-4/5">
									<InfiniteMovingLogos
										speed="normal"
										direction="left"
										items={[
											{
												logoLight: "/client-logos/Logo-Edmonds-Twins-Dark.webp",
												logoDark: "/client-logos/Logo-Edmonds-Twins-light.webp",
												name: "Edmonds Twins Coaching",
												url: "https://edmondstwinscoaching.au",
											},
											{
												logoLight: "/client-logos/Endeavour-Caravan-Centre-Logo-dark.webp",
												logoDark: "/client-logos/endeavour-caravan-logo-light.webp",
												name: "Endeavour Caravan Centre",
												url: "https://endeavourcaravancentre.com.au",
											},
											{
												logoLight: "/client-logos/House-of-stuart-logo.webp",
												logoDark: "/client-logos/House-of-stuart-logo.webp",
												name: "House of Stuart",
												url: "https://houseofstuart.com.au",
											},
											{
												logoLight: "/client-logos/Ironstate-Capital-Partners-logo.webp",
												logoDark: "/client-logos/Ironstate-Capital-Partners-gold.webp",
												name: "Ironstate Capital Partners",
												url: "https://ironstate.com.au",
											},
											{
												logoLight: "/client-logos/white-round-richards-muscle-lab-no-background.webp",
												logoDark: "/client-logos/white-round-richards-muscle-lab-no-background.webp",
												name: "Richards Muscle Lab",
												url: "https://richardsmusclelab.com",
											},
										]}
									/>
								</div>
							</div>
							{/* Trusted By - END */}
							<div className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20">
								<Image
									src={
										"/other/richard-from-richards-muscle-lab.webp"
									}
									width={1000}
									height={1000}
									className=" md:w-1/3 rounded-md"
									alt="image"
								/>
								<div className="flex flex-col gap-y-5">
									<h1 className="text-md md:text-md lg:text-lg ">
										&quot;Aidan at Digi Designs was an
										absolute pleasure to work with. The
										continuous communication allowed for the
										website to be complete without any
										drafts or edits needed and was ready to
										go on schedule as discussed in the
										proposal. I would highly recommend Digi
										Designs to anyone that is looking to
										create an awesome website tailored to
										your businesses exact needs.&quot;
									</h1>
									<div className="flex items-center gap-x-1">
										<IconStarFilled className="text-4xl text-yellow-500" />
										<IconStarFilled className="text-4xl text-yellow-500" />
										<IconStarFilled className="text-4xl text-yellow-500" />
										<IconStarFilled className="text-4xl text-yellow-500" />
										<IconStarFilled className="text-4xl text-yellow-500" />
									</div>

									<span className="text-xl font-medium">
										Richard Detering
										<br />
										Richards Muscle Labs
									</span>
								</div>
							</div>
						</section>
						{/* Testimonials - End */}
					</div>

					{/* Background Beams */}
					<div id="guarantees" />
					<section className="mt-16 md:mt-20 ">
						<Element name="guarantees">
							<BackgroundBeamsDemo />
						</Element>
					</section>

					{/* Contact Section */}
					<Element
						name="contact"
						className="px-5 sm:px-10 lg:px-20 xl:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto max-w-[1600px] py-12 md:py-20"
					>
						<section
							id="contact"
							className="fade-in opacity-0 w-full flex flex-col md:grid md:grid-cols-2 bg-card/85 border border-border p-5 xs:p-10 rounded-xl shadow dark:shadow-custom-inset md:gap-8"
						>
							<div className="flex justify-center items-center order-2 md:order-1">
								<ContactForm />
							</div>
							<div className="flex flex-col justify-center order-1 md:order-2 gap-4">
								<h4 className="text-3xl md:text-4xl lg:text-5xl">
									Let&apos;s make things happen
								</h4>
								<p className="text-xl sm:text-2xl">
									Get in touch with us today!
								</p>
							</div>
						</section>
					</Element>
				</main>
			</div>
		</>
	);
}
