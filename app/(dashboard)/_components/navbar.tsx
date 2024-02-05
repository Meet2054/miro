"use client";

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div >
      <div className="flex items-center gap-x-4 p-5 bg-green-500  ">
        <div className="hidden lg:flex lg:flex-1 ">
        {/* Add Search  */}
        </div>
        <UserButton/>
      </div>
    </div>
  )
}

export default Navbar
