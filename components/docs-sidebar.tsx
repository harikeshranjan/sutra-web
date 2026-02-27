'use client';

import { docsSidebarList } from "@/utils/docs-sidebar-list"
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

function DocsSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => setShowSidebar(prev => !prev);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    }

    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <div className="relative" ref={containerRef}>
      <aside
        className={`w-64 p-4 backdrop-blur-md bg-opacity-30 border rounded-lg shadow-lg fixed z-99 top-16 left-0 h-[calc(100vh-10rem)] m-4 overflow-y-auto transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-100'} md:translate-x-0`}
        ref={sidebarRef}
      >
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

      {/* Hamburger Menu */}
      <div
        className="md:hidden fixed top-20 right-4 z-100 backdrop-blur-lg bg-opacity-30 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          toggleSidebar();
        }}
      >
        <button className="p-2 text-gray-600 dark:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default DocsSidebar