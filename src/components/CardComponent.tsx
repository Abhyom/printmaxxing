// components/CardComponent.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton";

interface CardComponentProps {
	layout: "2x2" | "1x2" | "1x1";
}

const CardComponent: React.FC<CardComponentProps> = ({ layout }) => {
	let gridClasses;
	switch (layout) {
		case "2x2":
			gridClasses =
				"px-4 py-4 bg-black h-full w-full grid grid-cols-2 grid-rows-2 gap-4";
			break;
		case "1x2":
			gridClasses =
				"px-4 py-4 pt-6 bg-black h-full w-full grid grid-cols-2 grid-rows-1 gap-4";
			break;
		case "1x1":
			gridClasses =
				"px-4 py-4 bg-black h-full w-full grid grid-cols-1 grid-rows-1 gap-4";
			break;
		default:
			gridClasses = "";
	}

	return (
		<Card className="w-24 h-32">
			<CardContent className={gridClasses}>
				<ShadcnSkeleton className="w-full h-full bg-light-blue rounded-lg" />
				<ShadcnSkeleton className="w-full h-full bg-light-pink rounded" />
				{layout !== "1x1" && (
					<ShadcnSkeleton className="w-full h-full bg-light-pink rounded" />
				)}
				{layout === "2x2" && (
					<ShadcnSkeleton className="w-full h-full bg-light-blue rounded" />
				)}
			</CardContent>
		</Card>
	);
};

export default CardComponent;
