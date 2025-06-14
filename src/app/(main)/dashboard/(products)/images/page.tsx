import Link from "next/link";
import { GrStorage } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";
import ImagesForm from "@/components/images/ImagesForm";
import ImagesList from "@/components/images/ImagesList";
import { Suspense } from "react";
import { createTrpcServer } from "@/trpc/trpcServer";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function ImagesPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/");
  }
  const trpcServer = await createTrpcServer({ session });
  const images = await trpcServer.getUserImages(session?.user?.id);

  return (
    <div className=" w-full h-full">
      <div className="w-full h-full">
        <div className="flex items-center justify-between py-4 border-b-1 border-black px-4 text-white/70">
          <p className="text-lg font-bold">Images</p>
          <div className="flex flex-row items-center gap-4 [&>*]:text-white/70 [&>*]:hover:text-white [&>*]:cursor-pointer transition">
            <div className="flex flex-row items-center gap-1 ">
              <MdOutlineCleaningServices className="text-sm" />
              <p className="text-xs">Clean</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <GrStorage className="text-sm" />
              <Link href="/dashboard/storage" className="text-xs ">
                Storage
              </Link>
            </div>
          </div>
        </div>
        <div className=" h-full overflow-y-auto flex flex-col">
          <Suspense>
            <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2 px-2">
              <ImagesList images={images} />
            </div>

            <ImagesForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ImagesPage;
