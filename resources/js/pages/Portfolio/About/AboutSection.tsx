import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import GithubContributions from '@/pages/Portfolio/About/Components/GIthubContributions';
import ImageBadge from './Components/ImageBadge';

export default function AboutSection() {
    return (
        <div className="w-100% relative h-screen">
            <section
                className="relative z-10 flex h-screen items-center justify-center"
                id="about"
            >
                <div className="md:w-4/5">
                    <div className="mt-10 mb-5 flex flex-col-reverse justify-between gap-5 md:flex md:flex-row">
                        <div className="w-150">
                            <h3 className="text-3xl font-semibold">
                                Halo Semua,
                            </h3>
                            <div className="flex items-center">
                                <div className="text-4xl font-bold">
                                    Saya{' '}
                                    <span className="text-amber-500">
                                        Irwan Gumilar
                                    </span>
                                </div>
                            </div>
                            <label className="text italic">
                                Saya Seorang Fullstack Developer
                            </label>
                            <p className="my-3 text-sm">
                                Memiliki antusiasme tinggi dibidang Fullstack
                                Development dengan pengalaman lebih dari 2 tahun
                                dalam pengembangan aplikasi web menyeluruh dari
                                backend hingga frontend.Terampil dalam
                                komunikasi dan kerjasama tim, Memiliki semangat
                                belajar yang tinggi terhadap teknologi baru dan
                                berkomitmen untuk membangun profil profesional
                                yang kuat sebagai Frontend Developer guna
                                menjadi talenta digital yang unggul.
                            </p>
                            <div className="my-5">
                                <GithubContributions />
                            </div>
                            <div className="flex items-center justify-end gap-3">
                                <div className="flex gap-3">
                                    <Button
                                        icon={
                                            <i className="bi bi-instagram"></i>
                                        }
                                        className=""
                                    />
                                    <Button
                                        icon={
                                            <i className="bi bi-linkedin"></i>
                                        }
                                        className=""
                                    />
                                    <Button
                                        icon={<i className="bi bi-github"></i>}
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="profesional-foto flex flex-col items-end justify-end gap-5">
                            <div className="flex flex-col items-center gap-5">
                                {/* <div className="bg-green-500"> */}
                                <ImageBadge />
                                {/* </div> */}
                                <div className="flex gap-5">
                                    <Card className="w-fit p-3">
                                        <i className="bi bi-mortarboard text-3xl"></i>
                                    </Card>
                                    <div className="text-sm">
                                        <div className="text-lg font-semibold">
                                            Universitas Teknologi Bandung
                                        </div>
                                        <div className="">
                                            Teknik Informatika, 2019
                                        </div>
                                        <div className="text-xs">
                                            IPK 3.60/4.00 dengan Predikat
                                            Cumlaude
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
