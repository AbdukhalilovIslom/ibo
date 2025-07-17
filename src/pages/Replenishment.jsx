import Instructions from "../components/Instructions";
import ReplenishmentHero from "../components/ReplenishmentHero";

export default function Replenishment() {
  return (
    <div className="main-container px-25 py-12 max-sm:px-4 max-sm:py-5">
      <ReplenishmentHero />
      <Instructions />
    </div>
  );
}
