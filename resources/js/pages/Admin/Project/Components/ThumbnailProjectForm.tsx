import { useRef, useState } from 'react';
import FormLayout from './FormLayout';

export default function ThumbnailProjectForm() {
    // State untuk menyimpan file thumbnail utama dan preview-nya
    const [thumbnail, setThumbnail] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    // Reference untuk memicu klik pada input file tersembunyi
    const fileInputRef = useRef(null);

    // Fungsi saat file dipilih
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setThumbnail(file);
            // Membuat temporary URL untuk preview gambar
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    // Fungsi untuk membuka file dialog saat area card diklik
    const handleBoxClick = () => {
        fileInputRef.current;
    };
    return (
        <FormLayout
            title="Galery Project"
            addForm={false}
        >
            {/* 3. Pastikan atribut ref={fileInputRef} ada di sini */}
            {/* <Card className="">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full"
                />
            </Card> */}
            <div className="grid grid-cols-4 gap-3 text-[9px]">
                <div className="col-span-3 grid">
                    <label
                        className="relative flex items-center justify-center overflow-hidden rounded-xl bg-slate-950 outline-slate-600 outline-dashed"
                        // onClick={handleBoxClick}
                    >
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"
                            className="relative hidden"
                        />
                        {previewUrl ? (
                            // Jika sudah ada gambar, tampilkan preview-nya
                            <img
                                src={previewUrl}
                                alt="Thumbnail Preview"
                                className="h-full w-full bg-red-500 object-cover"
                            />
                        ) : (
                            // Jika belum ada, tampilkan placeholder awal
                            <div className="flex flex-col items-center gap-2">
                                <div>
                                    <i className="bi bi-images text-xl"></i>
                                </div>
                                <div>Pilih file thumbnail</div>
                            </div>
                        )}
                    </label>
                    <div className="flex w-full justify-center">
                        {thumbnail ? thumbnail.name : ''}
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
        </FormLayout>
    );
}
