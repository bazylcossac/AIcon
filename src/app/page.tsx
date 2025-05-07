import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { signIn, auth, signOut } from "@/auth";
import { cn } from "@/lib/utils";
import { cleanupSession } from "@/actions/actions";

export default async function Home() {
  const user = await auth();

  // get credits from db
  // primise .all
  const handleSignIn = async () => {
    "use server";
    await signIn("google", { redirectTo: "/dashboard" });
  };

  const handleSignOut = async () => {
    "use server";
    if (user) {
      await cleanupSession(user.sessionToken);
      await signOut();
    }
  };

  return (
    <div className="mt-2">
      <nav className="flex justify-between items-center md:px-24 px-10 py-2 fixed top-0 right-0 left-0 z-50 backdrop-blur-lg bg-[#0b0b0b]/85 transition ">
        <div className="flex flex-col leading-0">
          <h1 className="text-2xl font-extrabold">
            <span className="text-blue-600">AI</span>con
          </h1>
          <p className="font-bold text-xs -mt-2">AI generator</p>
        </div>
        <ul className="hidden text-sm gap-8 text-neutral-400 font-semibold  transition md:flex">
          <a
            href="#features"
            className="hover:text-neutral-200 hover:cursor-pointer"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-neutral-200 hover:cursor-pointer"
          >
            Pricing
          </a>

          <Link
            href="dashboard"
            className={cn("hover:text-neutral-200 cursor-not-allowed", {
              "text-neutral-700 hover:text-neutral-700 cursor-not-allowed":
                !user,
              "cursor-pointer": user,
            })}
          >
            Dashboard
          </Link>
          <a
            href="#creators"
            className="hover:text-neutral-200 hover:cursor-pointer"
          >
            Creators
          </a>
        </ul>

        <div className="flex gap-4 ">
          {!user ? (
            <button
              className="text-xs bg-blue-500  p-2 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer fixed right-10 top-3"
              onClick={handleSignIn}
            >
              Get started now
            </button>
          ) : (
            <div className="flex items-center gap-2 fixed right-10 top-3">
              <button
                className="hover:bg-blue-800 transition bg-blue-500 rounded-md cursor-pointer"
                onClick={handleSignOut}
              >
                <p className="p-2 -md text-xs font-bold">Sign Out</p>
              </button>
              <Image
                src={user.user!.image as string}
                alt="logged user image"
                width={30}
                height={30}
                quality={100}
                className="rounded-full hover:brightness-80 transition cursor-pointer"
              />
            </div>
          )}
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center px-4 gap-30">
        <section className="flex flex-col items-center justify-center">
          <p className="text-4xl md:text-6xl font-extrabold mt-24 max-w-[900px] text-center flex">
            Create Amazing And Creative Stuff Using OpenAI Models
          </p>
          <p className="max-w-[500px] text-center mt-4 font-semibold text-white/80">
            Generate images, icons, translate text to speech. So much to do in
            one place.
          </p>
          {!user ? (
            <button
              className="text-xs bg-blue-500  p-2 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer mt-4"
              onClick={handleSignIn}
            >
              Get started now
            </button>
          ) : (
            <Link
              href="/dashboard"
              className="text-xs bg-blue-500  p-2 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer mt-4"
            >
              Go to Dashboard
            </Link>
          )}

          <Image
            src="/images/main-page.png"
            alt="main dashboard image"
            width={1200}
            height={1200}
            quality={100}
            priority
            className="border-8 border-neutral-700 rounded-xl mt-8"
          />
        </section>
        <section className="flex flex-col items-center justify-center ">
          <p className="text-2xl md:text-3xl font-extrabold max-w-[900px] text-center flex">
            Tired of jumping from site to site to just generate something?
          </p>
          <p className="font-bold mt-4 text-sm ">
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
        <div id="features"></div>
        <section className="flex flex-col items-center justify-center gap-20">
          <div className="flex flex-col items-center md:mb-20">
            <p className="text-blue-500 font-bold text-xs">FEATURES</p>
            <p className="text-2xl md:text-4xl font-extrabold max-w-[500px] text-center">
              All Your Imaginations, Effortlessly Within Reach{" "}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <Image
              src="/images/main-page.png"
              alt="main dashboard image"
              width={700}
              height={500}
              quality={100}
              priority
              className="border-8 border-neutral-700 rounded-xl mt-8"
            />
            <div className="md:max-w-[400px]">
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

          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="max-w-[400px]">
              <p className="text-blue-500 font-bold">Work Items</p>
              <p className="text-2xl font-bold">Effortless Task Tracking</p>
              <p className="text-white/30 mt-2">
                Enhance your workflow with a user-friendly platform designed for
                quick task addition and streamlined prioritization, keeping your
                team&apos;s objectives in clear focus..
              </p>
            </div>
            <Image
              src="/images/tts-image.png"
              alt="main dashboard image"
              width={700}
              height={500}
              quality={100}
              className="border-8 border-neutral-700 rounded-xl mt-8"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <Image
              src="/images/prompt-image.png"
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
        <div id="pricing"></div>
        <section className="flex flex-col items-center justify-center md:mb-20">
          <div className="flex flex-col items-center mb-20">
            <p className="text-blue-500 font-bold text-xs">PRICING</p>
            <p className="text-4xl font-extrabold max-w-[500px] text-center">
              Start generating today!
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-center gap-10">
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center   rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-gray-800 text-white">
                <h3 className="mb-4 text-2xl font-semibold">Basic Plan</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Basic plan that allows you to test our application.
                </p>
                <div className="mt-10">
                  <p className="text-5xl font-extrabold mb-8">Free</p>

                  <ul className="flex flex-col items-start gap-4">
                    <li>✔ Free first generation</li>
                    <li>✔ Maximum 20 items in storage</li>
                    <li>✔ Acces to Finances</li>
                    <li>✔ Possiblity to buy more Tokens</li>
                  </ul>
                </div>
                <div className="flex justify-center mt-8 ">
                  <button className="text-xs bg-white/30 px-6 py-3 rounded-2xl font-bold  ">
                    In use
                  </button>
                </div>
              </div>

              <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-blue-950/20 text-white">
                <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Explore all capabilities and power of our app
                </p>

                <div className="mt-10">
                  <p className="text-5xl font-extrabold mb-8">$20</p>

                  <ul className="flex flex-col items-start gap-4">
                    <li>✔ Free 100 Tokens</li>
                    <li>✔ No Storage limit</li>
                    <li>✔ Acces to Finances</li>
                    <li>✔ Discount for Tokens</li>
                  </ul>
                </div>
                <div className="flex justify-center mt-8 ">
                  {!user ? (
                    <button
                      className="text-xs bg-blue-500 px-6 py-3 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer"
                      onClick={handleSignIn}
                    >
                      Sign in & Buy
                    </button>
                  ) : (
                    // logged in => buy
                    // already bought => go to dashboard
                    <Link
                      href="/dashboard"
                      className="text-xs bg-blue-500 px-6 py-3 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer"
                    >
                      Go to Dashboard
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="creators"></div>
        <section>
          <div className="flex flex-col items-center mb-20">
            <p className="text-blue-500 font-bold text-xs">CREATORS</p>

            <div className="mt-10 flex justify-center">
              <Image
                src="/images/myimage.png"
                alt="creator image - MichaŁ Strojny"
                className="size-24 rounded-full"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-4 text-lg">Michał Strojny</p>
            <div className="flex gap-4 justify-center mt-4 text-3xl">
              <a href="https://github.com/bazylcossac" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mstrojny/" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>

        <footer className="w-full border-t border-white/20 md:p-10 py-5 ">
          <div className="flex flex-row items-center md:px-10 md:justify-between justify-center">
            <p className="text-xs text-white/50 text-center ">
              Copyright @ 2025 AIcon. All Rights Reserved.
            </p>
            <div className="md:flex flex-col leading-0 hidden">
              <h1 className="text-2xl font-extrabold">
                <span className="text-blue-600">AI</span>Con
              </h1>
              <p className="font-bold text-xs -mt-2">AI generator</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
