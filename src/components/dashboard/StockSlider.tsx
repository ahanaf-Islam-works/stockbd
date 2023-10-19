"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const stocks = [
  {
    name: "AAPL",
    price: 100,
    change: 0.5,
    sign: "+",
  },

  {
    name: "TSLA",
    price: 200,
    change: 0.5,
    sign: "-",
  },

  {
    name: "AMZN",
    price: 300,
    change: 0.5,
    sign: "+",
  },

  {
    name: "FB",
    price: 400,
    change: 0.5,
    sign: "-",
  },

  {
    name: "GOOG",
    price: 500,
    change: 0.5,
    sign: "+",
  },
];

export default function StockSlider() {
  return (
    <Carousel
      additionalTransfrom={0}
      autoPlay={true}
      autoPlaySpeed={2000}
      centerMode={false}
      className="border-b border-gray-200"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl={true}
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {stocks.map((stock, index) => {
        return (
          <div
            key={index}
            className="bg-white p-3 rounded flex flex-col mb-5 mr-1 shadow-md hover:shadow-lg"
          >
            <div className="">
              <p className="text-base font-semibold text-zinc-700">
                {stock.name}
              </p>
              <p className="text-xs flex justify-between">
                {stock.price}
                {
                  <span
                    className={`${
                      stock.sign === "+" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stock.sign}
                    {stock.change}
                  </span>
                }
              </p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
