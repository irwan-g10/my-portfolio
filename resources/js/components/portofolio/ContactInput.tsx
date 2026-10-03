export default function ContactInput({ label = 'label', value = 'value', type = 'text', rows = 4 }) {

    const isTextArea = type === 'textarea';
    return (
        <div className="mb-2 flex flex-col gap-2">
            <label className="font-bold">{label}</label>
            {isTextArea ? (
                <textarea className="form-control border p-2 rounded-sm" rows={rows} placeholder={value}></textarea>
            ) : (
                <input type={type} className="form-control border p-2 rounded-sm" placeholder={value} />
            )}
        </div>
    )
}