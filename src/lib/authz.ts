import "server-only";
import { currentUser } from "@clerk/nextjs/server";
import { DEFAULT_ROLE, Role, roleHas, Permission } from "./rbac";

export async function getUserRole(): Promise<Role> {
  const user = await currentUser();
  if (!user) return DEFAULT_ROLE;
  // We expect `publicMetadata.role` to be one of Role
  const role = (user.publicMetadata?.role as Role | undefined) ?? DEFAULT_ROLE;
  return role;
}

/** Throws if user missing or lacks permission */
export async function requirePermission(permission: Permission) {
  const user = await currentUser();
  if (!user) throw new Error("UNAUTHENTICATED");
  const role = (user.publicMetadata?.role as Role | undefined) ?? DEFAULT_ROLE;
  if (!roleHas(permission, role)) throw new Error("FORBIDDEN");
  return { user, role };
}
