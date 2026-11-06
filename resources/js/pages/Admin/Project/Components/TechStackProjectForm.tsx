import Input from '@/components/ui/Input';
import FormLayout from './FormLayout';

export default function TechStackProjectForm({ data, setData, techStack }) {
    const dummyTechs = [
        'Frontend Development',
        'UI/UX Design',
        'State Management',
        'RESTful API Integration',
        'Git & Version Control',
    ];
    console.log(techStack);
    return (
        <FormLayout title="Tech Stack">
            <div className="flex flex-wrap justify-start gap-2">
                {techStack.map((tech, index) => (
                    <Input
                        type="radio"
                        label={tech.title}
                        name="tech_stack"
                        value={tech.id}
                        checked={Number(data.tech_stack) === Number(tech.id)}
                        onChange={(e) => setData('tech_stack', e.target.value)}
                    />
                ))}
            </div>
        </FormLayout>
    );
}
