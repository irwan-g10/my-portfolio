import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';

export default function TableFooter({
    children,
    setSorting,
    setPagination,
    selectedData,
}) {
    return (
        <div className="flex justify-between gap-2">
            {/* <div className="col-span-1 flex flex-col gap-2"> */}
            <div className="flex items-center justify-between gap-5">
                <div className="text-sm">
                    {selectedData ? selectedData.length : 0} items selected
                </div>
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
                    options={['name_asc', 'name_desc', 'oldest', 'latest']}
                    // value={data.sortBy}
                    onChange={(e) => setSorting(e.target.value)}
                />
                {children}
                <Dropdown
                    label="10"
                    icon={<i className="bi bi-caret-down"></i>}
                    options={['1', '3', '5', '8', '10']}
                    // value={data.sortBy}
                    onChange={(e) => setPagination(e.target.value)}
                />
            </div>
        </div>
    );
}
