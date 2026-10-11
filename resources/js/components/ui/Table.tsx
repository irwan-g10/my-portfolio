export default function Table() {
    return (
        <div className=" text-slate-950">
            <div className="flex">
                <div className="">filter input</div>
                <div className="">views</div>
            </div>
            <table className="bg-slate-100/20 backdrop-blur-xs text-slate-100">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure sapiente commodi quaerat suscipit magnam voluptate quia consequatur doloribus repudiandae.</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque quam culpa asperiores nisi esse sapiente voluptatibus pariatur rerum enim debitis vero modi eos, velit rem deleniti facilis excepturi doloribus!</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>yer</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>yer</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}