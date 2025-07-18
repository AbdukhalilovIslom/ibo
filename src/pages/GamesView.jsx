import GamesOfTheSeries from "../components/GameView/GamesOfTheSeries";
import GamesSwiper from "../components/GameView/GamesSwiper";
import Hero from "../components/GameView/Hero";
import ReviewsStars from "../components/GameView/ReviewsStars";
import ReviewsSwiper from "../components/GameView/ReviewsSwiper";

export default function GamesView() {
  return (
    <>
      <Hero />
      <ReviewsStars />
      <GamesOfTheSeries />
      <GamesSwiper />
      <ReviewsSwiper />
    </>
  );
}
