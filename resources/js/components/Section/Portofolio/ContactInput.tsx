import Input from '@/components/ui/Input';

export default function ContactInput({
    label = 'label',
    value = 'value',
    placeholder = 'placeholder',
    icon = '',
    type = 'text',
    rows = 4,
}) {
    const isTextArea = type === 'textarea';
    return (
        <div className="mb-5 flex flex-col gap-2">
            <label className="font-bold">{label}</label>
            {isTextArea ? (
                <textarea
                    className="form-control rounded-sm border bg-slate-100 p-2"
                    rows={rows}
                    placeholder={placeholder}
                ></textarea>
            ) : (
                <Input
                    type={type}
                    className="form-control rounded-sm border p-2"
                    icon={icon}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}
