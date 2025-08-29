export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">About TechVerse</h1>
        <p className="mt-3 text-muted-foreground">
          TechVerse is a public tech blogging platform with AI-generated daily
          briefs, creator tools, and one-click social sharing. Customize your
          theme, publish fast, and reach your audience.
        </p>
        <p className="mt-3 text-muted-foreground">
          Built with Next.js, designed for speed and clarity in any theme.
        </p>
      </div>
    </main>
  );
}
