import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function CertificationCard() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid items-center justify-center gap-3 md:grid-cols-3">
                <div className="text-center">
                    <div className="text-sm">Desember 2025</div>
                    <div className="text-lg font-bold">Dicoding Academy</div>
                </div>
                <div className="flex flex-col gap-3">
                    <h5 className="text-xl font-black">
                        Full Stack Web Developer
                    </h5>
                    <div className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit distinctio unde tenetur. Expedita, quam
                        eligendi! Odit ullam unde officia ipsum!
                    </div>
                    <div className="flex gap-2">
                        <Badge label="Laravel" />
                        <Badge label="Laravel" />
                        <Badge label="Laravel" />
                        <Badge label="Laravel" />
                    </div>
                </div>
                <div className="flex items-end justify-end">
                    <Button title="Lihat Sertifikat" />
                </div>
            </div>
            <hr className="my-3 w-full rounded-full border-2 md:w-3/5" />
        </div>
    );
}
