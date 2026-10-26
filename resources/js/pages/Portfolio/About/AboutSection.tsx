import Button from '@/components/ui/Button';
import GithubContributions from '@/pages/Portfolio/About/Components/GIthubContributions';
import ImageBadge from '@/pages/Portfolio/About/Components/ImageBadge';

export default function AboutSection() {
    return (
        <div className="w-100% relative h-screen">
            <section
                className="relative z-10 flex h-screen items-center justify-center"
                id="about"
            >
                <div className="md:w-4/5">
                    <div className="mt-10 mb-5 flex flex-col-reverse gap-5 md:flex md:flex-row">
                        <div className="flex-1">
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
                                Saya Seorang Frontend Developer
                            </label>
                            <p className="my-3 text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Neque, fugit aperiam
                                voluptatem quidem ipsa quod error iure
                                laudantium natus sapiente perspiciatis nam
                                voluptatibus vitae voluptate porro. Sapiente
                                harum non nemo, modi, possimus facilis quaerat
                                maiores doloremque, necessitatibus rerum neque
                                magnam.
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
                        <div className="profesional-foto flex flex-1 justify-end">
                            <ImageBadge />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
