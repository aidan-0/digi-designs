"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

// Run these effects each time the pathname changes

const GlobalAnimations = () => {
    useEffect(() => {
        gsap.utils.toArray(".fade-in").forEach((element) => {
            gsap.fromTo(
                element as HTMLElement,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.6,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: element as HTMLElement,
                        start: "top 80%",
                    },
                }
            );
        });
    }, [usePathname()]);
    return null;
};

export default GlobalAnimations;
