import { LandMarkInterface } from "../interfaces/land-mark.interface";

export default function LandMark ({ data }: { data: LandMarkInterface }) {

  const dateParsed: string = new Date(data.date).toLocaleDateString("es", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })

  return (
    <div className = "mb-10 ms-4">
      <div className = "-start-[6.6px] mt-1.5 size-3 bg-[#8854f7] absolute rounded-full"></div> {/* puntito en la linea */}
      <div><span className = "text-ellipsis text-white text-nowrap">{ dateParsed }</span></div> {/* fecha */}
      <div><h2 className = "text-xl font-semibold text-white text-nowrap text-ellipsis">{ data.title }</h2></div> {/* titulo */}
      {/* <div className = "max-h-20 overflow-hidden"><p className = "text-[#ccc] overflow-hidden text-ellipsis line-clamp-3"> { data.description }</p></div> description */}
      <div><p className = "text-[#ccc]">{ data.description }</p></div>
    </div>
  )
}

