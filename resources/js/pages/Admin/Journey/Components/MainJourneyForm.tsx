import Input from '@/components/ui/Input';
import FormLayout from '../../Project/Components/FormLayout';

export default function MainJourneyForm() {
    return (
        <FormLayout addForm={false}>
            <div className="grid grid-cols-2 gap-2">
                <Input
                    label="Nama Perusahaan / Instansi"
                    icon={<i className="bi bi-building"></i>}
                />
                <Input
                    label="Posisi / Jabatan"
                    icon={<i className="bi bi-briefcase"></i>}
                />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <Input
                    label="Jenis Pengalaman"
                    icon={<i className="bi bi-briefcase"></i>}
                />
                <Input
                    label="Lokasi"
                    icon={<i className="bi bi-geo-alt"></i>}
                />
            </div>
            <div className="grid grid-cols-3 gap-2">
                <Input
                    label="Mulai Bekerja"
                    type="date"
                    // value={data.title}
                    icon={<i className="bi bi-calendar2-date"></i>}
                    // onChange={(e) => setData('title', e.target.value)}
                />
                <Input
                    label="Akhir Bekerja"
                    type="date"
                    // value={data.title}
                    icon={<i className="bi bi-calendar2-date"></i>}
                    // onChange={(e) => setData('title', e.target.value)}
                />
                <div className="flex items-end">
                    <Input
                        label="Masih Aktif di posisi ini"
                        type="checkbox"
                    />
                </div>
            </div>
            <Input
                label="Deskripsi Pengalaman"
                type="textarea"
            />
        </FormLayout>
    );
}
