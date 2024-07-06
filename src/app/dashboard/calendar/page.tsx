"use client"
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipeDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-Ex", {
    weekday: "short",
    day: "numeric",
    month: "short"
  })
  return (
    <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={date => date.getDay() == 0 || date.getDay() == 5}
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipeDates}
        className="rounded-md border shadow"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />

      <div>
        <h1>Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{multipleDates?.map(date => date.toLocaleDateString()).join(" , ")}</p>
      </div>
    </div>
  )
}
