export function UpdateEmail({ title, excerpt, url, date = new Date() }: { title: string; excerpt: string; url: string; date?: Date }) {
  return (
    <div>
      <div>
        <div className="bg-zinc-950 text-zinc-100 font-sans">
          <table className="w-full" role="presentation">
            <tbody>
              <tr>
                <td className="p-6">
                  <div className="mx-auto w-full max-w-[560px] rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                    <p className="text-xs text-zinc-400">{date.toDateString()}</p>
                    <h1 className="mt-1 text-xl font-bold">{title}</h1>
                    <p className="mt-2 text-sm text-zinc-300">{excerpt}</p>
                    <a href={url} className="mt-4 inline-block rounded-xl bg-fuchsia-600 px-4 py-2 text-white">Read the full update</a>
                    <hr className="my-6 border-zinc-800" />
                    <p className="text-xs text-zinc-400">You are receiving this because you subscribed to TechVerse updates. <a href="{{UNSUBSCRIBE_URL}}" className="underline">Unsubscribe</a></p>
                  </div>
                  <p className="mt-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} TechVerse</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}