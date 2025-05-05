import Image from "next/image";
import dashboardImage from "../../public/images/main-page.png";
import ttsImage from "../../public/images/tts-image.png";
import promptImage from "../../public/images/prompt-image.png";
export default function Home() {
  return (
    <div className="mt-2">
      <nav className="flex justify-between items-center md:px-24 px-10 py-2 fixed top-0 right-0 left-0 z-50 backdrop-blur-lg bg-[#0b0b0b]/85  transition">
        <div className="flex flex-col leading-0">
          <h1 className="text-2xl font-extrabold">
            Gen<span className="text-blue-600">AI</span>
          </h1>
          <p className="font-bold text-xs -mt-2">AI generator</p>
        </div>
        <ul className="hidden text-sm gap-8 text-neutral-400 font-semibold [&>*]:hover:cursor-pointer [&>*]:hover:text-neutral-200 transition md:flex ">
          <button>Features</button>
          <button>Pricing</button>
          <button>Dashboard</button>
          <button>Creators</button>
        </ul>

        <div className="flex gap-4">
          <button className="text-xs bg-blue-500  p-2 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer">
            Get started now
          </button>
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center px-4 gap-30">
        <section className="flex flex-col items-center justify-center">
          <p className="text-6xl font-extrabold mt-24 max-w-[900px] text-center flex">
            Create Amazing And Creative Stuff Using OpenAI Models
          </p>
          <p className="max-w-[500px] text-center mt-4 font-semibold text-white/80">
            Generate images, icons, translate text to speech. So much to do in
            one place.
          </p>
          <button className="text-xs bg-blue-500  p-2 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer mt-4">
            Get started now
          </button>

          <Image
            src={dashboardImage}
            alt="main dashboard image"
            width={1000}
            height={800}
            quality={100}
            className="border-8 border-neutral-700 rounded-xl mt-8"
          />
        </section>
        <section className="flex flex-col items-center justify-center ">
          <p className="text-3xl font-extrabold max-w-[900px] text-center flex">
            Tired of jumping from site to site to just generate something?
          </p>
          <p className="font-bold mt-4">
            With Gen<span className="text-blue-600">AI</span> you can:
          </p>
          <ul className="mt-4 font-semibold bg-green-800/10 p-10 rounded-md border-1 border-green-950">
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✔</span>
              <p>Generate images and icons in one place</p>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✔</span>
              <p>Translate text to speech using AI models in seconds</p>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <p>Store your generated stuff in one place</p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col items-center justify-center gap-20">
          <div className="flex flex-col items-center mb-20">
            <p className="text-blue-500 font-bold text-xs">FEATURES</p>
            <p className="text-4xl font-extrabold max-w-[500px] text-center">
              All Your Imaginations, Effortlessly Within Reach{" "}
            </p>
          </div>

          <div className="flex items-center gap-10">
            <Image
              src={dashboardImage}
              alt="main dashboard image"
              width={700}
              height={500}
              quality={100}
              className="border-8 border-neutral-700 rounded-xl mt-8"
            />
            <div className="max-w-[400px]">
              <p className="text-blue-500 font-bold">Your Plan</p>
              <p className="text-2xl font-bold">
                Streamlined Project Oversight
              </p>
              <p className="text-white/30 mt-2">
                Embrace the ease of navigation with our dashboard, your
                strategic command center for instant access to priority tasks,
                resources and project plan.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="max-w-[400px]">
              <p className="text-blue-500 font-bold">Work Items</p>
              <p className="text-2xl font-bold">Effortless Task Tracking</p>
              <p className="text-white/30 mt-2">
                Enhance your workflow with a user-friendly platform designed for
                quick task addition and streamlined prioritization, keeping your
                team's objectives in clear focus..
              </p>
            </div>
            <Image
              src={ttsImage}
              alt="main dashboard image"
              width={700}
              height={500}
              quality={100}
              className="border-8 border-neutral-700 rounded-xl mt-8"
            />
          </div>

          <div className="flex items-center gap-10">
            <Image
              src={dashboardImage}
              alt="main dashboard image"
              width={700}
              height={500}
              quality={100}
              className="border-8 border-neutral-700 rounded-xl mt-8"
            />
            <div className="max-w-[400px]">
              <p className="text-blue-500 font-bold">Finances</p>
              <p className="text-2xl font-bold">
                Financial Overview at Your Fingertips
              </p>
              <p className="text-white/30 mt-2">
                Keep your financial health in check with a clear, concise view
                of profits, revenues, and expenses, all updated in real-time for
                informed decision-making.
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center">
          <p className="text-6xl font-extrabold mt-24 max-w-[900px] text-center flex">
            Create Amazing And Creative Stuff Using AI Models
          </p>
          <p className="max-w-[500px] text-center mt-4 font-semibold text-white/80">
            Generate images, icons, translate text to speech. So much to do in
            one place.
          </p>
          <button className="text-xs bg-blue-500 py-3 px-6 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer mt-8">
            Get started now
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-6xl font-extrabold mt-24 max-w-[900px] text-center flex">
            Create Amazing And Creative Stuff Using AI Models
          </p>
          <p className="max-w-[500px] text-center mt-4 font-semibold text-white/80">
            Generate images, icons, translate text to speech. So much to do in
            one place.
          </p>
          <button className="text-xs bg-blue-500 py-3 px-6 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer mt-8">
            Get started now
          </button>
        </div>
      </main>
    </div>
  );
}
