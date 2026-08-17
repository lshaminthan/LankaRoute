import type { Metadata } from "next";
import { TripPlanner } from "@/features/planner/components/TripPlanner";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description: "Pick your interests and districts and get a personalized Sri Lanka itinerary.",
};

export default function PlanPage() {
  return <TripPlanner />;
}
