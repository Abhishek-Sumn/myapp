import React, { useEffect, useState } from "react";
import { BEST_OFFER_URL, IMG_OFFER_URL } from "../content";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Bannerload from "./Bannerload";

const BestSmall = () => {
  const [offer, setoffer] = useState([]);
  var data = [];

  useEffect(() => {
    getBestOffer();
  }, []);

  async function getBestOffer() {
    let bestOfferData = await fetch(BEST_OFFER_URL);
    let json = await bestOfferData.json();

    async function checkData(jsonData) {
      for (
        let i = 0;
        i < jsonData?.data?.cards[1]?.card?.card?.imageGridCards?.info?.length;
        i++
      ) {
        data[i] =
          jsonData?.data?.cards[1]?.card?.card?.imageGridCards?.info[i]?.imageId;
      }
      return data;
    }
    const resData = await checkData(json);
    setoffer(resData);
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free",

    breakpoints: {
      "(max-width: 480px)": {
        slides: { perView: 4, spacing: 3 },
      },
      "(min-width: 480px)": {
        slides: { perView: 5, spacing: 3 },
      },
      "(min-width: 768px)": {
        slides: { perView: 7, spacing: 3 },
      },
      "(min-width: 1920px)": {
        slides: { perView: 8.5, spacing: 3.2 },
      },
    },
  });

  return (
    <div class=" px-[12%] pt-[3%] ">
      <div class="flex justify-between">
        <h1 class="text-xl leading-7  swiggybold ">
          What's on your mind?
        </h1>

      
        <div >
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-gray-100 p-2 rounded-full disabled:text-gray-300 mr-3 mb-2"
          >
            <ArrowLongLeftIcon className="w-5 h-5" />{" "}
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-gray-100 p-2 rounded-full disabled:text-gray-300  mb-2"
          >
            <ArrowLongRightIcon className="w-5 h-5" />{" "}
          </button>
        </div>
      </div>

      {offer.length === 0 ? (
        <Bannerload/>
      ) : (
        <div ref={sliderRef} class=" keen-slider  ">
          {offer.map((i) => {
            return (
              <div className="keen-slider__slide  flex justify-center pt-4">
                <img class="h-[620]" src={IMG_OFFER_URL + i} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BestSmall;
