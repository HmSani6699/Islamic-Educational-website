import React from "react";

const Calendar = ({ monthData }) => {
  const { month, present_date, absent_date } = monthData;

  const monthMap = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const year = 2025;
  const monthIndex = monthMap[month.toLowerCase()];
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();

  const presentDates = present_date.map((item) => item.date);
  const absentDates = absent_date.map((item) => item.date);

  const calendarDays = Array.from(
    { length: daysInMonth + firstDayOfMonth },
    (_, i) => (i < firstDayOfMonth ? null : i - firstDayOfMonth + 1)
  );

  const getDayBgColor = (date) => {
    if (presentDates.includes(date)) return "bg-green-200 hover:bg-green-300";
    if (absentDates.includes(date)) return "bg-red-200 hover:bg-red-300";
    return "hover:bg-gray-200";
  };

  return (
    <div className="max-w-lg mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-[25px] font-semibold text-center mb-4 capitalize">
        {month}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {/* সপ্তাহের দিন */}
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div
            key={day}
            className={`font-bold text-center ${
              day === "FRI" ? "text-red-600" : "text-gray-700"
            }`}
          >
            {day}
          </div>
        ))}

        {/* ক্যালেন্ডারের দিন */}
        {calendarDays.map((day, index) => {
          if (day === null) {
            return <div key={index} className="p-2"></div>;
          }

          const date = `${String(monthIndex + 1).padStart(2, "0")}/${String(
            day
          ).padStart(2, "0")}/${year}`;
          const bgColor = getDayBgColor(date);

          const isFriday = new Date(year, monthIndex, day).getDay() === 5;

          return (
            <div
              key={index}
              className={`rounded-full border text-center p-2 ${bgColor} ${
                isFriday ? "text-red-600 font-bold" : "text-gray-800"
              }`}
              title={
                presentDates.includes(date)
                  ? "Present"
                  : absentDates.includes(date)
                  ? "Absent"
                  : "No Data"
              }
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
