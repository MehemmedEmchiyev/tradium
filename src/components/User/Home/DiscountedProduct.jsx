import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "../../Card";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../../services/service";
import Loader from "../../Loader";

function DiscountedProduct() {
    const settings = {
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
    }
    const [products , setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const response = await getAllProduct()
            setProducts(response.data)
        } 
        getProducts()
    },[])
  return (
    <div className="w-full">
        <div className="mb-10 font-['Cormorant_Garamond',_serif]">
            <h2 className="text-3xl md:text-5xl font-semibold flex flex-col mb-4">
                <span>Discover Our</span>
                <span>Discounted Products!</span>
            </h2>
        </div>
      {
        products.length ? <Slider {...settings}>
        {
            products?.filter(item => item.discount >= 10).map((item,index) => <Card key={index} slider='true' item ={item} />)   
        }
      </Slider> : <Loader />
      }
    </div>
  )
}

export default DiscountedProduct