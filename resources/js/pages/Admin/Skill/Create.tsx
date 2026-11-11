import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Dropdown from '@/components/ui/Dropdown';
import Input from '@/components/ui/Input';
import WakeSlider from '@/components/WakeSlider';
import { useForm } from '@inertiajs/react';
import AdminLayout from '../AdminLayout';

export default function Create({ category, level }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: '',
        category: '',
        level: '',
        percentage: 0,
        iconSource: '',
        iconType: '',
    });

    const handlePercentageChange = (value) => {
        const val =
            typeof value === 'object' && value?.target
                ? value.target.value
                : value;

        const totalLevels = level.length;
        const rangeSize = 100 / totalLevels;

        let matchedLevel = '';

        for (let i = 0; i < totalLevels; i++) {
            const upperLimit = rangeSize * (i + 1);

            if (val <= upperLimit) {
                matchedLevel = level[i].name;
                break;
            }
        }

        setData('percentage', val);
        setData('level', matchedLevel);
        // if (val > 75) {
        //     setData('level', 'Expert');
        // } else if (val > 45) {
        //     setData('level', 'Advance');
        // } else if (val > 20) {
        //     setData('level', 'Intermediate');
        // } else {
        //     setData('level', 'Beginner');
        // }
        // setData('percentage', val);
        // alert(val);
    };
    const handleSumbit = (e) => {
        e.preventDefault();

        console.log(category);
        // if (isUpdate) {
        //     put(`/api/tech-stacks/${techStack.id}`, {
        //         onSuccess: () => reset(),
        //         onError: (errors) => {
        //             console.log(errors);
        //         },
        //     });
        // } else {
        // post('/api/skills', {
        //     onSuccess: () => reset(),
        //     onError: (errors) => {
        //         console.log(errors);
        //     },
        // });
        // }
    };
    return (
        <AdminLayout>
            <form
                className="grid gap-2"
                onSubmit={handleSumbit}
            >
                <Card className="grid grid-cols-2 gap-2">
                    <div className="grid gap-2">
                        <Input
                            label="Skill Name"
                            placeholder="Enter Skill Name"
                            value={data.name}
                            onChange={(e) => {
                                setData('name', e.target.value);
                            }}
                        />
                        <Dropdown
                            name="category"
                            value={data.category}
                            label={'Category'}
                            onChange={(e) =>
                                setData('category', e.target.value)
                            }
                            options={category.map((item) => ({
                                label: item.category_name,
                                value: item.id,
                            }))}
                        />
                    </div>

                    <div className="">
                        <div className="text-sm font-semibold">Level</div>
                        <div className="grid px-10">
                            <WakeSlider
                                value={data.percentage}
                                min={5}
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
                                {level.map((lev, index) => (
                                    <div
                                        className="cursor-pointer"
                                        onClick={() => {
                                            setData(
                                                'percentage',
                                                (100 / level.length) *
                                                    (index + 1),
                                            );
                                            setData('level', lev.level_name);
                                        }}
                                    >
                                        <div
                                            className={`h-5 rounded-full border-b-[5px] ${data.level === lev.level_name ? 'border-amber-500' : 'border-slate-100'}`}
                                        ></div>
                                        <div
                                            className={`text-center text-sm ${data.level === lev.level_name ? 'text-amber-500' : 'text-gray-500'}`}
                                        >
                                            {lev.level_name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-between rounded-sm p-2">
                        <div className="w-full text-start">Icon</div>
                        <i className="devicon-react-original text-6xl"></i>
                        <div>{data.name && `react-${data.name}`}</div>
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
                                    onChange={(e) =>
                                        setData('iconType', e.target.value)
                                    }
                                    label="Type"
                                />
                            </div>
                            <Input
                                label="Source"
                                onChange={(e) =>
                                    setData('iconSource', e.target.value)
                                }
                                value={data.iconSource}
                                placeholder="Enter Source"
                            />
                        </div>
                    </div>
                </Card>
                <div className="w-full">
                    <Button
                        type="submit"
                        title={'Tambahkan data'}
                    />
                </div>
            </form>
        </AdminLayout>
    );
}
