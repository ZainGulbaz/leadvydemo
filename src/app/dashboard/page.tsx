import { currentUser } from "@clerk/nextjs" 

const page = async() => {
  const user= await currentUser();
  console.log(user);
  return (
    <div className="w-full flex justify-center items-center">
      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-16">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user?.firstName}{" "}{user?.lastName}</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Male</p>
<p className="font-normal text-gray-700 dark:text-gray-400">{user?.emailAddresses?.[0]?.emailAddress}</p>
</a>
    </div>


  )
}

export default page