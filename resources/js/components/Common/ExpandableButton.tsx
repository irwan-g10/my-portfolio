import Button from "./Button";

export default function ExpandableButton({ title = '' }) {
  let icon = (<i className="bi bi-arrow-right"></i>)
  return (
    <div className="h-50 bg-linear-to-t from-slate-950 via-slate-950/90 to-slate-950/10 flex justify-center items-end absolute bottom-0 inset-x-0 backdrop-blur-">

      {/* Lihat Lebih Banyak */}
      <Button title={title}  icon={icon} className="bg-transparent border-none backdrop-none hover:bg-transparent hover:scale-110 text-white text-sm"/>
</div>
  );
}