export default function GithubContributions({ username = 'irwan-g10' }) {
    return (
        <div className="">
            <img
                src={`https://ghchart.rshah.org/${username}`}
                alt="GitHub Contributions Chart"
                className=""
            />
        </div>
    );
}
