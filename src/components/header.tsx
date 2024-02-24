import Link from "next/link"
import { currentUser, UserButton } from '@clerk/nextjs';


const Header =async () => {
    const user= await currentUser();
    const emailAddress=user?.emailAddresses;
    
  return (
    <div className="flex justify-between p-8 pr-16 gap-2 bg-gray-100 shadow-xl text-xl font-bold items-center">
       Next and Clerk
      {(emailAddress)?<div className="flex gap-2 items-center "><Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/"} className="mr-4">Home</Link> <UserButton/> </div>:<div className="flex gap-2 items-center"><Link href={"/sign-up"}>Sign Up</Link>
      <Link href={"/sign-in"}>Sign in</Link></div>}
    </div>
  )
}

export default Header;