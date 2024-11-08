import { useEffect, useState } from "react";
import MultiTimeLine from "../../app/modules/timeLine/components/multi-time-line.component";
import TimeLineInterface from "../../app/modules/timeLine/interfaces/time-line.interface";
import { useLanding } from "../hooks/use-landing.hook";

export default function Experience() {
	const { landingData } = useLanding();
	const currentTimeLines: TimeLineInterface[] = landingData?.timeLines ?? [];
	const [ timeLines, setTimeLines] = useState<TimeLineInterface[]>([]);

	const loadTimeLines = () => {
		setTimeLines(currentTimeLines);
	}

	useEffect(() => {
		loadTimeLines();
	}, [ landingData ]);

  return (
    <div id = "xp" className = "landing-section">
			<h3 className = "text-xl text-white pb-4 font-semibold">Mi experiencia</h3>
      <MultiTimeLine data = { timeLines } />
    </div>
  )
}
