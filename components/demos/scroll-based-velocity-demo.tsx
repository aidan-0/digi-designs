import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Digi Designs 🞄 Web Design & Software Development 🞄 "  
      default_velocity={2}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-dd-light-blue drop-shadow-sm md:text-7xl md:leading-[5rem]"
    />
  );
}
