import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import { Star } from "lucide-react";
import { Grid2X2 } from "lucide-react";
import { Columns2 } from "lucide-react";
import { StickyNote } from "lucide-react";
import { Stick } from "next/font/google";

export default function Home() {
	return (
		<div className="bg-black">
			<section>
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
								<span className="bg-light-purple px-2 text-slate-900">
									Printed
								</span>{" "}
								and{" "}
								<span className="bg-light-yellow px-2 text-slate-900">
									{" "}
									Delivered
								</span>
							</h1>
							<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap text-gray-400">
								No more waiting in line at the print shop. We
								print and deliver your documents right to your
								doorstep.{" "}
								<span className="font-semibold ">
									Accepting orders from{" "}
									<span className="text-light-blue">
										VIT hostelites
									</span>{" "}
									and {""}
									<span className="text-light-blue">
										10 Km radius
									</span>{" "}
									encompassing it.
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
										Higly customizable, choose your favorite
										layout for printing
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
										happy customers
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* -------------------------------- Image div ------------------------------- */}
					<div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-24 lg:mx-0 lg:mt-12 h-fit">
						<div className=" md:max-w-xl">
							<div className="pointer-events-none overflow-hidden xl:w-[32rem] mb-0">
								<img
									src="/printer2.png"
									alt=""
									className="pointer-events-none select-none"
								/>
							</div>
							<div className="flex space-x-6 bg-black mt-8 xl:mt-0 justify-center">
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
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</div>
	);
}
