export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-zinc-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <div className="mt-4 space-y-4 text-zinc-300 text-sm leading-6">
          <p>We collect minimal analytics, store your account info securely, and let you export or delete your data at any time.</p>
          <p>Emails: used for updates you opt into (weekly digest, AI daily brief). Unsubscribe anytime.</p>
          <p>Social integrations: we store tokens to post on your behalf only after explicit connect; you can revoke in Settings → Social.</p>
          <p>If you have questions, contact us at support@your-domain.com.</p>
        </div>
      </div>
    </main>
  );
}
