import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { useState } from 'react';

interface FormLayoutProps {
    children?: React.ReactNode;
    addForm?: boolean;
    title?: string;
}

export default function FormLayout({
    children,
    addForm,
    data,
    setData,
    title,
}) {
    const [features, setFeatures] = useState([]);

    const [inputValue, setInputValue] = useState('');
    const handleCreateFeatures = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        const newFeature = [...data.features, inputValue];
        setData('features', newFeature);
        setInputValue('');
        // console.log(data?.features);
    };

    return (
        <Card className="grid">
            {title && <div className="flex-1 font-semibold">{title}</div>}
            <div className="flex flex-wrap justify-end gap-2 text-[9px]">
                {data?.features.map((value, index) => (
                    <div className="flex items-center justify-between gap-2 rounded border-2 border-blue-500/20 bg-blue-500/10 p-1 px-2 font-semibold text-slate-100">
                        <div>{value}</div>
                        <div className="cursor-pointer text-blue-500">x</div>
                    </div>
                ))}
            </div>

            {addForm && (
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Input
                            placeholder={'tambah data Fitur Proyek'}
                            value={inputValue}
                            onChange={(e: any) => setInputValue(e.target.value)}
                            icon={<i className="bi bi-stars"></i>}
                        />
                    </div>
                    <div>
                        <Button
                            type="button"
                            title="Tambah"
                            icon={<i className="bi bi-node-plus"></i>}
                            onClick={handleCreateFeatures}
                        />
                    </div>
                </div>
            )}
            {children && <div className="grid gap-2">{children}</div>}
        </Card>
    );
}
