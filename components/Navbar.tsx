"use client"

import { useEffect, useState } from "react";
import { Collapse } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Button from "./Button";

export default function NavBar() {

	const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false)

	// Active link setup
	const pathName = usePathname()
	const indexSecondSlashInPathName = pathName.indexOf("/", 1)
	if (indexSecondSlashInPathName > -1) {
		var pathNameNew = pathName.substring(0, indexSecondSlashInPathName)
	} else {
		var pathNameNew = pathName
	}


	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setIsNavbarMobileOpen(false)
		);
	}, []);


	const navList = () => {
		return <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row gap-5 lg:gap-14">
			{NAV_LINKS.map((link) => (
				< Link
					href={link.href}
					key={link.key}
					className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold `}
				>
					<span className={`${pathNameNew === link.href ? "font-bold text-lg" : "text-base"}`}>
						{link.label}
					</span>
				</Link>
			))}
		</ul>
	}

	return (
		<>
			<div className="flexBetween max-container padding-container relative z-30 py-5">

				{/* LEFT */}
				{/* Logo */}
				<Link href="/">
					<Image
						src="/vietwander-logo.svg"
						alt="Vietwander Logo"
						width={150}
						height={50}
					/>
				</Link >

				{/* MIDDLE */}
				{/* Render navlist */}
				<div className=" hidden lg:block">
					{navList()}
				</div>

				{/* RIGHT */}
				{/* Login button */}
				<div className="hidden lg:flex">
					<Link href="/login">
						<Button
							type="button"
							title="Login"
							icon="/user.svg"
							variant="btn_white"
						/>
					</Link>
				</div>

				
			</div>

			
		</>
	)
}