import Rating from "@/components/ui/Rating";
import ProjectDetailsImage from "@/components/ui/projectDetails/projectDetailsImage";
import { Car, Repeat1 } from "lucide-react";

type TProjectDetailsProps = {
  params: {
    [index: string]: unknown;
  };
};
const ProductDetails = async ({ params }: TProjectDetailsProps) => {
  const { projectId } = params;
  const res = await fetch(`${process.env.SERVER_URL}/projects/${projectId}`);
  const { data: project } = await res.json();
  console.log(project);
  return (
    <div className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-20 space-y-16 relative">
      <div className="py-4">
        <ProjectDetailsImage images={project.images} />
        <div className="p-2 space-y-7">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <div className="flex justify-start items-center gap-3">
              <h5 className="text-xl font-bold">${project.projectType}</h5>
              <div className="h-3.5 w-0.5 bg-gray-400" />
              <Rating rate={5} size={24} />
              <div className="h-3.5 w-0.5 bg-gray-400" />
              <span className="text-sm text-green-500">(43 Reviews)</span>
            </div>
          </div>
          <div className="h-[1.5px] bg-gray-200" />
          <p className="text-sm font-medium text-gray-600">{project.des}</p>
          <ul className="space-y-1 list-disc pl-6 text-sm font-medium text-gray-700">
            {project.desBullet}
          </ul>
          <div className="space-y-2 text-sm font-medium text-gray-700">
            <div className="flex justify-start gap-3">
              <Car />
              <span>Delivers in: 3-7 Working Days Shipping & Return</span>
            </div>
            <div className="flex justify-start gap-3">
              <Repeat1 />
              <span>Delivers in: 3-7 Working Days Shipping & Return</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5 my-8">
        <h5 className="text-xl font-semibold text-gray-700">Description:</h5>
        <p className="text-sm font-medium text-gray-600">
          Welcome to our exclusive Baby Care Flash Sale! Explore unbeatable
          discounts on a wide range of essential products for your little one.
          From diapers and formula to toys and clothing, find everything you
          need at incredible prices. Act fast – this limited-time offer wont
          last long! Simply browse our selection, add your favorite items to
          your cart, and proceed to checkout to secure your savings. Dont miss
          this opportunity to stock up on high-quality baby essentials while
          enjoying significant discounts. Hurry, shop now and give your baby the
          care they deserve at prices youll love!
        </p>
        <ul className="space-y-2 list-disc pl-5 text-sm font-medium text-gray-700">
          <li>
            Welcome to our Baby Care Flash Sale! Discover incredible discounts
            on essential products for your little one. Limited time offer. Stock
            up now on diapers, formula, toys, and more. Dont miss out!
          </li>
          <li>Create a safe environment by baby-proofing your home.</li>
          <li>
            Explore our Baby Care Flash Sale for exclusive discounts on
            essential products! Limited time offer. Stock up on diapers,
            formula, toys, and more.
          </li>
          <li>
            Stock up on diapers, formula, clothing, and more while supplies last
          </li>
        </ul>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const res = await fetch(`${process.env.SERVER_URL}/projects`);
  const { data } = await res.json();
  return data.map((project: any) => ({
    projectId: project._id,
  }));
}

export default ProductDetails;
