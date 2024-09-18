"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex size-12 md:size-16 items-center justify-center rounded-full bg-dd-light border-2 border-card p-3 shadow-[0_0_18px_-12px_rgba(0,0,0,0.8)] hover:shadow-[0_0_10px_-1px_rgba(78,158,221)] transition duration-300",
				className
			)}
		>
			{children}
		</div>
	);
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
	className,
}: {
	className?: string;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const div1Ref = useRef<HTMLDivElement>(null);
	const div2Ref = useRef<HTMLDivElement>(null);
	const div3Ref = useRef<HTMLDivElement>(null);
	const div4Ref = useRef<HTMLDivElement>(null);
	const div5Ref = useRef<HTMLDivElement>(null);
	const div6Ref = useRef<HTMLDivElement>(null);
	const div7Ref = useRef<HTMLDivElement>(null);

	return (
		<div
			className={cn(
				"relative flex w-full items-center justify-center overflow-hidden ",
				className
			)}
			ref={containerRef}
		>
			<div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
				<div className="flex flex-col justify-center gap-2">
					<Circle ref={div1Ref}>
						<Image
							src={"/icons/notion.svg"}
							width={100}
							height={100}
							className="w-8 h-8"
							alt="notion logo"
						/>
					</Circle>
					<Circle ref={div2Ref}>
						<Image
							src={"/icons/google-drive.svg"}
							width={100}
							height={100}
							className="w-8 h-8"
							alt="google drive logo"
						/>
					</Circle>
					<Circle ref={div3Ref}>
						<Image
							src={"/icons/react.svg"}
							width={100}
							height={100}
							className="w-8 h-8"
							alt="react logo"
						/>
					</Circle>
					<Circle ref={div4Ref}>
						<Image
							src={"/icons/next-js.svg"}
							width={100}
							height={100}
							className="w-8 h-8"
							alt="next-js logo"
						/>
					</Circle>
					<Circle ref={div5Ref}>
						<Image
							src={"/icons/wordpress-icon.svg"}
							width={100}
							height={100}
							className="w-8 h-8"
							alt="wordpress logo"
						/>
					</Circle>
				</div>
				<div className="flex flex-col justify-center">
					<Circle ref={div6Ref} className="size-16 bg-white">
						<Image
							src={"/webp-logos/Digi Designs Logo Favicon Blue.webp"}
							height={100}
							width={100}
							alt="logo"
						/>
					</Circle>
				</div>
				<div className="flex flex-col justify-center">
					<Circle ref={div7Ref} className="bg-white">
						<Image
							src={"/icons/user.svg"}
							height={100}
							width={100}
							alt="logo"
						/>
					</Circle>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div4Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div7Ref}
			/>
		</div>
	);
}
