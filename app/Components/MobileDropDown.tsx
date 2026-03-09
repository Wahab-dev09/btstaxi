import React from 'react'
import { navLinks } from './NavData'; // ✅ shared import
import Button from './Button';
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";


const MobileDropDown = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex flex-col px-2 pb-4 justify-center lg:hidden text-white font-plus-jakarta tracking-tight text-base font-medium 2xl:text-lg">
      {navLinks.slice(0, 4).map((link) => (
        <Link
          key={link.name}
          href={`/#${link.href.replace("#", "")}`}
          onClick={async (e) => {
            e.preventDefault();

            if (pathname === "/") {
              // already on home → smooth scroll immediately
              const el = document.getElementById(link.href.replace("#", ""));
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({ top, behavior: "smooth" });
              }
            } else {
              // on another page → navigate first
              router.push(`/#${link.href.replace("#", "")}`);
              // wait for next tick for element to exist
              setTimeout(() => {
                const el = document.getElementById(link.href.replace("#", ""));
                if (el) {
                  const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }, 100); // adjust delay if needed
            }
          }}
          className="py-4 h-full font-normal"
        >
          {link.name}
        </Link>
      ))}
      <div className='mt-3'>
        <Button />
      </div>
    </div>
  )
}

export default MobileDropDown