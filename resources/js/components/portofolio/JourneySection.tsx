import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Common/Button";
import ExpandableButton from "../Common/ExpandableButton";
import JourneyItemCard from "../Common/JourneyItem";
import SectionTitle from "../Common/SectionTitle";

export default function JourneySection() {
  return (
    <div className="w-4/5 mx-auto relative">
      <SectionTitle title="My Journey" />

      <JourneyItemCard/>
      <ExpandableButton title='Lihat Lebih Banyak'/>

    </div>
  )
}