import { cn } from "@/utils";
import Link from "next/link";

type NavItem = {
  title: string;
  href: string;
  sections: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "Selected Works",
    href: "#selected-works",
    sections: [
      {
        title: "Snack Platform",
        href: "#project-1",
        sections: [],
      },
      {
        title: "Velocity Payments",
        href: "#project-2",
        sections: [],
      },
      {
        title: "CXMappers",
        href: "#project-3",
        sections: [],
      },
      {
        title: "MongoDB Workbooks",
        href: "#project-4",
        sections: [],
      },
      {
        title: "Tafara Care Services",
        href: "#project-5",
        sections: [],
      },
    ],
  },
  {
    title: "Services",
    href: "#services",
    sections: [],
  },
  {
    title: "Process",
    href: "#process",
    sections: [],
  },
  {
    title: "Work with Us",
    href: "#work-with-us",
    sections: [],
  },
  {
    title: "Testimonials",
    href: "#testimonials",
    sections: [],
  },
  {
    title: "Conclusion",
    href: "#conclusion",
    sections: [],
  },
];

const FloatingNav = ({ activeSection }: { activeSection: string }) => {
  return (
    <ul className="space-y-4">
      {navItems.map((item) => (
        <li className="flex flex-col" key={item.title}>
          <Link
            href={item.href}
            className={cn(
              "size-full rounded-lg transition-all duration-200 flex items-center",
              activeSection === item.href
                ? "text-zinc-900"
                : "hover:text-zinc-900 text-zinc-400",
              item.sections.length > 0 ? "mb-2" : "",
            )}
          >
            <span
              className={cn(
                "rounded-full transition-all duration-200 size-2 mr-2",
                activeSection === item.href ? "bg-zinc-900 " : "bg-transparent",
              )}
            />
            {item.title}
          </Link>
          {item.sections.length > 0 && (
            <ul className="space-y-2 ml-4 mb-4">
              {item.sections.map((section) => (
                <li key={section.title}>
                  <Link href={section.href} className={cn("text-sm size-full")}>
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FloatingNav;
