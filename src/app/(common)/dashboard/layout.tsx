const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>header</h1>
      {children}
    </div>
  );
};

export default layout;
