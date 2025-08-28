import { getUserRole } from "@/lib/authz";
import { roleHas } from "@/lib/rbac";

export default async function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await getUserRole();

  if (!roleHas("VIEW_DASHBOARD", role)) {
    return <div className="p-6 text-center text-red-500">Access Denied</div>;
  }

  return children;
}
