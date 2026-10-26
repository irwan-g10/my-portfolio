export default function ProjectTablePagination() {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <div>Rows Per Page</div>
                <div>5</div>
                <div>
                    <i className="bi bi-chevron-down"></i>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <div>Menampilkan</div>
                <div>1-10</div>
                <div>dari 24 data</div>
                <button className="rounded-lg bg-amber-500 p-2">
                    <i className="bi bi-chevron-left"></i> Prev
                </button>
                <button className="w-7 rounded-lg bg-amber-500 p-2">1</button>
                <button className="w-7 rounded-lg bg-amber-500 p-2">2</button>
                <button className="w-7 rounded-lg bg-amber-500 p-2">3</button>
                <button className="rounded-lg bg-amber-500 p-2">
                    Next <i className="bi bi-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}
