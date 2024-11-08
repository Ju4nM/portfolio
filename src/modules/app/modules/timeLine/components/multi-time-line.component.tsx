import { useEffect, useState } from "react";
import TimeLineInterface from "../interfaces/time-line.interface";
import TimeLine from "./time-line.component";

export default function MultiTimeLine({ data = [] }: { data: TimeLineInterface[] }) {
  
  const [ currentTimeLine, setTimeLine ] = useState<TimeLineInterface>(data[0]);

  const onTabClickHandler = (timeLine: TimeLineInterface) => setTimeLine(timeLine);

  useEffect(() => {
    console.log(data);
    setTimeLine(data[0]);
  }, [ data ])

  return (
    <div className = "w-full">
      <div className = "w-full flex mb-3">
        { data.map((item, index) => /* tabs */
          <button onClick = { () => onTabClickHandler(item) } key = { index } className = { `overflow-hidden flex-1 border-b-2 transition-all outline-none first:rounded-l-md last:rounded-r-md ${ currentTimeLine == item ? "border-customPurple bg-[#784bd911] text-lg font-semibold" : "border-[#00000033] hover:border-customPurple" } bg-[#00000033] p-3` }>
            <span className = "text-nowrap text-white text-ellipsis">{ item.title }</span>
          </button>
        ) }
      </div>
      { !!currentTimeLine && <TimeLine data = { currentTimeLine } maxWidthClasses = "max-w-2xl" />}
    </div>
  );
}
