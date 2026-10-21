import FormLayout from './FormLayout';

export default function FeatureProjectForm() {
    const dummyFeatures = [
        'using oauth2 auth',
        'implement login page',
        'integration payment gateway',
        'dashboard analytics view',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum velit quo? Mollitia numquam est libero aut dignissimos totam ad sed. Tempore repellendus omnis dignissimos, quam corporis eligendi perspiciatis asperiores?',
        'dark mode support',
    ];
    return (
        <FormLayout
            title="Fitur Project"
            data={dummyFeatures}
        ></FormLayout>
    );
}
