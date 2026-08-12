import type { TransportMode } from "@/lib/types";

interface RouteInfo {
  mode: TransportMode;
  duration: string;
}

// Approximate real-world inter-district route times, keyed as "districtA|districtB" (alphabetical).
const routes: Record<string, RouteInfo> = {
  "colombo|kandy": { mode: "Train", duration: "2h 30m" },
  "colombo|galle": { mode: "Train", duration: "2h 15m" },
  "galle|matara": { mode: "Train", duration: "45m" },
  "colombo|gampaha": { mode: "Bus", duration: "1h" },
  "kandy|nuwara-eliya": { mode: "Bus", duration: "3h" },
  "badulla|kandy": { mode: "Train", duration: "6h 30m" },
  "badulla|nuwara-eliya": { mode: "Train", duration: "3h" },
  "anuradhapura|colombo": { mode: "Bus", duration: "4h 30m" },
  "anuradhapura|polonnaruwa": { mode: "Bus", duration: "1h 30m" },
  "kandy|polonnaruwa": { mode: "Bus", duration: "3h" },
  "kandy|matale": { mode: "Bus", duration: "2h" },
  "colombo|jaffna": { mode: "Train", duration: "5h" },
  "hambantota|matara": { mode: "Bus", duration: "1h 30m" },
  "colombo|kegalle": { mode: "Bus", duration: "2h" },
  "kandy|kegalle": { mode: "Bus", duration: "1h 15m" },
  "colombo|kalutara": { mode: "Train", duration: "1h" },
  "galle|kalutara": { mode: "Train", duration: "1h 30m" },
  "anuradhapura|trincomalee": { mode: "Bus", duration: "2h 30m" },
  "polonnaruwa|trincomalee": { mode: "Bus", duration: "2h" },
  "ampara|trincomalee": { mode: "Bus", duration: "2h 30m" },
  "ampara|batticaloa": { mode: "Bus", duration: "1h 30m" },
  "jaffna|vavuniya": { mode: "Bus", duration: "2h" },
  "anuradhapura|vavuniya": { mode: "Bus", duration: "1h 30m" },
  "jaffna|kilinochchi": { mode: "Bus", duration: "1h" },
  "mannar|vavuniya": { mode: "Bus", duration: "1h 30m" },
  "mullaitivu|trincomalee": { mode: "Bus", duration: "3h" },
  "colombo|ratnapura": { mode: "Bus", duration: "2h 30m" },
  "kurunegala|puttalam": { mode: "Bus", duration: "1h 30m" },
  "colombo|kurunegala": { mode: "Bus", duration: "2h" },
  "colombo|hambantota": { mode: "Bus", duration: "4h" },
  "colombo|matale": { mode: "Bus", duration: "3h" },
};

function routeKey(a: string, b: string): string {
  return [a, b].sort().join("|");
}

export function getIntercityRoute(fromDistrictId: string, toDistrictId: string): RouteInfo {
  if (fromDistrictId === toDistrictId) {
    return { mode: "Tuk-tuk", duration: "15–25 min" };
  }
  const known = routes[routeKey(fromDistrictId, toDistrictId)];
  if (known) return known;
  return { mode: "Private Van", duration: "~3h (approx.)" };
}

// Deterministic short local transfer time, based on a stable hash of the place id.
export function getLocalTransferMinutes(placeId: string): number {
  let hash = 0;
  for (let i = 0; i < placeId.length; i++) {
    hash = (hash * 31 + placeId.charCodeAt(i)) % 1000;
  }
  return 10 + (hash % 21); // 10–30 minutes
}
