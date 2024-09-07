import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
	return (
		<div className="w-full h-24 border-b-2 border-white justify-between flex items-center px-4">
			<div>Navbar</div>
			<ModeToggle />
		</div>
	);
};

export default Navbar;
