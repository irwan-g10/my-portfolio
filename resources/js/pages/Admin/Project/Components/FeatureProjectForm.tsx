import FormLayout from './FormLayout';

export default function FeatureProjectForm({ data, setData }) {
    return (
        <FormLayout
            title="Fitur Project"
            addForm
            data={data}
            setData={setData}
        ></FormLayout>
    );
}
