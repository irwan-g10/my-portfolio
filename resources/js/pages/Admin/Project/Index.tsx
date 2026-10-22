import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { Column } from '@/types/table';
import { useState } from 'react';
import AdminLayout from '../AdminLayout';
import StatisticCard from './Components/StatisticCard';

interface Project {
    id: number;
    title: string;
    category: string;
    tech: string;
    status: string;
}
interface Skill {
    id: number;
    title: string;
}
interface Category {
    id: number;
    title: string;
}
interface Status {
    id: number;
    title: string;
}

export default function Project({ children }) {
    const [statisticActive, setStatisticActive] = useState('project');
    const projects: Project[] = [
        {
            id: 1,
            title: 'Vantomic Studio',
            category: 'Full-Stack Web',
            tech: 'Laravel, React, Tailwind',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'SILAMPAH Garbage System',
            category: 'Information System',
            tech: 'PHP, MySQL, Bootstrap',
            status: 'Active',
        },
        {
            id: 3,
            title: 'Point of Sale App',
            category: 'Desktop / Web',
            tech: 'Inertia.js, PostgreSQL',
            status: 'In Progress',
        },
        {
            id: 4,
            title: 'Vantomic Studio',
            category: 'Full-Stack Web',
            tech: 'Laravel, React, Tailwind',
            status: 'Completed',
        },
        {
            id: 5,
            title: 'SILAMPAH Garbage System',
            category: 'Information System',
            tech: 'PHP, MySQL, Bootstrap',
            status: 'Active',
        },
        {
            id: 6,
            title: 'Point of Sale App',
            category: 'Desktop / Web',
            tech: 'Inertia.js, PostgreSQL',
            status: 'In Progress',
        },
    ];
    const projectColumn: Column<Project>[] = [
        { header: 'Title', accessor: 'title' },
        { header: 'Category', accessor: 'category' },
        { header: 'Tech', accessor: 'tech' },
        { header: 'Status', accessor: 'status' },
    ];
    const skills: Skill[] = [
        { id: 1, title: 'PHP' },
        { id: 2, title: 'Laravel' },
        { id: 3, title: 'JavaScript' },
        { id: 4, title: 'TypeScript' },
        // { id: 5, title: 'React' },
        // { id: 6, title: 'Inertia' },
        // { id: 7, title: 'Tailwind' },
        // { id: 8, title: 'Bootstrap' },
        // { id: 9, title: 'MySQL' },
        // { id: 10, title: 'Git' },
        // { id: 11, title: 'GitHub' },
        // { id: 12, title: 'Node' },
        // { id: 13, title: 'Express' },
        // { id: 14, title: 'Docker' },
        // { id: 15, title: 'Linux' },
    ];
    const skillCollumn: Column<Skill>[] = [
        { header: 'Title', accessor: 'title' },
    ];
    const categories: Category[] = [
        { id: 1, title: 'Full-Stack Web' },
        { id: 2, title: 'Information System' },
        { id: 3, title: 'Desktop / Web App' },
    ];

    const categoryColumn: Column<Category>[] = [
        { header: 'Category Name', accessor: 'title' },
    ];
    const status: Status[] = [
        { id: 1, title: 'Completed' },
        { id: 2, title: 'Active' },
        { id: 3, title: 'In Progress' },
    ];

    const statusColumn: Column<Status>[] = [
        { header: 'Status Name', accessor: 'title' },
        { header: 'Color', accessor: 'color' },
    ];
    const handleActive = (item: string) => {
        setStatisticActive(item);
    };

    let selectedData;

    if (statisticActive === 'project') {
        selectedData = {
            data: projects,
            col: projectColumn,
        };
    } else if (statisticActive === 'skill') {
        selectedData = {
            data: skills,
            col: skillCollumn,
        };
    } else if (statisticActive === 'tech_stack') {
        selectedData = {
            data: categories,
            col: categoryColumn,
        };
    } else if (statisticActive === 'status') {
        selectedData = {
            data: status,
            col: statusColumn,
        };
    }
    return (
        <AdminLayout title="Project">
            <div className="grid gap-2">
                <div>
                    <StatisticCard
                        title="Project"
                        total="10"
                    />
                </div>
                <Card className="grid gap-5 text-xs">
                    <div className="flex w-full items-center gap-2">
                        <div className="">Cari data :</div>
                        <div className="flex-1">
                            <Input
                                icon={<i className="bi bi-search"></i>}
                                placeholder="Filter by Project name"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                title="View"
                                icon={<i className="bi bi-view-list"></i>}
                            />
                            <Button
                                title="Sort By"
                                icon={<i className="bi bi-sort-down"></i>}
                            />
                            <Button
                                title="Tech Stack"
                                icon={<i className="bi bi-sort-down"></i>}
                            />
                            <Button
                                title="Status"
                                icon={<i className="bi bi-sort-down"></i>}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr>
                                    <th className="w-1">xxx</th>
                                    <th className="w-1">No</th>
                                    <th className="w-100 px-6 py-4">
                                        Project Name
                                    </th>
                                    <th className="w-100 px-6 py-4">
                                        Tech Stack
                                    </th>
                                    <th className="px-6 py-4">Colaborator</th>
                                    <th className="px-6 py-4">Role</th>
                                    <th className="px-6 py-4">Skill</th>
                                    <th className="w-1 px-6 py-4">Status</th>
                                    <th className="w-1 px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>1</td>
                                    <td>Vantomic Studio</td>
                                    <td>Laravel, React, Tailwind</td>
                                    <td>PT Solusi Digital</td>
                                    <td>Fullstack Developer</td>
                                    <td>PHP, JavaScript</td>
                                    <td>Completed</td>
                                    <td>edit hapus</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>2</td>
                                    <td>SILAMPAH Garbage System</td>
                                    <td>PHP, MySQL, Bootstrap</td>
                                    <td>Dinas Lingkungan Hidup</td>
                                    <td>Backend Developer</td>
                                    <td>PHP, MySQL</td>
                                    <td>Active</td>
                                    <td>edit hapus</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>3</td>
                                    <td>Point of Sale App</td>
                                    <td>Inertia.js, PostgreSQL</td>
                                    <td>Toko Berkah Jaya</td>
                                    <td>Lead Developer</td>
                                    <td>TypeScript, React</td>
                                    <td>In Progress</td>
                                    <td>edit hapus</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>4</td>
                                    <td>E-Commerce Dashboard</td>
                                    <td>Next.js, Tailwind CSS</td>
                                    <td>Global Retail Inc.</td>
                                    <td>Frontend Engineer</td>
                                    <td>Next.js, Tailwind</td>
                                    <td>Completed</td>
                                    <td>edit hapus</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>5</td>
                                    <td>Company Profile Web</td>
                                    <td>HTML, CSS, JavaScript</td>
                                    <td>CV Karya Mandiri</td>
                                    <td>Web Designer</td>
                                    <td>HTML, CSS</td>
                                    <td>Pending</td>
                                    <td>edit hapus</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
        </AdminLayout>
    );
}
