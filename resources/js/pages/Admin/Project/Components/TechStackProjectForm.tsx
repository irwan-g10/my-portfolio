import Input from '@/components/ui/Input';
import FormLayout from './FormLayout';

export default function TechStackProjectForm({ data, setData }) {
    const dummyTechs = [
        'Frontend Development',
        'UI/UX Design',
        'State Management',
        'RESTful API Integration',
        'Git & Version Control',
    ];
    return (
        <FormLayout title="Tech Stack">
            <div className="flex flex-wrap justify-start gap-2">
                {dummyTechs.map((tech, index) => (
                    <Input
                        type="radio"
                        label={tech}
                        name="tech_stack"
                        value={tech}
                        checked={data.tech_stack === tech}
                        onChange={(e) => setData('tech_stack', e.target.value)}
                    />
                ))}
            </div>
        </FormLayout>
    );
}
