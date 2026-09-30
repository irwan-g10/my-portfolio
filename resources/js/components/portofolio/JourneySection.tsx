import JourneyItemCard from "../Common/JourneyItem";
import SectionTitle from "../Common/SectionTitle";

export default function JourneySection() {
  return (
    <div className="container py-5">
      <SectionTitle title="My Journey" />

      <JourneyItemCard/>

    </div>
  )
}