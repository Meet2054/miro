"use client";

import { UserButton } from "@clerk/nextjs";
// import { Search } from "lucide-react";
import {SearchInput} from "./search-input";
import { OrganizationSwitcher, useOrganization } from "@clerk/nextjs";
import InviteButton from "./sidebar/ invite-button";

const Navbar = () => {

  const { organization } = useOrganization();


  return (
    <div >
      <div className="flex items-center gap-x-4 p-5">
        <div className="hidden lg:flex lg:flex-1 ">
          <SearchInput/>
        {/* Add Search  */}
        </div>
        <div className="block lg:hidden flex-1">
        <OrganizationSwitcher 
        hidePersonal 
        appearance={{
          elements: {
            rootbox: { 
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "376px",
            },
           organizationSwitcherTrigger: {
              padding: "6px",
              borderRadius: "8px",
              width: "100%",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            
            
            }
          }
        }}
        />
        </div> 
        { organization &&
          (
            <InviteButton/>
          )}
        <UserButton/>
      </div>
    </div>
  )
}

export default Navbar
