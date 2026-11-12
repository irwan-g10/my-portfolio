import TableFooter from '@/components/Common/Admin/TableFooter';
import TableHeader from '@/components/Common/Admin/TableHeader';
import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CategorySkillTableContent from './CategorySkillTableContent';

export default function CategorySkillContent({ categorySkills }) {
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searching, setSearching] = useState('');
    const [sorting, setSorting] = useState('');
    const [pagination, setPagination] = useState('5');
    const [selectedCategory, setSelectedCategory] = useState([]);

    async function fetchDataCategory() {
        setIsLoading(true);
        try {
            const response = await axios.get('/api/category-skills', {
                params: {
                    paginate: pagination,
                    search: searching,
                    sort: sorting,
                },
            });

            setCategory(response.data.data);
            console.log(response.data.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchDataCategory();
    }, [searching, sorting, pagination]);

    return (
        <Card className="relative grid gap-5 text-xs">
            <TableHeader
                setSearching={setSearching}
                addUrl="/category-skills/create"
                title={'Category'}
            />
            {isLoading ? (
                <div className="py-10 text-center text-amber-500">
                    Memuat data kategori
                </div>
            ) : (
                <CategorySkillTableContent
                    categorySkills={category?.data || []}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            )}
            <TableFooter
                setSorting={setSorting}
                selectedData={selectedCategory}
                setPagination={setPagination}
            />
            <Pagination data={categorySkills} />
        </Card>
    );
}
