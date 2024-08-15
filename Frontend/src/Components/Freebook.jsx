import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../src/list.json'
import Cards from './Cards';

function Freebook() {
  const filterData=list.filter((data)=>data.category==='Free')
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        
        }
      }
    ]
  };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-6'>
      <div>
      <h1 className='text-gray-800 text-3xl font-bold px-6'>
        Try Out! Our <span className='font-semibold text-rose-800'>Free Books</span>
      </h1>
      <p className='text-gray-700 text-xl px-6 py-10'>Dive into our collection of free books and embark on countless adventures. From thrilling mysteries to heartwarming romances. </p>
      </div>
  
    <div>
    <Slider {...settings}>
       {filterData.map((items)=>(
          <Cards items={items} key={items.id}/>
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
