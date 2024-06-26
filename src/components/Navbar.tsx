import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
	const isAdmin = user?.email === process.env.ADMIN_EMAIL;
	return (
		<nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-800 bg-black/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-800">
					<Link
						href="/"
						className="flex z-40 font-semibold text-white"
					>
						Print<span className="text-light-purple">Maxxing</span>
					</Link>
					<div className="h-full flex items-center space-x-4">
						{user ? (
							<>
								<Link
									href="/api/auth/logout"
									className={buttonVariants({
										size: "sm",
										variant: "ghost",
									})}
								>
									Sign out
								</Link>
								{isAdmin ? (
									<Link
										href="/api/auth/logout"
										className={buttonVariants({
											size: "sm",
											variant: "ghost",
										})}
									>
										Dashboard
									</Link>
								) : null}
								<Link
									href="/configure/upload"
									className={buttonVariants({
										size: "sm",
										className:
											"hidden sm:flex items-center gap-1 text-black font-semibold",
									})}
								>
									Upload Documents
									<ArrowRight className="ml-1.5 h-5 w-5" />
								</Link>
							</>
						) : (
							<>
								<Link
									href="/api/auth/register"
									className={buttonVariants({
										size: "sm",
										variant: "ghost",
									})}
								>
									Sign up
								</Link>

								<Link
									href="/api/auth/login"
									className={buttonVariants({
										size: "sm",
										variant: "ghost",
									})}
								>
									Login
								</Link>

								<div className="h-8 w-px bg-zinc-800 hidde sm:block" />
								<Link
									href="/configure/upload"
									className={buttonVariants({
										size: "sm",
										className:
											"hidden sm:flex items-center font-semibold gap-1 rounded-md bg-light-purple text-light-purple-foreground",
									})}
								>
									Upload Documents
									<ArrowRight className="ml-1.5 h-5 w-5" />
								</Link>
							</>
						)}
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};
export default Navbar;
