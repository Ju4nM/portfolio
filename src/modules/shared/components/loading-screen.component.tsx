import { useEffect, useState } from "react";
import PacmanLoader from "./pacman-loader.component";

export default function LoadingScreen({ isVisible = false }: { isVisible: boolean }) {
  const [ display, setDisplay ] = useState<string>("hidden");

  useEffect (() => {
    if (isVisible) {
      setDisplay("");
      return;
    }

    if (display == "hidden") return;

    setDisplay("opacity-0");
    setTimeout(() => {
      setDisplay("hidden");
    }, 300);

  }, [isVisible]);
  return (
    <div className = { `fixed top-0 bottom-0 transition-all left-0 duration-300 right-0 bg-[#0a0a0a73] backdrop-blur-lg z-50 overflow-hidden animate-[fade-in_0.2s_ease-out] ${ display }` }>
      <div className = "h-full w-full relative grid place-items-center backdrop-blur-lg">
        <div className = "flex justify-center items-center flex-col">
          <PacmanLoader size = { 30 } />
          <span className = "text-[#ffffff8d]">Cargando ...</span>
        </div>
      </div>
    </div>
  )
}
