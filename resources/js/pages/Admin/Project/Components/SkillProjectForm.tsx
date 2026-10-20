import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

export default function SkillProjectForm() {
    const dummySkills = [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Node.js',
        'TypeScript',
    ];
    return (
        <Card className="flex flex-col gap-2 rounded-lg">
            <div className="flex-1 font-semibold">Skill</div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <Input
                        placeholder="Cari skill atau tambah data skill"
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
            <div className="flex flex-wrap justify-end gap-2">
                {dummySkills.map((skill, index) => (
                    <Input
                        type="checkbox"
                        label={skill}
                    />
                ))}
            </div>
        </Card>
    );
}
