import Button from "./Button";

export default function ExpandableButton({ title = '' }) {
  let icon = (<i className="bi bi-arrow-right"></i>)
  return (
    <div className="">
      <Button title={title}  icon={icon} className="bg-transparent border-none hover:bg-transparent hover:scale-110 text-white text-sm"/>
</div>
  );
}