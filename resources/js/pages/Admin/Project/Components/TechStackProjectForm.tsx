import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

export default function TechStackProjectForm() {
    const dummyTechs = [
        'Frontend Development',
        'UI/UX Design',
        'State Management',
        'RESTful API Integration',
        'Git & Version Control',
    ];
    return (
        <Card className="flex flex-col gap-2 rounded-lg">
            <div className="flex-1 font-semibold">Tech Stack</div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <Input
                        placeholder="Cari Tech Stack atau tambah data Tech Stack"
                        icon={<i className="bi bi-search"></i>}
                    />
                </div>
                <div>
                    <Button
                        title="Tambah"
                        icon={<i className="bi bi-node-plus"></i>}
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-start gap-2">
                {dummyTechs.map((tech, index) => (
                    <Input
                        type="radio"
                        label={tech}
                        name="tech"
                    />
                ))}
            </div>
        </Card>
    );
}
