import ExpandableButton from "@/components/ui/ExpandableButton";
import JourneyItemCard from "@/components/Common/JourneyItemCard";
import SectionTitle from "@/components/ui/SectionTitle";


export default function JourneySection() {
  return (
    <div className="w-4/5 mx-auto relative">
      <SectionTitle title="My Journey" />
      <div></div>

      <JourneyItemCard/>
      <ExpandableButton title='Lihat Lebih Banyak'/>

    </div>
  )
}