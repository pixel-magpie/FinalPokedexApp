import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { SideBar } from "@/components/SideBar";
import { Search } from "./Search";
import { Layout } from "@/components/Layout";


export default function Home() {
  return (
    <main>
      <div>
        <Layout />
        {/* <Search />
        <SideBar /> */}
      </div>
      
      <div className="h-screen w-screen relative">
        <div className="bg-[url('/background.jpg')] bg-cover bg-center h-screen w-screen object-cover absolute mix-blend-overlay"></div>
        
    </div>
    </main>
  )
}
