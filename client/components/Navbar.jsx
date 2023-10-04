import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link className="font-bold text-xl text-red-400" href={"/"}>
        Snip
      </Link>
      <button className="border-spacing-4 hover:bg-red-400  px-5 py-1 rounded-md">
        Login
      </button>
    </div>
  );
};

export default Navbar;
