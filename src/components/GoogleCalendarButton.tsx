import React from "react";
type Props = {
  children: React.ReactNode;
};
const GoogleCalendarButton = ({ children }: Props) => {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("승범 & 소연 결혼");
    const description = encodeURIComponent("수원 노블레스 컨벤션 7층");
    const location = encodeURIComponent(
      "경기도 수원시 팔달구 우만동 팔달문로 128"
    );
    const startTime = "20240601T060000Z"; // 예시: 2023년 4월 30일 오후 12시
    const endTime = "20240601T073000Z"; // 예시: 2023년 4월 30일 오후 2시
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${description}&location=${location}&sf=true&output=xml`;

    window.open(url, "_blank");
  };

  return (
    <>
      <button
        className="w-full text-center  text-black font-bold  rounded transition duration-300 ease-in-out"
        onClick={handleAddToCalendar}
      >
        {children}
      </button>
    </>
  );
};

export default GoogleCalendarButton;
