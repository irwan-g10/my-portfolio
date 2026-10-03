import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Common/Button";
import ExpandableButton from "../Common/ExpandableButton";
import JourneyItemCard from "../Common/JourneyItem";
import SectionTitle from "../Common/SectionTitle";

export default function JourneySection() {
  return (
    <div className="w-4/5 mx-auto">
      <SectionTitle title="My Journey" />

      <JourneyItemCard/>
      <div className="flex justify-center"><Button title='Lihat lebih banyak' icon={<FaArrowRightLong />} /></div>

    </div>
  )
}