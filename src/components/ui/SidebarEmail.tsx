"use client";

const SidebarEmail = () => {
  return (
    <p
      onClick={() =>
        navigator.clipboard.writeText("janardhanmajumder03@gmail.com")
      }
      className="mt-0.5 mb-4 text-xs text-slate-600 hover:text-blue-800 font-semibold tracking-tighter cursor-pointer "
    >
      janardhanmajumder03@gmail.com
    </p>
  );
};

export default SidebarEmail;
