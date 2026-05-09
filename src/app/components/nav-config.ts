import { navItems } from "./data";

export { navItems };

export function navHref(item: string) {
  if (item === "Info") return "/";
  if (item === "Projects") return "/projects";
  if (item === "Experiments") return "/experiments";
  if (item === "Articles") return "/articles";
  return "#";
}

export function isNavActive(item: string, pathname: string | null) {
  if (!pathname) return false;
  if (item === "Info") return pathname === "/";
  if (item === "Projects")
    return pathname === "/projects" || pathname.startsWith("/projects/");
  if (item === "Experiments")
    return pathname === "/experiments" || pathname.startsWith("/experiments/");
  if (item === "Articles")
    return pathname === "/articles" || pathname.startsWith("/articles/");
  return false;
}
