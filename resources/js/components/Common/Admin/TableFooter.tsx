import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';

export default function TableFooter({ children }) {
    return (
        <div className="flex justify-between gap-2">
            {/* <div className="col-span-1 flex flex-col gap-2"> */}
            <div className="flex items-center justify-between gap-5">
                <div className="text-sm">0 items selected</div>
                <Button
                    icon={<i className="bi bi-trash3"></i>}
                    className="h-7 w-7 rounded-sm text-xs"
                    // onClick={handleDelete}
                />
            </div>
            <div className="flex justify-end gap-2">
                <Button
                    title="View"
                    icon={<i className="bi bi-view-list"></i>}
                />
                <Dropdown
                    label="Sort By"
                    icon={<i className="bi bi-sort-down"></i>}
                    options={['Terbaru', 'Terlama', 'Nama (A-Z)', 'Nama (Z-A)']}
                    // value={data.sortBy}
                    // onChange={(e) =>
                    //     setData('sortBy', e.target.value)
                    // }
                />
                {children}
                <Dropdown
                    label="10"
                    icon={<i className="bi bi-caret-down"></i>}
                    options={['5', '10', '25', '50']}
                    // value={data.sortBy}
                    // onChange={(e) =>
                    //     setData('sortBy', e.target.value)
                    // }
                />
            </div>
        </div>
    );
}
