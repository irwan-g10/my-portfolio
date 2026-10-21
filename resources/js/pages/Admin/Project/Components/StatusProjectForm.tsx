import FormLayout from './FormLayout';

export default function StatusProjectForm() {
    return (
        <FormLayout title="Status Project">
            <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                <label
                    htmlFor="Selesai"
                    className="flex flex-col items-center gap-2 rounded-lg border-2 border-emerald-500/50 bg-slate-950 p-2 hover:bg-emerald-500/10 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-500/10"
                >
                    <input
                        id="Selesai"
                        type="radio"
                        name="status"
                        className="mt-3 h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-emerald-500/50 bg-slate-900 checked:border-emerald-500 checked:bg-emerald-500"
                    />
                    Selesai
                </label>
                <label
                    htmlFor="Dalam Proses"
                    className="flex flex-col items-center gap-2 rounded-lg border-2 border-amber-500/50 bg-slate-950 p-2 hover:bg-amber-500/10 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-500/10"
                >
                    <input
                        id="Dalam Proses"
                        type="radio"
                        name="status"
                        className="mt-3 h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-amber-500/50 bg-slate-900 checked:border-amber-500 checked:bg-amber-500"
                    />
                    Dalam Proses
                </label>
                <label
                    htmlFor="Tertunda"
                    className="flex flex-col items-center gap-2 rounded-lg border-2 border-indigo-500/50 bg-slate-950 p-2 hover:bg-indigo-500/10 has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-500/10"
                >
                    <input
                        id="Tertunda"
                        type="radio"
                        name="status"
                        className="mt-3 h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-indigo-500/50 bg-slate-900 checked:border-indigo-500 checked:bg-indigo-500"
                    />
                    Tertunda
                </label>
            </div>
        </FormLayout>
    );
}
