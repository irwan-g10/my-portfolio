import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Dropdown from '@/components/ui/Dropdown';
import Input from '@/components/ui/Input';
import WakeSlider from '@/components/WakeSlider';
import { useForm } from '@inertiajs/react';
import AdminLayout from '../AdminLayout';

export default function Create() {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: '',
        category: '',
        level: '',
        icon: '',
        percentage: 0,
    });

    const handlePercentageChange = (value) => {
        const val =
            typeof value === 'object' && value?.target
                ? value.target.value
                : value;

        if (val > 75) {
            setData('level', 'Expert');
        } else if (val > 45) {
            setData('level', 'Advance');
        } else if (val > 20) {
            setData('level', 'Intermediate');
        } else {
            setData('level', 'Beginner');
        }
        setData('percentage', val);

        // alert(val);
    };
    const handleSumbit = (e) => {
        e.preventDefault();

        alert(data.level);
        // if (isUpdate) {
        //     put(`/api/tech-stacks/${techStack.id}`, {
        //         onSuccess: () => reset(),
        //         onError: (errors) => {
        //             console.log(errors);
        //         },
        //     });
        // } else {
        // post('/api/category-skills', {
        //     onSuccess: () => reset(),
        //     onError: (errors) => {
        //         console.log(errors);
        //     },
        // });
        // }
    };
    return (
        <AdminLayout>
            <Card className="grid gap-2">
                <form
                    className="grid gap-2"
                    onSubmit={handleSumbit}
                >
                    <div className="grid grid-cols-2 gap-2">
                        <Input
                            label="Skill Name"
                            placeholder="Enter Skill Name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <Input
                            label="Category"
                            placeholder="Enter Category "
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center justify-center rounded-sm bg-red-500 p-2">
                            <i className="devicon-react-original text-6xl"></i>
                        </div>
                        <div className="gap-2">
                            <div className="hidden">
                                <Input
                                    type="text"
                                    label="Icon"
                                    placeholder="Enter Icon"
                                    // value={data.title}
                                    disabled
                                />
                                <Input
                                    label="category"
                                    disabled
                                    // value={data.icon_category}
                                />
                            </div>
                            <div className="">
                                <div className="">
                                    <Dropdown
                                        name="icon"
                                        options={[
                                            'bootstrap-icons',
                                            'dev-icons',
                                            'image',
                                        ]}
                                        // value={data.icon_type}
                                        // onChange={(e) =>
                                        // setData(
                                        //     'icon_type',
                                        //     e.target.value,
                                        // )
                                        // }
                                        label="Select Type"
                                    />
                                </div>
                                <Input
                                    label="Source"
                                    // onChange={(e) =>
                                    // setData('icon_source', e.target.value)
                                    // }
                                    // value={data.icon_source}
                                    placeholder="Enter Source"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-sm font-semibold">Level</div>
                    <div className="grid px-10">
                        <WakeSlider
                            value={data.percentage}
                            min={0}
                            max={100}
                            step={5}
                            bars={20}
                            height={56}
                            restHeight={12}
                            gap={4}
                            fillColor="#f5f5f5"
                            trackColor="#27272a"
                            sensitivity={1}
                            reach={6}
                            skew={0.6}
                            glide={0.3}
                            smoothing={100}
                            onChange={handlePercentageChange}
                            disabled={false}
                        />
                        <div className="mb-10 grid grid-cols-4 gap-1 text-sm font-semibold">
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    setData('percentage', 20);
                                    setData('level', 'Beginner');
                                }}
                            >
                                <div
                                    className={`h-5 rounded-full border-b-[5px] ${data.level === 'Beginner' ? 'border-amber-500' : 'border-slate-100'}`}
                                ></div>
                                <div
                                    className={`text-center text-sm ${data.level === 'Beginner' ? 'text-amber-500' : 'text-gray-500'}`}
                                >
                                    Beginner
                                </div>
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    setData('percentage', 45);
                                    setData('level', 'Intermediate');
                                }}
                            >
                                <div
                                    className={`h-5 rounded-full border-b-[5px] ${data.level === 'Intermediate' ? 'border-amber-500' : 'border-slate-100'}`}
                                ></div>
                                <div
                                    className={`text-center text-sm ${data.level === 'Intermediate' ? 'text-amber-500' : 'text-gray-500'}`}
                                >
                                    Intermediate
                                </div>
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    setData('percentage', 70);
                                    setData('level', 'Advance');
                                }}
                            >
                                <div
                                    className={`h-5 rounded-full border-b-[5px] ${data.level === 'Advance' ? 'border-amber-500' : 'border-slate-100'}`}
                                ></div>
                                <div
                                    className={`text-center text-sm ${data.level === 'Advance' ? 'text-amber-500' : 'text-gray-500'}`}
                                >
                                    Advance
                                </div>
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    setData('percentage', 100);
                                    setData('level', 'Expert');
                                }}
                            >
                                <div
                                    className={`h-5 rounded-full border-b-[5px] ${data.level === 'Expert' ? 'border-amber-500' : 'border-slate-100'}`}
                                ></div>
                                <div
                                    className={`text-center text-sm ${data.level === 'Expert' ? 'text-amber-500' : 'text-gray-500'}`}
                                >
                                    Expert
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full"> */}
                    <Button
                        type="submit"
                        title={'Tambahkan data'}
                    />
                    {/* </div> */}
                </form>
            </Card>
        </AdminLayout>
    );
}
