"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { projects } from "@/data";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
	SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function ProjectCard() {
	return (
		<Carousel className="w-full"   
		opts={{
			align: "start",
			loop: true,
			dragFree: true,
		  }}>
			<CarouselContent className="m-0 gap-4 px-4">
				{projects.map((project, index) => (
					<Sheet key={index}>
						<SheetTrigger asChild>
							<CarouselItem className="carousel-cards p-0 flex-shrink-0 basis-[calc((100%+32px))] md:basis-[calc((100%+12px)/2)] reg:basis-[calc((100%)/3)] 3xl:basis-[calc((100%-16px)/4)] cursor pointer">
								<Card className="h-full">
									<Image
										src={project.image}
										width={400}
										height={400}
										alt={project.title}
										className="rounded-lg border shadow-md w-full hover:scale-[1.02] transition-transform duration-300 cursor-pointer aspect-[16/9]"
									/>
									<CardSkeletonContainer>
										<div className="p-8 h-full relative flex items-center justify-center">
											<div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
												<Container className="h-10 w-10 xs:h-12 xs:w-12 lg:h-10 lg:w-10 circle-1 overflow-visible hover:translate-y-[-4px] transition-transform duration-300">
													<Image
														src={
															project
																.techStack?.[0]
																?.icon
														}
														width={28}
														height={28}
														alt={
															project
																.techStack?.[0]
																?.name
														}
													/>
												</Container>
												<Container className="h-12 w-12 xs:h-14 xs:w-14 lg:h-12 lg:w-12 circle-2 hover:translate-y-[-4px] transition-transform duration-300">
													<Image
														src={
															project
																.techStack?.[1]
																?.icon
														}
														width={28}
														height={28}
														alt={
															project
																.techStack?.[1]
																?.name
														}
													/>
												</Container>
												<Container className="h-14 w-14 xs:h-16 xs:w-16 lg:h-14 lg:w-14 circle-3 hover:translate-y-[-4px] transition-transform duration-300">
													<Image
														src={
															project
																.techStack?.[2]
																?.icon
														}
														width={36}
														height={36}
														alt={
															project
																.techStack?.[2]
																?.name
														}
													/>
												</Container>
												<Container className="h-12 w-12 xs:h-14 xs:w-14 lg:h-12 lg:w-12 circle-4 hover:translate-y-[-4px] transition-transform duration-300">
													<Image
														src={
															project
																.techStack?.[3]
																?.icon
														}
														width={28}
														height={28}
														alt={
															project
																.techStack?.[3]
																?.name
														}
													/>
												</Container>
												<Container className="h-10 w-10 xs:h-12 xs:w-12 lg:h-10 lg:w-10 circle-5 hover:translate-y-[-4px] transition-transform duration-300">
													<Image
														src={
															project
																.techStack?.[4]
																?.icon
														}
														width={28}
														height={28}
														alt={
															project
																.techStack?.[4]
																?.name
														}
													/>
												</Container>
											</div>
										</div>
									</CardSkeletonContainer>
									<CardTitle>{project.title}</CardTitle>
									<CardDescription>
										{project.description}
									</CardDescription>
								</Card>
							</CarouselItem>
						</SheetTrigger>
						<SheetContent side="right">
							<SheetHeader className="pt-4">
								<Image
									src={project.image}
									width={300}
									height={300}
									alt={project.title}
									className="rounded-lg border shadow-md w-full"
								/>
								<SheetTitle>{project.title}</SheetTitle>
								<SheetDescription>
									{project.longDescription}
								</SheetDescription>
							</SheetHeader>
							<div className="py-4">
								<h4 className="mt-4">Tech Stack:</h4>
								<div className="flex flex-wrap gap-2 mt-2">
									{project.techStack?.map((tech, idx) => (
										<div
											key={idx}
											className="flex items-center gap-1"
										>
											<Image
												src={tech.icon}
												width={28}
												height={28}
												alt={tech.name}
											/>
											<span>{tech.name}</span>
										</div>
									))}
								</div>
							</div>
							<SheetFooter className="flex justify-start items-start align-top">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button className="w-auto cursor-pointer p-4 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark dark:border-card border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
      >View Project</Button>
								</a>
								<SheetClose asChild>
									<Button className="w-auto cursor-pointer p-4 font-semibold hover:bg-dd-dark hover:text-dd-light rounded-[6px] text-dd-dark border-dd-dark border-2  bg-dd-light dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(255,176,50),2px_2px_rgba(255,176,50),3px_3px_rgba(255,176,50),4px_4px_rgba(255,176,50)] dark:hover:shadow-[1px_1px_rgba(255,176,50),2px_2px_rgba(255,176,50),3px_3px_rgba(255,176,50),4px_4px_rgba(255,176,50)]">Close</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				))}
			</CarouselContent>
			<CarouselPrevious className="ml-8 lg:ml-0" />
			<CarouselNext className="mr-8 lg:mr-0" />
		</Carousel>
	);
}

// Container for the tech stack icons
export const CardSkeletonContainer = ({
	className,
	children,
	showGradient = true,
}: {
	className?: string;
	children: React.ReactNode;
	showGradient?: boolean;
}) => {
	return (
		<div
			className={cn(
				"h-[150px] rounded-xl z-40",
				className,
				showGradient &&
					"bg-transparent 3xl:[mask-image:radial-gradient(50%_50%_at_50%_50%,white_80%,transparent_100%)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_60%,transparent_100%)]"
			)}
		>
			{children}
		</div>
	);
};

// Outer Card
export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"max-w-sm w-full mx-auto p-5 rounded-xl border border-border dark:border-[rgba(255,255,255,0.10)] dark:bg-card/80 bg-card/90 shadow-custom-inset group flex flex-col transition duration-300 hover:dark:bg-border/80 hover:bg-border/70 cursor-pointer",
				className
			)}
		>
			{children}
		</div>
	);
};

// Title of the project
export const CardTitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h3
			className={cn(
				"text-lg font-semibold text-gray-800 dark:text-white py-2",
				className
			)}
		>
			{children}
		</h3>
	);
};

// Description of the project
export const CardDescription = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<p
			className={cn(
				"text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
				className
			)}
		>
			{children}
		</p>
	);
};

// Balls that the tech stack icons are in
const Container = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				` rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    dark:shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    shadow-[0px_0px_8px_0px_rgba(30,30,30,0.2)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
				className
			)}
		>
			{children}
		</div>
	);
};
