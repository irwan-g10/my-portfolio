import Button from './Button';

export default function ExpandableButton({
    title = '',
    isVisible,
    onClick,
    page = false,
}) {
    let icon = <i className="bi bi-arrow-right"></i>;
    return (
        <div className="w-full">
            {!isVisible && (
                <div className="backdrop-blur- absolute inset-x-0 bottom-0 flex h-50 items-end justify-center bg-linear-to-t from-slate-950 via-slate-950/90 to-slate-950/10 p-10">
                    {/* Lihat Lebih Banyak */}
                    <Button
                        title={title}
                        icon={icon}
                        onClick={onClick}
                        className="backdrop-none border-none bg-transparent hover:scale-110 hover:bg-transparent"
                    />
                </div>
            )}
            {isVisible && (
                <div className="flex justify-between font-extrabold">
                    <div>{page && 'Menampilkan 3 dari 15 sertifikat'}</div>
                    <Button
                        icon={<i className="bi bi-clipboard-x"></i>}
                        className="border-none bg-transparent p-2 text-2xl"
                        onClick={onClick}
                    />
                    <div>
                        {page && (
                            <div className="flex items-center gap-5">
                                <div>0-1 of 0</div>
                                <div className="flex gap-1">
                                    <Button
                                        icon={
                                            <i className="bi bi-chevron-bar-left"></i>
                                        }
                                        className="h-fit w-fit scale-90 rounded-sm p-0 px-1 text-lg font-extrabold"
                                    ></Button>
                                    <Button
                                        icon={
                                            <i className="bi bi-chevron-left"></i>
                                        }
                                        className="h-fit w-fit scale-90 rounded-sm p-0 px-1 text-lg font-extrabold"
                                    ></Button>
                                    <Button
                                        icon={
                                            <i className="bi bi-chevron-right"></i>
                                        }
                                        className="h-fit w-fit scale-90 rounded-sm p-0 px-1 text-lg font-extrabold"
                                    ></Button>
                                    <Button
                                        icon={
                                            <i className="bi bi-chevron-bar-right"></i>
                                        }
                                        className="h-fit w-fit scale-90 rounded-sm p-0 px-1 text-lg font-extrabold"
                                    ></Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
