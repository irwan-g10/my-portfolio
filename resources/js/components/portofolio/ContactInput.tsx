export default function ContactInput({ label = 'label', value = 'value', type = 'text', rows = 4 }) {

    const isTextArea = type === 'textarea';
    return (
        <div className="mb-2 d-flex flex-column gap-2">
            <label className="fw-bold">{label}</label>
            {isTextArea ? (
                <textarea className="form-control" rows={rows} placeholder={value}></textarea>
            ) : (
                <input type={type} className="form-control" placeholder={value} />
            )}
        </div>
    )
}