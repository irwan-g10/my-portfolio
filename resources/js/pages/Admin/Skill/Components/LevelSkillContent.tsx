import TableFooter from '@/components/Common/Admin/TableFooter';
import TableHeader from '@/components/Common/Admin/TableHeader';
import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LevelSkillTable from './LevelSkillTable';

export default function LevelSkillContent() {
    const [isLoading, setIsLoading] = useState(false);
    const [level, setLevel] = useState([]);
    const [searching, setSearching] = useState('');
    const [sorting, setSorting] = useState('');
    const [pagination, setPagination] = useState('5');

    const [selectedLevel, setSelectedLevel] = useState([]);

    async function fetchDataLevel() {
        setIsLoading(true);
        try {
            const response = await axios.get('/api/level-skills', {
                params: {
                    paginate: pagination,
                    search: searching,
                    sort: sorting,
                },
            });

            setLevel(response.data.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchDataLevel();
    }, [searching, sorting, pagination]);
    return (
        <Card className="relative grid gap-5 text-xs">
            <TableHeader
                setSearching={setSearching}
                addUrl="/level-skills/create"
                title={'Level'}
            />
            {isLoading ? (
                <div className="py-10 text-center text-amber-500">
                    Memuat data level
                </div>
            ) : (
                <LevelSkillTable
                    levelSkills={level?.data || []}
                    selectedLevel={selectedLevel}
                    setSelectedLevel={setSelectedLevel}
                />
            )}
            <TableFooter
                setSorting={setSorting}
                selectedData={selectedLevel}
                setPagination={setPagination}
            />
            <Pagination data={level} />
        </Card>
    );
}
