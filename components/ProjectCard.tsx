"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { projects } from "@/data";
import Image from "next/image";

export default function ProjectCard() {

  useEffect(() => {
    const scale = [1, 1.1, 1];
    const transform = [
      "translateY(0px)",
      "translateY(-4px)",
      "translateY(0px)",
    ];
    const sequence = [
      [
        ".circle-1",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-2",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-3",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-4",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-5",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
    ];

		// @ts-expect-error
    // sequence causes an error
		animate(sequence, {
			repeat: Infinity,
			repeatDelay: 1,
		});
  }, []);
  
	return (
		<>
			{projects.map((project, index) => (
				<Card key={index}>
					<Image
						src={project.image}
						width={300}
						height={300}
						alt={project.title}
            className="rounded-xl border shadow-md w-full hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
					/>
					<CardSkeletonContainer>
						<div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
							<div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
								<Container className="h-12 w-12 circle-1">
									<Image
										src={project.techStack?.[0]?.icon}
										width={28}
										height={28}
										alt={project.techStack?.[0]?.name}
									/>
								</Container>
								<Container className="h-14 w-14 circle-2">
									<Image
										src={project.techStack?.[1]?.icon}
										width={28}
										height={28}
										alt={project.techStack?.[1]?.name}
									/>
								</Container>
								<Container className="h-16 w-16 circle-3">
									<Image
										src={project.techStack?.[2]?.icon}
										width={36}
										height={36}
										alt={project.techStack?.[2]?.name}
									/>
								</Container>
								<Container className="h-14 w-14 circle-4">
									<Image
										src={project.techStack?.[3]?.icon}
										width={28}
										height={28}
										alt={project.techStack?.[3]?.name}
									/>
								</Container>
								<Container className="h-12 w-12 circle-5">
									<Image
										src={project.techStack?.[4]?.icon}
										width={28}
										height={28}
										alt={project.techStack?.[4]?.name}
									/>
								</Container>
							</div>

							<div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
								<div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
									<Sparkles />
								</div>
							</div>
						</div>
					</CardSkeletonContainer>
					<CardTitle>{project.title}</CardTitle>
					<CardDescription>{project.description}</CardDescription>
				</Card>
			))}
		</>
	);
}


const Sparkles = () => {
	const randomMove = () => Math.random() * 2 - 1;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();
	return (
		<div className="absolute inset-0">
			{[...Array(12)].map((_, i) => (
				<motion.span
					key={`star-${i}`}
					animate={{
						top: `calc(${random() * 100}% + ${randomMove()}px)`,
						left: `calc(${random() * 100}% + ${randomMove()}px)`,
						opacity: randomOpacity(),
						scale: [1, 1.2, 0],
					}}
					transition={{
						duration: random() * 2 + 4,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						position: "absolute",
						top: `${random() * 100}%`,
						left: `${random() * 100}%`,
						width: `2px`,
						height: `2px`,
						borderRadius: "50%",
						zIndex: 1,
					}}
					className="inline-block bg-black dark:bg-white"
				></motion.span>
			))}
		</div>
	);
};

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
				"max-w-sm w-full mx-auto p-6 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-card/80 bg-card/80 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group flex flex-col",
				className
			)}
		>
			{children}
		</div>
	);
};

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
				"h-[15rem] md:h-[20rem] rounded-xl z-40",
				className,
				showGradient &&
					"bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(60%_50%_at_50%_50%,white_0%,transparent_100%)]"
			)}
		>
			{children}
		</div>
	);
};

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
				`h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
				className
			)}
		>
			{children}
		</div>
	);
};
