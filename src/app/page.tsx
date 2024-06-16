import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
	return (
		<div className="bg-black">
			<section>
				<MaxWidthWrapper className="pb-20 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
					<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
						<div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
							<div className="absolute w-28 left-0 -top-20 hidden lg:block">
								<img src="" alt="" className="w-full" />
							</div>
							<h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-50 text-5xl md:text-6xl lg:text-7xl">
								Your
							</h1>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</div>
	);
}
