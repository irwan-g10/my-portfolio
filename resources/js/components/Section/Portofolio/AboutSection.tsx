import GithubContributions from '@/components/Common/GIthubContributions';
import ImageBadge from '@/components/Common/ImageBadge';
import ShapeGrid from '@/components/ShapeGrid';
import Button from '@/components/ui/Button';

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
            <div className="absolute inset-0 z-0 h-full w-full">
                <ShapeGrid
                    shape="tile"
                    direction="diagonal"
                    lineColor="#2a2734"
                    hoverColor="#ffffff"
                    hoverFillColor="#ffffff"
                    fillOpacity={0.15}
                    cellSize={40}
                    speed={0.5}
                    tiltX={0}
                    tiltY={0}
                    rainbow={false}
                    lineWidth={1}
                    radius={1.5}
                    trail={0.6}
                    glow={0.35}
                    twinkle={0}
                    fade={1}
                    clickCascade={true}
                    intro
                />
            </div>
        </div>
    );
}
