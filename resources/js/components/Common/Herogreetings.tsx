import Button from '../ui/Button';
import Card from '../ui/Card';

export default function HeroGreetings() {
    return (
        <div className="flex flex-col gap-4 md:w-sm">
            <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 p-2 px-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                <span className="text-xs font-semibold text-emerald-500">
                    Open To Work
                </span>
            </div>
            <div>
                <div className="text-xl font-bold">Fullstack Developer</div>
                <div className="text-xs">
                    Fokus pada pengembangan aplikasi web modern, performa
                    tinggi, dan UI/UX yang responsif.
                </div>
            </div>
            <Card
                content={
                    <div className="flex">
                        <div className="flex-1">
                            <div className="text-xl font-extrabold text-purple-500">
                                2+
                            </div>
                            <div className="text-xs">Tahun Pengalaman</div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xl font-extrabold text-purple-500">
                                10+
                            </div>
                            <div className="text-xs">Proyek Selesai</div>
                        </div>
                    </div>
                }
                className=""
            />

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 pt-1">
                <Button
                    title="About me"
                    className="w-full"
                    icon={<i className="bi bi-person-fill"></i>}
                />
                <Button
                    title="Download CV"
                    className="w-full"
                    icon={<i className="bi bi-file-earmark-arrow-down"></i>}
                />
            </div>
        </div>
    );
}
