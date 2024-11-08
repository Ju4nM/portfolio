import { FaBarsStaggered } from "react-icons/fa6";
import { navItems } from "../constants/nav-items.constant";
import { ReactElement, useRef } from "react";
import { fadeOutAnimation, hideToLeftAnimation } from "../../core/animations/animations";

export default function Navbar({ className = "", startPosition = "sticky" }: { className?: string, startPosition?: string }) {

  const overlayRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const navItemClasses = "transition-all hover:text-customPurple text-white";

  const navLinks: ReactElement[] = navItems.map(item => <a className = { navItemClasses } key = { item.id } href = { `#${ item.id }` }>{ item.text }</a> );

  const onShowSidebarHandler = () => {
    overlayRef.current?.classList.replace("hidden", "flex");
    sideBarRef.current?.classList.replace("hidden", "flex");
  };

  const onHiddenSidebarHandler = () => {
    hideToLeftAnimation(sideBarRef.current);
    fadeOutAnimation(overlayRef.current);
  };

  return (
    <>
      <div className = { `flex p-3 lg:p-5 md:bg-[#00000066] lg:mx-auto bg-transparent z-10 ${ startPosition } xl:fixed left-0 lg:w-fit lg:rounded-full right-0 top-0 lg:top-2 text-lg backdrop-blur-md ${ className }` }>
        <button type = "button" className = "md:hidden" onClick = { onShowSidebarHandler }>
          <FaBarsStaggered size = "30" color = "#ffffff" />
        </button>
        <div className="hidden md:flex w-full justify-evenly lg:gap-20 items-center">
          { navLinks }
        </div>
      </div>

      <div onClick = { onHiddenSidebarHandler } ref = { overlayRef } className = "z-10 fixed top-0 bottom-0 right-0 left-0 hidden fade-in bg-[#00000066]">
        <div ref = { sideBarRef } className = "h-full bg-ground flex-col p-6 text-lg gap-3 hidden from-left-to-right">
          { navLinks }
        </div>
      </div>
    </>
  )

}
