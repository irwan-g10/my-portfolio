export default function GithubContributions({ username = 'irwan-g10' }) {
    return (
        <div className="flex w-full justify-center overflow-x-auto pb-2">
            <img
                src={`https://ghchart.rshah.org/${username}`}
                alt="GitHub Contributions Chart"
                className="min-w-[700px] dark:invert"
            />
        </div>
    );
}
