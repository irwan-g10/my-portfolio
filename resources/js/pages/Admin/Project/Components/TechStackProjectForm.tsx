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
                        name="techStack"
                        value={tech}
                        checked={data.techStack === tech}
                        onChange={(e) => setData('techStack', e.target.value)}
                    />
                ))}
            </div>
        </FormLayout>
    );
}
