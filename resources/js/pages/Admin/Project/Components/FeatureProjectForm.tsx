import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

export default function FeatureProjectForm() {
    const dummyFeatures = [
        'using oauth2 auth',
        'implement login page',
        'integration payment gateway',
        'dashboard analytics view',
        'dark mode support',
    ];
    return (
        <Card className="flex flex-col gap-2 rounded-lg">
            <div className="flex-1 font-semibold">Fitur Proyek</div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <Input
                        placeholder="tambah data Fitur Proyek"
                        icon={<i className="bi bi-stars"></i>}
                    />
                </div>
                <div>
                    <Button
                        title="Tambah"
                        icon={<i className="bi bi-node-plus"></i>}
                    />
                </div>
            </div>
            {/* <Card className="flex flex-col gap-2 rounded-sm bg-slate-950 p-2"> */}
            <div className="flex flex-wrap justify-end gap-2 text-[9px]">
                {dummyFeatures.map((feature, index) => (
                    <div className="flex items-center justify-between gap-2 rounded border-2 border-blue-500/20 bg-blue-500/10 p-1 px-2 font-semibold text-blue-500">
                        <div>{feature}</div>
                        <div className="cursor-pointer">x</div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
