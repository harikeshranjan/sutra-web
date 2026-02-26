'use client';

import { docsSidebarList } from "@/utils/docs-sidebar-list"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";

function DocsSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="w-64 p-4 backdrop-blur-md bg-opacity-30 border rounded-lg shadow-lg fixed z-99 top-18 left-0 h-calc(100vh - 2rem) m-4 overflow-y-auto">
      {
        docsSidebarList.map(section => (
          <div key={section.id} className="mb-6">
            <h2 className="text-base font-semibold">{section.heading}</h2>
            <ul className="mt-2 ml-1.5">
              {
                section.items.map(item => (
                  <li key={item.id} onClick={() => router.push(item.href)} className={`border-l hover:border-blue-500 pl-4 py-2 hover:bg-neutral-50 hover:dark:bg-neutral-800 rounded-r-md transition-colors duration-200 cursor-pointer ${isActive(item.href) ? 'bg-neutral-50 dark:bg-neutral-800 border-l border-blue-500' : ''}`}>
                    <p className={`text-sm transition-colors duration-200 ${isActive(item.href) ? 'text-blue-500' : 'text-neutral-700 dark:text-neutral-300 hover:text-blue-500'}`}>
                      {item.title}
                    </p>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </aside>
  )
}

export default DocsSidebar