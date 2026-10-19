import ContactInfo from '@/components/Common/ContactInfo';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import { GrMapLocation } from 'react-icons/gr';
import ContactInput from './ContactInput';

export default function ContactMeSection() {
    return (
        <div className="mx-auto mb-5 w-4/5">
            <SectionTitle title="Contact Me" />
            <div className="md:flex">
                <div className="flex flex-3 flex-col gap-4">
                    <div className="mb-2 flex w-50 gap-2 rounded-full border border-blue-500 p-2 px-3 font-bold text-blue-500">
                        <i className="bi bi-record-circle"></i>
                        <div className="">Available for work</div>
                    </div>
                    <h3 className="text-2xl font-extrabold">
                        Lets Work Together
                    </h3>
                    <p className="text-md">
                        Punya ide proyek, diskusi teknis, atau tawaran
                        pekerjaan? Silakan hubungi saya melalui formulir atau
                        kontak di bawah ini.
                    </p>
                    <div className="contact-info flex flex-col gap-2 p-2">
                        <ContactInfo
                            label="Email"
                            value="irwangumilar111@gmail.com"
                            icon={<i className="bi bi-envelope"></i>}
                        />
                        <ContactInfo
                            label="WhatsApp"
                            value="+62 822-9536-5106"
                            icon={<i class="bi bi-envelope"></i>}
                        />
                        <ContactInfo
                            label="Location"
                            value="Bandung, Jawa Barat"
                            icon={<GrMapLocation />}
                        />
                    </div>
                </div>
                <div className="flex flex-2 flex-col p-5">
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <ContactInput
                                placeholder="Masukan Nama Lengkap anda"
                                label="Nama Lengkap"
                                icon={<i className="bi bi-person"></i>}
                            />
                        </div>
                        <div className="flex-1">
                            <ContactInput
                                label="Alamat Email"
                                placeholder="Masukan Email Anda"
                                icon={<i className="bi bi-envelope"></i>}
                            />
                        </div>
                    </div>
                    <ContactInput
                        label="Subjek / Topik "
                        icon={<i className="bi bi-lightbulb"></i>}
                        placeholder="Subjek / Topik Pembahasan"
                    />
                    <ContactInput
                        label="Pesan Anda"
                        type="textarea"
                    />
                    <Button title="Kirim Pesan" />
                </div>
            </div>
        </div>
    );
}
