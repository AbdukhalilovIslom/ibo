import Guidance from "../components/Guidance";
import PsPlus from "../components/PsPlus";
import Hero from "../components/SubscriptionHero";

function SubscriptionPage() {
  return (
    <>
      <Hero />
      <div className="main-container">
        <PsPlus />
        <Guidance />
      </div>
    </>
  );
}

export default SubscriptionPage;
