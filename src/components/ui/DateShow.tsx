"use client";

const DateShow = ({
  date,
  className,
}: {
  date: string ;
  className?: string;
}) => {
  return <span className={className}>{date}</span>;
};

export default DateShow;
