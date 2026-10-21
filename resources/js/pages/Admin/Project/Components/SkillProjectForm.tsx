import Input from '@/components/ui/Input';
import FormLayout from './FormLayout';

export default function SkillProjectForm() {
    const dummySkills = [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Node.js',
        'TypeScript',
    ];
    return (
        <FormLayout title="Skill">
            <div className="flex flex-wrap justify-start gap-2">
                {dummySkills.map((skill, index) => (
                    <Input
                        type="checkbox"
                        label={skill}
                    />
                ))}
            </div>
        </FormLayout>
    );
}
