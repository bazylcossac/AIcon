export default function Home() {
  return (
    <div className="mt-2">
      <nav className="flex justify-between items-center md:mx-24 mx-10 ">
        <div className="flex flex-col leading-0">
          <h1 className="text-2xl font-extrabold">
            Gen<span className="text-blue-600">AI</span>
          </h1>
          <p className="font-bold text-xs -mt-2">AI generator</p>
        </div>
        <ul className="hidden text-sm gap-8 text-neutral-400 font-semibold [&>*]:hover:cursor-pointer [&>*]:hover:text-neutral-200 transition  md:flex">
          <button>Features</button>
          <button>Pricing</button>
          <button>Dashboard</button>
          <button>Creators</button>
        </ul>

        <div className="flex gap-4">
          <button className="text-sm text-neutral-400 cursor-pointer hover:text-neutral-200 transition">
            Login
          </button>
          <button className="text-xs bg-blue-500 py-2 px-3 rounded-2xl font-bold  hover:bg-blue-600 transition cursor-pointer">
            Get started now
          </button>
        </div>
      </nav>
    </div>
  );
}
