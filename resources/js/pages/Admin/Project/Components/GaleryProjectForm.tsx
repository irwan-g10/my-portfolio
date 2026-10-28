import { useState } from 'react';
import FormLayout from './FormLayout';

export default function GaleryProjectForm({ data, setData }) {
    const [galery, setGalery] = useState([]);
    const [previews, setPreviews] = useState([]);

    const handleFilesChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 0) {
            setData('galery', [...data.galery, ...files]);

            const newPreviews = files.map((file) => URL.createObjectURL(file));
            setPreviews((prev) => [...prev, ...newPreviews]);
        }
    };
    return (
        <FormLayout title={'Galery Project'}>
            <div className="grid grid-cols-4 gap-4">
                {previews.map((src, index) => (
                    <div
                        key={index}
                        className="group relative flex h-20 items-center justify-center overflow-hidden rounded-xl bg-slate-950 outline-slate-600 outline-dashed"
                    >
                        <img
                            src={src}
                            alt={`Gallery Preview ${index}`}
                            className="h-full w-full object-cover"
                        />

                        {/* Tombol Hapus Gambar */}
                        {/* <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-2 right-2 rounded-full bg-red-600 p-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
                            title="Hapus gambar"
                        >
                            <i className="bi bi-x"></i>
                        </button> */}
                    </div>
                ))}
                <label className="flex h-20 cursor-pointer items-center justify-center rounded-xl bg-slate-950 outline-slate-600 transition-colors outline-dashed hover:bg-slate-900">
                    <input
                        type="file"
                        onChange={handleFilesChange}
                        accept="image/*"
                        multiple // Atribut penting agar bisa pilih banyak file sekaligus
                        className="hidden"
                    />
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                        <div>
                            <i className="bi bi-file-earmark-plus text-xl"></i>
                        </div>
                        <div className="text-xs">Upload Galeri</div>
                    </div>
                </label>
                {/* <div className="flex h-20 items-center justify-center rounded-xl bg-slate-950 outline-slate-600 outline-dashed">
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
                </div> */}
            </div>
        </FormLayout>
    );
}
