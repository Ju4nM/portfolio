import { FaChevronDown, FaGithub } from 'react-icons/fa6'
import { useEffect, useRef, useState } from 'react'
import { RepositoryInterface } from '../interfaces/repository.interface';

export default function RepositoryCard({ data }: { data: RepositoryInterface }) {
  
  const { name, summary, html_url, language } = data;
  
  const [ isExpanded, setExpand ] = useState<boolean>(false);
  const [ textExpanded, setTextExpanded ] = useState<boolean>(false);
  const [ textHeight, setTextHeight ] = useState<string>("auto");
  const textElement = useRef<HTMLDivElement>(null);

  const expand = () => {
    setExpand((prevStatus) => !prevStatus);
    setTextExpanded(true);
  };

  useEffect (() => {
    if (textElement == null) return;

    if (isExpanded) {
      setTextHeight(textElement.current?.scrollHeight + "px");
    } else {
      setTextHeight("24px");
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry.contentRect.height == 24) setTextExpanded(false);
    });

    setTimeout(() => {
      const element = textElement.current as Element;
      if (!(element instanceof Element)) return;
      resizeObserver.observe(element);
    }, 500);

    return () => resizeObserver.disconnect();
  }, [isExpanded]);

  return (
    <div className = "bg-[#1f1f1f] w-full min-w-[200px] max-w-[500px] overflow-hidden p-5 rounded-md space-y-4 transition-all">
      <div className = "flex justify-between items-center">
        <h4 className = "text-xl font-semibold flex-1 overflow-x-hidden text-nowrap text-ellipsis text-white pr-10">{ name }</h4>
        <button onClick = { expand } type="button" className = { `rounded-full hover:bg-customGrayLight outline-none active:bg-[#444] transition-all p-2 ${ isExpanded ? 'rotate-180' : '' }` }>
          <FaChevronDown width={30} height={30} color = "#ffffff"/>
        </button>
      </div>
      <div className = "flex items-center gap-4">
        <FaGithub size = {30} className = "hidden sm:block" color = "#ffffff" />
        <span className = "overflow-hidden text-nowrap text-white text-ellipsis"><a href = { html_url }>{ html_url }</a></span>
      </div>
      <div className = "overflow-hidden transition-all" style = {{ height: textHeight }} ref = { textElement }>
        <p className = { `text-ellipsis text-white overflow-hidden transition-all ${ textExpanded ? '' : 'text-nowrap' }` } >{ summary }</p>
      </div>
      <div className = "overflow-x-auto overflow-y-hidden p-2 pl-0 space-x-2">
        <span className = "bg-[#383838] text-white rounded-full p-1 px-2">{ language }</span>
      </div>
    </div>
  )
}