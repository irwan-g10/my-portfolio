import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import CategoryBadge from '../CategoryBadge';

export default function TableHeader({ title, addUrl, onClick }) {
    return (
        <div className="grid w-full grid-cols-5 items-center gap-2">
            <div className="col-span-2 grid grid-cols-2 gap-2">
                <CategoryBadge
                    title={'Table'}
                    isActive
                />
                <CategoryBadge title={'Card'} />
            </div>
            <div className="col-span-2">
                <Input
                    icon={<i className="bi bi-search"></i>}
                    inline
                    label={'Cari data :'}
                    placeholder={`FIlter by ${title} name`}
                />
            </div>
            <div className="">
                <Button
                    title={`New ${title}`}
                    icon={<i className="bi bi-plus"></i>}
                    href={addUrl}
                />
            </div>
        </div>
    );
}
