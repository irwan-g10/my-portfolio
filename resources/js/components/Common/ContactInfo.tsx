export default function ContactInfo({label = 'label', value = 'value', icon = 'icon'}) {
    return (
        <div className="row gap-2 mb-2">
            <div className=" col-auto border rounded-4  justify-content-center align-items-center d-flex" style={{width:'50px', height:'50px'}}><i className={`bi bi-${icon}`}></i></div>
            <div className=" col ">
                <div className="d-flex flex-column ">
                    <label>{label}</label>
                    <label htmlFor="">{value}</label>
                </div>
            </div>
        </div>
    )
}