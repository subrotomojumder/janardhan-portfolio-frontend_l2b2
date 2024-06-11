type TBlogDetailsProps = {
  params: {
    [index: string]: unknown;
  };
};

const BlogDetails = async ({ params }: TBlogDetailsProps) => {
  const { blogId } = params;
  console.log(blogId);
  // const res = await fetch(`${process.env.SERVER_URL}/projects/${projectId}`);
  // const { data: project } = await res.json();
  return (
    <div className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-20 space-y-16 relative">
      <div className="flex justify-center">
        <h1 className="text-4xl ">Blog details page Coming soon!</h1>
      </div>
    </div>
  );
};

export default BlogDetails;
