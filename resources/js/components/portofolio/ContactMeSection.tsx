import ContactInfo from "../Common/ContactInfo"
import SectionTitle from "../Common/SectionTitle"
import ContactInput from "./ContactInput"

export default function ContactMeSection() {
    return (
        <div className="container mb-5">
            <SectionTitle title="Contact Me" />
            <div className="row">

                <div className="col">
                    <div className="d-flex">
                        <div className="d-flex border p-2 px-3 gap-2 rounded-pill mb-2">
                            <i className="bi bi-record-circle"></i>
                            <div className="">Available for work</div>
                        </div>
                    </div>
                    <h3>Lets Work Together</h3>
                    <p>
                        Punya ide proyek, diskusi teknis, atau tawaran pekerjaan? Silakan hubungi saya melalui formulir atau kontak di bawah ini.
                    </p>
                    <div className="contact-info p-2">
                        <ContactInfo label="Email" value="irwangumilar111@gmail.com" icon='envelope' />
                        <ContactInfo label='WhatsApp' value='+62 822-9536-5106' icon='whatsapp' />
                        <ContactInfo label='Location' value='Bandung, Jawa Barat' icon='geo-alt' />
                    </div>
                </div>
                <div className="col ">
                    <div className="row">
                        <div className="col">

                            <ContactInput label="Nama Lengkap" />
                        </div>
                        <div className="col">

                            <ContactInput label="Alamat Email" />
                        </div>
                    </div>
                    <ContactInput label="Subjek / Topik " />
                    <ContactInput label="Pesan Anda" type='textarea'/>
                    <button className="btn btn-primary mt-2 w-100">Kirim Pesan</button>
                </div>
            </div>
        </div>
    )
}