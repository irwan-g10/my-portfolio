import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function FooterProjectForm() {
    return (
        <Card className="my-5 flex justify-end rounded-lg p-2">
            <Button
                title="Simpan"
                type={'submit'}
            />
        </Card>
    );
}
