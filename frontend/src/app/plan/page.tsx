import type { Metadata } from "next";
import { Suspense } from "react";
import { RequireAuth } from "@/features/auth/components/RequireAuth";
import { TripPlanner } from "@/features/planner/components/TripPlanner";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description: "Pick your interests and districts and get a personalized Sri Lanka itinerary.",
};

export default function PlanPage() {
  return (
    <Suspense fallback={null}>
      <RequireAuth>
        <TripPlanner />
      </RequireAuth>
    </Suspense>
  );
}
