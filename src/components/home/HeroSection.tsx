import { Button } from "keep-react"
import HeroImage from "../../assets/image2.jpg"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-20">
      <div className="space-y-4 flex-1">
        <h1 className="text-heading-3 font-bold">
          Your Car Deserves the Best Shine
        </h1>
        <p className="text-xl text-gray-500">
          Experience premium, eco-friendly car care that makes your vehicle shine like new. At PolishPro, expert attention to detail ensures you drive away with confidence!
        </p>
        <Button size="lg">
          <Link to="/services">
            Book Service
          </Link>
        </Button>
      </div>
      <div className="flex-1">
        <img src={HeroImage} alt="Car Image" className="rounded-2xl w-full min-h-[380px] object-cover" />
      </div>
    </div>
  )
}
