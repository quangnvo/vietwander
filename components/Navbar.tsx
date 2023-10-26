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


	const navList = (
		<ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row gap-5 lg:gap-14">
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
	);

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
					{navList}
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

				{/* Icon Hamburger */}
				<button
					className="h-6 w-6 text-inherit lg:hidden dark:text-white"
					onClick={() => { setIsNavbarMobileOpen(!isNavbarMobileOpen) }}
				>
					{isNavbarMobileOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>


			</div>

			{/* Navbar on mobile (PUT OUTSIDE THE NAV)*/}
			<Collapse open={isNavbarMobileOpen}>
				<div className="flex flex-col gap-5 justify-center items-center text-center mx-4 py-5 border border-gray-20 rounded-xl">
					{navList}
					{/* Login button */}
					<div className="">
						<Link href="/login">
							<Button
								type="button"
								title="Login"
								icon="/user.svg"
								variant="btn_login_mobile"
							/>
						</Link>
					</div>
				</div>
			</Collapse>
		</>
	)
}