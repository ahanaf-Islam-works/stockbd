"use client";
import RealTimeStockProps from "@/props/realTimeStockProps";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Props {
  stocks: RealTimeStockProps[];
}
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

export default function StockSlider({ stocks }: Props) {
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
              <p className="text-base font-semibold text-zinc-700">
                {stock.lastTradedPrice}
              </p>
              <p className="text-base font-semibold text-zinc-700">
                {stock.priceChange}
              </p>
              <p className="text-base font-semibold text-zinc-700">
                {stock.changeSymbol}
              </p>
              <p className="text-base font-semibold text-zinc-700">
                {stock.changePercentage}
              </p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
