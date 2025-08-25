export function WelcomeEmail({
  name = "there",
  siteUrl = "https://your-domain.com",
}: {
  name?: string;
  siteUrl?: string;
}) {
  return (
    <div>
      <div>
        <div className="bg-zinc-950 text-zinc-100 font-sans">
          <table className="w-full" role="presentation">
            <tbody>
              <tr>
                <td className="p-6">
                  <div className="mx-auto w-full max-w-[560px] rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                    <h1 className="text-2xl font-bold">
                      Welcome to TechVerse 👋
                    </h1>
                    <p className="mt-3 text-sm text-zinc-300">
                      Hey {name}, thanks for subscribing! You’ll now get concise
                      tech updates and the daily AI briefing.
                    </p>
                    <ul className="mt-4 list-disc pl-5 text-sm text-zinc-300">
                      <li>📰 Weekly roundup of best posts</li>
                      <li>🤖 Daily AI‑generated tech brief (optional)</li>
                      <li>
                        🎯 Tips on cross‑posting to LinkedIn, X, Instagram
                      </li>
                    </ul>
                    <a
                      href={`${siteUrl}/blog`}
                      className="mt-6 inline-block rounded-xl bg-indigo-600 px-4 py-2 text-white"
                    >
                      Read the latest
                    </a>
                    <p className="mt-6 text-xs text-zinc-400">
                      If this wasn’t you, you can ignore this email or{" "}
                      <a className="underline" href={`${siteUrl}/unsubscribe`}>
                        unsubscribe
                      </a>
                      .
                    </p>
                  </div>
                  <p className="mt-6 text-center text-xs text-zinc-500">
                    © {new Date().getFullYear()} TechVerse • {siteUrl}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
