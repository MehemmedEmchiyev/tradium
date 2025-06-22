import Depatments from "../../components/User/Home/Depatments"
import DiscountedProduct from "../../components/User/Home/DiscountedProduct"
import Hero from "../../components/User/Home/Hero"

function Home() {
  return (
    <main className='w-full mx-auto lg:w-[95%]'>
      <Hero />  
      <Depatments />
      <DiscountedProduct />
    </main>
  )
}

export default Home