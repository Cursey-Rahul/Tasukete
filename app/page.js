
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className=" h-[calc(100vh-5rem)] flex items-center justify-center rounded-4xl my-2 mx-3 sm:mt-3 sm:mx-7 px-2 border-white border-1">
      <div className="flex items-center relative h-full w-full ">
        
        <Image src="/landingpage.jpeg" fill alt='' className='object-contain object-right rounded-4xl'/>
        
      </div>
      
    </div>
  );
}
