import FeaturedServiceSection from "../components/home/FeaturedServiceSection";
import HeroSection from "../components/home/HeroSection";
import ReviewSection from "../components/home/ReviewSection";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturedServiceSection />
      <ReviewSection />
    </div>
  )
}
