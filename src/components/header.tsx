import Link from "next/link"
import { currentUser, UserButton } from '@clerk/nextjs';


const Header =async () => {
    const user= await currentUser();
    const emailAddress=user?.emailAddresses;
    
  return (
    <div className="flex justify-between p-4 px-8 gap-2 bg-gray-100 shadow-xl font-bold text-sm text-md-lg items-center">
       Next and Clerk
      {(emailAddress)?<div className="flex gap-2 items-center "><Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/"} className="mr-4">Home</Link> <UserButton/> </div>:<div className="flex gap-2 items-center"><Link href={"/sign-up"}>Sign up</Link>
      <Link href={"/sign-in"}>Sign in</Link></div>}
    </div>
  )
}

export default Header;