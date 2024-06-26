import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Icons } from "@/components/icons";
import { Check } from "lucide-react";
import { Star } from "lucide-react";
import { Grid2X2 } from "lucide-react";
import { Columns2 } from "lucide-react";
import { StickyNote } from "lucide-react";
import { MapPinned } from "lucide-react";
import { FileUp } from "lucide-react";
import { Wrench } from "lucide-react";
import { Stick } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { WobbleCard } from "@/components/wobble-card";

export default function Home() {
	return (
		<div className="bg-black">
			{/* -------------------------------------------------------------------------- */
			/*                                Hero Section                                */
			/* -------------------------------------------------------------------------- */}
			<section>
				<div className="h-full w-full bg-black bg-grid-white/[0.15]  relative flex items-center justify-center">
					<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
					<MaxWidthWrapper className="pb-20 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
						<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
							<div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
								<div className="absolute w-36 -left-16 -top-32 hidden lg:block -rotate-12">
									<img
										src="/notebook-icon-4.png"
										alt=""
										className="w-full"
									/>
								</div>
								<h1 className="relative w-fit tracking-tight text-balance mt-0 font-bold !leading-tight text-gray-50 text-5xl md:text-6xl lg:text-7xl">
									Get all your Documents{" "}
									<Highlight className="bg-light-purple px-2 text-slate-900">
										Printed
									</Highlight>{" "}
									and{" "}
									<Highlight className="bg-light-yellow px-2 text-slate-900">
										{" "}
										Delivered
									</Highlight>
								</h1>
								<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap text-gray-400">
									No more waiting in line at the print shop.
									We print and deliver your documents right to
									your doorstep.{" "}
									<span className="font-semibold ">
										Accepting orders from{" "}
										<span className="text-light-blue">
											VIT hostelites
										</span>{" "}
										and from day scholars located within a{" "}
										<span className="text-light-blue">
											10 km radius
										</span>{" "}
										of VIT.
									</span>
								</p>
								<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
									<div className="space-y-2">
										<li className="flex gap-1.5 items-center text-left text-light-green">
											<Check
												className="h-5
											w-5
											shrink-0
											text-light-green"
											/>{" "}
											Higly customizable, choose your
											favorite layout for printing
										</li>
										<li className="flex gap-1.5 items-center text-left text-light-green">
											<Check
												className="h-5
											w-5
											shrink-0
											text-light-green"
											/>{" "}
											Quick delivery, choose your desired
											delivery time
										</li>
										<li className="flex gap-1.5 items-center text-left text-light-green">
											<Check
												className="h-5
											w-5
											shrink-0
											text-light-green"
											/>{" "}
											Hassle free Payment with UPI,
											debit/credit cards
										</li>
									</div>
								</ul>
								<div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
									<div className="flex -space-x-4">
										<img
											className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
											src="/users/user-1.png"
											alt="User Image"
										/>
										<img
											className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
											src="/users/user-2.png"
											alt="User Image"
										/>
										<img
											className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
											src="/users/user-3.png"
											alt="User Image"
										/>
										<img
											className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
											src="/users/user-4.jpg"
											alt="User Image"
										/>
										<img
											className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100 "
											src="/users/user-5.jpg"
											alt="User Image"
										/>
									</div>
									<div className="flex flex-col justify-between items-center sm:items-start">
										<div className="flex gap-0.5">
											<Star className="h-4 w-4 text-light-green fill-light-green" />
											<Star className="h-4 w-4 text-light-green fill-light-green" />
											<Star className="h-4 w-4 text-light-green fill-light-green" />
											<Star className="h-4 w-4 text-light-green fill-light-green" />
											<Star className="h-4 w-4 text-light-green fill-light-green" />
										</div>

										<p className="text-gray-300">
											<span className="font-semibold">
												1.2k
											</span>{" "}
											Happy customers
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* -------------------------------- Image div ------------------------------- */}
						<div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-24 lg:mx-0 lg:mt-12 h-fit">
							<div className=" md:max-w-xl z-20">
								<div className="pointer-events-none overflow-hidden xl:w-[32rem] mb-0">
									<img
										src="/printer2.png"
										alt=""
										className="pointer-events-none select-none"
									/>
								</div>
								<div className="flex space-x-6  mt-8 xl:mt-0 justify-center">
									<p className="  text-light-blue">
										<Grid2X2
											className="text-light-pink w-24 h-24"
											strokeWidth={0.5}
										/>
										4 pages in 1
									</p>
									<p className=" text-light-blue">
										<Columns2
											className="text-light-yellow w-24 h-24"
											strokeWidth={0.5}
										/>
										2 Pages in 1
									</p>
									<p className="text-light-blue">
										<StickyNote
											className="text-light-green w-24 h-24"
											strokeWidth={0.5}
										/>
										Single Page
									</p>
								</div>
								<p className="text-light-purple flex justify-center mt-6 text-lg">
									Three basic layouts to choose from!!
								</p>
								<div className="flex justify-center mt-12 ">
									<Link
										href="/configure/upload"
										className={buttonVariants({
											size: "sm",
											className:
												" flex items-center gap-1 text-black font-medium p-8 text-[1.125rem]  rounded-xl",
										})}
									>
										Upload Documents
										<ArrowRight className="ml-1.5 h-5 w-5" />
									</Link>
								</div>
							</div>
						</div>
					</MaxWidthWrapper>
				</div>
			</section>

			{/* -------------------------------------------------------------------------- */
			/*                            HOW IT WORKS SECTION                            */
			/* -------------------------------------------------------------------------- */}

			<section className="">
				<HeroHighlight>
					{/* ---------------------------------- Title --------------------------------- */}
					<MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 pb-24">
						<div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 pt-6">
							<h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-100">
								How it{" "}
								<span className="relative px-2">
									{" "}
									Works{" "}
									<Icons.underline className="hiddem sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-light-purple" />
								</span>{" "}
								?
							</h2>
							<img
								src="/print_mascot.png"
								alt="mascot character"
								className="w-36  order-0 lg:order-2"
							/>
						</div>

						{/* ---------------------------------- cards --------------------------------- */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
							{/* --------------------------------- card 1 --------------------------------- */}
							<WobbleCard
								containerClassName=" h-full bg-light-pink "
								className=""
							>
								<div className="max-w-xs">
									<div className="flex">
										<h2 className="text-left text-balance text-lg md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-gray-900">
											Upload Files Securely
										</h2>
										<FileUp
											className="text-black lg:w-28 lg:h-24 w-14 h-14 pb-6 lg:pb-7 "
											strokeWidth={0.6}
										/>
									</div>
									<ul className="list-disc list-inside space-y-1 mt-0 text-left  text-base/6 text-slate-900 ">
										<li>
											Files are deleted after printing
										</li>
										<li>
											(P.S. We don't have enough storage
											to save the files anyway)
										</li>
									</ul>
								</div>
							</WobbleCard>

							{/* --------------------------------- card 2 --------------------------------- */}
							<WobbleCard
								containerClassName=" h-full bg-light-purple "
								className=""
							>
								<div className="max-w-xs">
									<div className="flex">
										<h2 className="text-left text-balance text-lg md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-gray-900">
											Customize your print layout
										</h2>
										<Wrench
											className="text-black lg:w-28 lg:h-24 w-14 h-14 pb-6 lg:pb-7"
											strokeWidth={0.6}
										/>
									</div>

									<ul className="list-disc list-inside space-y-1 mt-0 text-left  text-base/6 text-slate-900 ">
										<li>Single or double-sided printing</li>
										<li>1, 2, or 4 pages per sheet</li>
										<li>Color or black and white</li>
										<li>Normal print or matte cover</li>
										<li>
											We cover everything from reports to
											lab manuals.
										</li>
									</ul>
								</div>
							</WobbleCard>

							{/* --------------------------------- card 3 --------------------------------- */}
							<WobbleCard
								containerClassName=" h-full bg-light-green "
								className=""
							>
								<div className="max-w-xs">
									<div className="flex">
										<h2 className="text-left text-balance text-lg md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-gray-900">
											Choose your delivery location
										</h2>
										<MapPinned
											className="text-black lg:w-28 lg:h-24 w-14 h-14 pb-6 lg:pb-8"
											strokeWidth={0.6}
										/>
									</div>
									<ul className="list-disc list-inside space-y-1 mt-0 text-left  text-base/6 text-slate-900 ">
										<li>Anywhere in College Campus</li>
										<li>Hostel/Apartment Entrance</li>
										<li>
											(P.S. No hostel room delivery
											option)
										</li>
									</ul>
								</div>
							</WobbleCard>
						</div>
					</MaxWidthWrapper>
				</HeroHighlight>
			</section>
		</div>
	);
}
