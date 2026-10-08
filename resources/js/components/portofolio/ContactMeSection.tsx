import { FaEnvelope, FaWhatsapp } from "react-icons/fa6"
import { GrMapLocation } from "react-icons/gr";
import Button from "../Common/Button"
import ContactInfo from "../Common/ContactInfo"
import SectionTitle from "../Common/SectionTitle"
import ContactInput from "./ContactInput"

export default function ContactMeSection() {
    return (
        <div className="w-4/5 mx-auto mb-5">
            <SectionTitle title="Contact Me" />
            <div className="md:flex ">

                <div className="flex gap-4 flex-col">
                    <div className="flex w-50 border p-2 px-3 gap-2 rounded-full mb-2 border-blue-500 text-blue-500 font-bold">
                        <i className="bi bi-record-circle"></i>
                        <div className="">Available for work</div>
                    </div>
                    <h3 className="font-extrabold text-2xl">Lets Work Together</h3>
                    <p className="text-md">
                        Punya ide proyek, diskusi teknis, atau tawaran pekerjaan? Silakan hubungi saya melalui formulir atau kontak di bawah ini.
                    </p>
                    <div className="contact-info flex gap-2 flex-col p-2">
                        <ContactInfo label="Email" value="irwangumilar111@gmail.com" icon={<FaEnvelope/>} />
                        <ContactInfo label='WhatsApp' value='+62 822-9536-5106' icon={<FaWhatsapp/>} />
                        <ContactInfo label='Location' value='Bandung, Jawa Barat' icon={<GrMapLocation />} />
                    </div>
                </div>
                <div className="p-5 ">
                    <div className="md:flex gap-2">

                        <ContactInput label="Nama Lengkap" />

                        <ContactInput label="Alamat Email" />
                    </div>
                    <ContactInput label="Subjek / Topik " />
                    <ContactInput label="Pesan Anda" type='textarea' />
                    <Button title="Kirim Pesan" />
                </div>
            </div>
        </div>
    )
}