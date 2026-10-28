import { useRef, useState } from 'react';
import FormLayout from './FormLayout';

export default function ThumbnailProjectForm({ data, setData }) {
    // State untuk menyimpan file thumbnail utama dan preview-nya
    const [thumbnail, setThumbnail] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    // Reference untuk memicu klik pada input file tersembunyi
    const fileInputRef = useRef(null);

    // Fungsi saat file dipilih
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('thumbnail', file);
            // Membuat temporary URL untuk preview gambar
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    // Fungsi untuk membuka file dialog saat area card diklik
    const handleBoxClick = () => {
        // console.log({ previewUrl, data.thumbnail });
        fileInputRef.current;
    };
    return (
        <FormLayout
            title="Thumbnail Project"
            addForm={false}
        >
            <div className="flex flex-col gap-5">
                <label className="relative flex h-50 items-center justify-center overflow-hidden rounded-xl bg-slate-950 outline-slate-600 outline-dashed">
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
                <div
                    className="flex h-fit w-full items-center justify-center"
                    onClick={handleBoxClick}
                >
                    {data.thumbnail ? data.thumbnail.name : 'Tidak ada Foto'}
                </div>
            </div>
        </FormLayout>
    );
}
