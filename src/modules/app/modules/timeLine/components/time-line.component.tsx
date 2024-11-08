import TimeLineInterface from "../interfaces/time-line.interface";
import { LandMarkInterface } from "../interfaces/land-mark.interface";
import LandMark from "./land-mark.component";
import { useEffect, useState } from "react";

export default function TimeLine ({ data, extraClasses = "", maxWidthClasses = "max-w-lg" }: { data: TimeLineInterface, extraClasses?: string, maxWidthClasses?: string }) {
	const [ landMarks, setLandMarks ] = useState<LandMarkInterface[]>([]);
	const [ summary, setSummary ] = useState<string>("");
	
	const loadData = () => {
		setLandMarks(prev => data.landMarks ?? prev);
		setSummary(prev => data.summary ?? prev);
	}
	
	useEffect(() => {
		loadData();
	});
	
	return (
		<div>
			<div className = "mb-5">
				<p className = "text-white">{ summary }</p>
			</div>
			<div className = { `border-l-2 relative border-customPurple ${ extraClasses } ${ maxWidthClasses }` }>
				{ !!landMarks && landMarks.map((item: LandMarkInterface, index) => <LandMark key = { index } data = {item} />) }
			</div>
		</div>
	);
}
