import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";
import { PopularPokemon } from "@/components/PopularPokemon";


export default function Home() {
  return (
    <main>
      <div>
        
        <Layout />
        <Hero />
        <PopularPokemon />
                
      </div>
    </main>
  )
}
