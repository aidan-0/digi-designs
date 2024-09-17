import ContactForm from "@/components/ContactForm";
import { FadeText } from "@/components/magicui/fade-text";
import NavbarShowcase from "@/components/NavbarShowcase";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div className="min-h-screen bg-fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:14px_24px]">
			{/* Nav Bar */}
			<NavbarShowcase />

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
									text="Some of our"
								/>
								<FadeText
									className=" text-dd-light-blue px-2"
									direction="up"
									framerProps={{
										show: { transition: { delay: 0 } },
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
						<p className="fade-in opacity-0 text-center text-xl my-2 md:text-2xl md:w-4/5 mx-auto text-gray-600">
							(and other digital solutions)
						</p>
						<p className="fade-in opacity-0 text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-600">
							Get an estimate tailored to your specific needs by
							completing the form below.
						</p>
						<div className="flex justify-center items-center gap-3 xs:gap-4">
							{/* <Link
								href="mailto:hello@digidesigns.com.au"
								className="fade-in opacity-0 md:w-[210px] text-center px-4 sm:px-12 py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
							>
								Get in Touch
							</Link> */}
							<Link
								href="mailto:hello@digidesigns.com.au"
								className="fade-in opacity-0 md:w-[210px] text-center px-4 sm:px-12 py-2 font-semibold hover:bg-dd-dark hover:text-dd-light rounded-[6px] text-dd-dark border-dd-dark border-2  bg-dd-light dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(255,176,50),2px_2px_rgba(255,176,50),3px_3px_rgba(255,176,50),4px_4px_rgba(255,176,50)] dark:hover:shadow-[1px_1px_rgba(255,176,50),2px_2px_rgba(255,176,50),3px_3px_rgba(255,176,50),4px_4px_rgba(255,176,50)]"
							>
								Get in Touch
							</Link>
						</div>
					</div>


				</div>

				{/* Contact Section */}
				<div
					id="contact"
					className="px-5 sm:px-10 lg:px-20 xl:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-12 md:mt-20 max-w-[1600px]"
				>
					<section
						id="contact"
						className="fade-in opacity-0 w-full flex flex-col md:grid md:grid-cols-2 bg-card border border-border p-5 xs:p-10 rounded-xl shadow md:gap-8"
					>
						<div className="flex justify-center items-center order-2 md:order-1">
							<ContactForm />
						</div>
						<div className="flex flex-col justify-center order-1 md:order-2">
							<h4 className="text-3xl md:text-4xl lg:text-5xl">
								Let&apos;s make things happen
							</h4>
							<p className="text-2xl">
								Get in touch with us today!
							</p>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

export default page;
