import Card from '@/components/ui/Card';

export default function ThumbnailProjectForm() {
    return (
        <Card className="rounded-lg">
            <div className="flex flex-col gap-2">
                <div className="font-semibold">Galeri Proyek</div>
                <div className="grid grid-cols-4 gap-3 text-[9px]">
                    <div className="col-span-3 flex items-center justify-center rounded-xl bg-slate-950 outline-slate-600 outline-dashed">
                        <div className="flex flex-col items-center gap-2">
                            <div>
                                <i className="bi bi-images text-xl"></i>
                            </div>
                            <div>Pilih file thumbnail</div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="flex h-20 items-center justify-center rounded-xl bg-slate-950 outline-slate-600 outline-dashed">
                            <div className="flex flex-col items-center gap-2">
                                <div>
                                    <i className="bi bi-file-earmark-plus text-xl"></i>
                                </div>
                                <div>Upload</div>
                            </div>
                        </div>
                        <div className="flex h-20 items-center justify-center rounded-xl bg-slate-950 outline-slate-600 outline-dashed">
                            <div className="flex flex-col items-center gap-2">
                                <div>
                                    <i className="bi bi-file-earmark-plus text-xl"></i>
                                </div>
                                <div>Upload</div>
                            </div>
                        </div>
                        <div className="flex h-20 items-center justify-center rounded-xl bg-slate-950 outline-slate-600 outline-dashed">
                            <div className="flex flex-col items-center gap-2">
                                <div>
                                    <i className="bi bi-file-earmark-plus text-xl"></i>
                                </div>
                                <div>Upload</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
