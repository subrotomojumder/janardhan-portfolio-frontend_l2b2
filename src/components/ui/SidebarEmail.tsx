"use client";

const SidebarEmail = () => {
  const email = "janardhan.md03@gmail.com";
  return (
    <p
      onClick={() => navigator.clipboard.writeText(email)}
      className="mt-0.5 mb-4 text-xs text-slate-600 hover:text-blue-800 font-semibold tracking-tighter cursor-pointer "
    >
      {email}
    </p>
  );
};

export default SidebarEmail;
