import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { createAnimation } from "../../core/animations/animations";

export default function InfiniteSlider({ children, direction = "left", speed = 10 }: { children: ReactNode[], direction?: "left" | "right", speed?: number }) {

  const sliderRef = useRef<HTMLDivElement>(null);
  const elementsWrapperRef = useRef<HTMLDivElement>(null);

  const [ wrappers, setWrappers ] = useState<ReactNode[]>([]);

  const animation: string = createAnimation(
    "Slider",
    `from { transform: translateX(${ direction == "left" ? "0" : "calc(-100% - 1rem)" }); } to { transform: translateX(${ direction == "left" ? "calc(-100% - 1rem)" : "0" }); }`,
    `${direction}Movement`
  );

  const elementsWrapper = ({ ariaHidden = true, extraClasses = "", ref = undefined, index = undefined }: {ariaHidden?: boolean, extraClasses?: string, ref?: RefObject<HTMLDivElement>, index?: number}): ReactNode => (
    <div key = { index } ref = { ref } aria-hidden = { ariaHidden } className = { `flex gap-4 w-fit ${ extraClasses }` } style = {{ animation: `${ animation } ${ speed }s linear infinite` }}>
      { children }
    </div>
  );

  const tryUpdateSlider = (slider: HTMLElement, wrapper: HTMLElement) => {
    const { width: sliderWidth } = slider.getBoundingClientRect();
    const { width: wrapperWidth } = wrapper.getBoundingClientRect();

    const wrappersCount = Math.ceil(sliderWidth / wrapperWidth) + 1;
    const newWrappers = [];

    for (let i = 0; i < wrappersCount; i++ ) {
      const newWrapper = elementsWrapper({ index: i });
      newWrappers.push(newWrapper);
    }

    setWrappers(newWrappers);
  };

  useEffect(() => {
    if (sliderRef?.current == null || elementsWrapperRef?.current == null) return;
    const slider: HTMLElement = sliderRef.current;
    const wrapper: HTMLElement = elementsWrapperRef.current;
    tryUpdateSlider(slider, wrapper);

    const resizeObserver = new ResizeObserver(() => tryUpdateSlider(slider, wrapper));

    resizeObserver.observe(slider);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref = { sliderRef } className = "overflow-hidden my-3 flex gap-4" style = {{ maskImage: "linear-gradient(to right, transparent, #100E18 30%, #100E18 70%, transparent)" }}>
      { elementsWrapper({ ariaHidden: false, extraClasses: "", ref: elementsWrapperRef }) }
      { wrappers }
    </div>
  );
}
