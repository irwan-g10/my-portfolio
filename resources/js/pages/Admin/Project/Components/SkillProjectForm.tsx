import Input from '@/components/ui/Input';
import FormLayout from './FormLayout';

export default function SkillProjectForm({ skills, data, setData }) {
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        // 1. Pastikan data.skills aman (jika belum ada/undefined, ubah jadi array kosong [])
        const currentSkills = Array.isArray(data.skills) ? data.skills : [];

        // 2. Baru lakukan spread
        let updatedSkills = [...currentSkills];

        if (isChecked) {
            // Jika dicentang, masukkan ke dalam array
            updatedSkills.push(value);
        } else {
            // Jika batal centang, hapus dari array
            updatedSkills = updatedSkills.filter((item) => item !== value);
        }

        setData('skills', updatedSkills);
    };
    return (
        <FormLayout
            title="Skill"
            addForm
        >
            <div className="flex flex-wrap justify-start gap-2">
                {skills?.map((skill, index) => (
                    <Input
                        type="checkbox"
                        label={skill.name}
                        value={skill.name}
                        onChange={handleCheckboxChange}
                    />
                ))}
            </div>
        </FormLayout>
    );
}
