import { ReactElement, useEffect, useRef, useState } from "react"

interface ResponseGridProps {
  elements: ReactElement[];
  gap?: number;
  max: number;
}

export default function ResponsiveGrid({ elements, gap = 0, max }: ResponseGridProps) {

  const elementRef = useRef (null)
  const [ columns, setColumns ] = useState<ReactElement[]>([])

  function tryUpdateGrid (parentElement: HTMLElement) {
    const parentWidth = parentElement.offsetWidth;

    let columnNumber: number = Math.ceil(parentWidth / (max + gap));
    columnNumber = Math.max(columnNumber, 1);

    let columnWidth = parentWidth / columnNumber;

    let columns = [];

    for (let i = 1; i <= columnNumber; i++) {
      columns.push(
        <div className = "flex flex-col" style = {{ gap, width: `${ columnWidth - gap / 1.5 }px`}}>
          { getChunk(elements, i - 1, columnNumber).map(el => el) }
        </div>
      );
    }
    // actualizar variable de estado (variable que contiene arreglo de las columnas)
    setColumns(columns);
  }

  function getChunk(arrayElement: ReactElement[], start: number, increment: number): JSX.Element[] {
    const chunk = [];
    for (let i = start; i < arrayElement.length; i += increment) {
      chunk.push(<div key={ i }>{ arrayElement[i] }</div>);
    }
    return chunk;
  }
  
  useEffect (() => {
    if (elementRef?.current == null) return;
    const parent: HTMLElement = elementRef.current;
    tryUpdateGrid(parent);

    const resizeObserver = new ResizeObserver(() => tryUpdateGrid(parent));

    resizeObserver.observe(parent);

    return () => resizeObserver.disconnect();
  }, [elements])

  return (
    <div ref = { elementRef } className = "flex w-full justify-center" style = {{ gap }}>
      { columns.map((column, index) => <div key={ index }>{ column }</div>) }
    </div>
  )
}
