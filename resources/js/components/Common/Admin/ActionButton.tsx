import Button from '@/components/ui/Button';

function ActionButton({ handleDelete, href }) {
    return (
        <div className="flex gap-2">
            <Button
                icon={<i className="bi bi-trash3"></i>}
                className="h-7 w-7 rounded-sm text-xs"
                onClick={handleDelete}
            />
            <Button
                icon={<i className="bi bi-pencil-square"></i>}
                href={href}
                className="h-7 w-7 rounded-sm text-xs"
            />
        </div>
    );
}

export default ActionButton;
