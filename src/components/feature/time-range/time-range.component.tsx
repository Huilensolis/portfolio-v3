"use client";

import { TIME_ZONE } from "@/utils/consts";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export function TimeRange({
  your_time_zone_text,
}: {
  your_time_zone_text: string;
}) {
  const [date, setDate] = useState(DateTime.now());

  useEffect(() => {
    const cordobaTime = DateTime.now();
    cordobaTime.setZone(TIME_ZONE);
    setDate(DateTime.now());
  }, []);

  return (
    <div className="relative my-10 not-prose">
      <ul className="grid pb-2 grid-cols-[repeat(7,_minmax(0,_1.25rem))] items-start gap-5 relative">
        {["00", "04", "08", "12", "16", "20", "24"].map((time, i) => (
          <li
            key={i}
            className="flex items-center justify-start text-neutral-400"
          >
            {time}
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-[repeat(25,_minmax(0,_calc(1.25rem/2)))] pl-[calc(((1.25rem/2)-0.12rem)/2)]">
        {Array(25)
          .fill("")
          .map((_, i) => (
            <li key={i} className="flex items-center justify-center">
              <div
                className={`h-4 w-[0.12rem] rounded-sm ${
                  i % 4 === 0 ? "bg-neutral-500" : "bg-neutral-700"
                }`}
              ></div>
            </li>
          ))}
      </ul>
      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: DateTime.now().hour * 10,
        }}
      >
        <div className="relative pt-14 flex items-center justify-center">
          <div className="absolute top-[calc(1.25rem+(0.25rem/2)-1rem)] left-0 w-[1rem] flex items-center justify-center">
            <div className="h-12 w-[0.03rem] bg-orange-600"></div>
          </div>
          <span
            className={`text-orange-600 ${
              DateTime.now().hour > 4 && "-translate-x-[calc(50%-1rem)]"
            }`}
          >
            Cordoba
          </span>
        </div>
      </div>
      {DateTime.now().zone.equals(date.zone) && (
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: DateTime.now().hour * 10,
          }}
        >
          <div className="relative pb-14 flex items-center justify-center">
            <div className="absolute top-[calc(1.25rem+(0.25rem/2))] left-0 w-[1rem] flex items-center justify-center">
              <div className="h-12 w-[0.03rem] bg-yellow-400 rounded-sm"></div>
            </div>
            <span
              className={`w-max text-yellow-400 ${
                DateTime.now().hour > 4 && "-translate-x-[calc(50%-1rem)]"
              }`}
            >
              {your_time_zone_text}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}