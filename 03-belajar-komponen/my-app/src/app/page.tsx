// import Image from "next/image";
// import Profile from "../components/profile";

// export default function Home() {
//   return (
// <div>
//   <h2 className="text-center">Ilmuwan yang luar biasa</h2>
//   <div className="grid grid-cols-3 gap-8 justify-center">
//       <Profile></Profile>
//       <Profile></Profile>
//       <Profile></Profile>
//     </div>
// </div>


//   );
// }

// import { Gallery } from "@/components/gallery";
// export default function Home() {
//   return (
// <div>
// <h2 className="text-center">Ilmuwan yang luar biasa</h2>
//   <div className="grid grid-cols-3 gap-8 justify-center">
//     <Gallery />
//   </div>
// </div>


//   );
// }


import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";
import Bio from "@/components/jsx";
import MyGallery from "@/components/mygallery"
import MyProfile from "@/components/myprofile"


export default function Home() {
  return (
    <section>
      {/* <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
      <hr /> */}
      {/* <Bio /> */}
      {/* <MyGallery/> */}
      <MyProfile/>
    </section>
  );
}

