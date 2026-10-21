import { TableProps } from '@/types/table';
import Button from './Button';
import Card from './Card';
import Input from './Input';

export default function Table<T extends { id: string | number }>({
    href,
    data,
    columns,
}: TableProps<T>) {
    const getNestedValue = (obj: any, path: string) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };
    return (
        <div className="flex flex-col gap-5 text-xs">
            <Card className="rounded-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div>Cari data :</div>
                        <div className="w-70">
                            <Input
                                icon={<i className="bi bi-search"></i>}
                                placeholder="Filter by Project name"
                            />
                        </div>
                        <Button
                            title="View"
                            icon={<i className="bi bi-view-list"></i>}
                        />
                        <Button
                            title="Sort By"
                            icon={<i className="bi bi-sort-down"></i>}
                        />
                    </div>
                    <Button
                        title="Add Project"
                        icon={<i className="bi bi-plus"></i>}
                        href={href}
                    />
                </div>
            </Card>
            <div className="overflow-hidden">
                <Card className="rounded-lg">
                    <table className="w-full border-collapse overflow-x-auto text-left">
                        <thead>
                            <tr className="border-b-2 border-slate-100 uppercase">
                                <th className="px-6 py-4"></th>
                                {columns.map((column, index) => (
                                    <th
                                        key={index}
                                        className="px-6 py-4 font-semibold"
                                    >
                                        {column.header}
                                    </th>
                                ))}
                                <th className="px-6 py-4 font-semibold">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-600">
                            {data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="transition-colors hover:bg-slate-100/20"
                                >
                                    <td className="px-6 py-2">
                                        <input type="checkbox" />
                                    </td>
                                    {columns.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className="px-6 py-2"
                                        >
                                            {column.render
                                                ? column.render(item) // Jika ada custom render function
                                                : String(
                                                      getNestedValue(
                                                          item,
                                                          column.accessor as string,
                                                      ) ?? '-',
                                                  )}
                                        </td>
                                    ))}

                                    <td className="px-6 py-2">
                                        <div className="flex items-center gap-2">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-yellow-500/50 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button
                                                onClick={() =>
                                                    alert(`Hapus project`)
                                                }
                                                className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-red-500/50 bg-red-500/10 text-red-500 hover:bg-red-500/20"
                                                title="Hapus"
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>

            {/* <Card className=""> */}
            <Card className="rounded-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div>Rows Per Page</div>
                        <div>5</div>
                        <div>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <div>Menampilkan</div>
                        <div>1-10</div>
                        <div>dari 24 data</div>
                        <button className="rounded-lg bg-amber-500 p-2">
                            <i className="bi bi-chevron-left"></i> Prev
                        </button>
                        <button className="w-7 rounded-lg bg-amber-500 p-2">
                            1
                        </button>
                        <button className="w-7 rounded-lg bg-amber-500 p-2">
                            2
                        </button>
                        <button className="w-7 rounded-lg bg-amber-500 p-2">
                            3
                        </button>
                        <button className="rounded-lg bg-amber-500 p-2">
                            Next <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
