export type Role = "admin" | "manager" | "member";

export const DEFAULT_ROLE: Role = "member";

export const PERMISSIONS: Record<string, Role[]> = {
  VIEW_DASHBOARD: ["member", "manager", "admin"],
  MANAGE_TEAM: ["manager", "admin"],
  ACCESS_ADMIN: ["admin"],
};

export type Permission = keyof typeof PERMISSIONS;

export function roleHas(permission: Permission, role: Role | undefined) {
  const r = role ?? DEFAULT_ROLE;
  return PERMISSIONS[permission].includes(r);
}
