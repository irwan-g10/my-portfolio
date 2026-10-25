import Input from '@/components/ui/Input';
import FormLayout from './FormLayout';

export default function SkillProjectForm({ skills }) {
    return (
        <FormLayout
            title="Skill"
            addForm
        >
            <div className="flex flex-wrap justify-start gap-2">
                {skills.map((skill, index) => (
                    <Input
                        type="checkbox"
                        label={skill.name}
                    />
                ))}
            </div>
        </FormLayout>
    );
}
