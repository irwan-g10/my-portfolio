import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';
import Input from '@/components/ui/Input';

export default function ProjectTableToolbar() {
    return (
        <div className="flex w-full items-center gap-2">
            <div className="flex-1">
                <Input
                    icon={<i className="bi bi-search"></i>}
                    inline
                    label={'Cari data :'}
                    placeholder="Filter by Project name"
                />
            </div>
            <div className="flex gap-2">
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

                <Dropdown
                    label="Tech Stack"
                    icon={<i className="bi bi-code-slash"></i>}
                    options={[
                        'React.js',
                        'Laravel',
                        'Tailwind CSS',
                        'Vue.js',
                        'Node.js',
                    ]}
                    // value={data.techStack}
                    // onChange={(e) =>
                    //     setData('techStack', e.target.value)
                    // }
                />

                <Dropdown
                    label="Status"
                    icon={<i className="bi bi-check2-all"></i>}
                    options={['Selesai', 'Dalam Proses', 'Tertunda']}
                    // value={data.statusProject}
                    // onChange={(e) =>
                    //     setData('statusProject', e.target.value)
                    // }
                />
            </div>
        </div>
    );
}
