import React, { useEffect, useState } from "react";
import { BEST_OFFER_URL, IMG_CDN_URL } from "../content";

const Bestoffer = () => {
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
        i < 4;
        i++
      ) {
        data[i] =
        jsonData.data.cards[0].card.card.imageGridCards.info[i].imageId;
        
      }
      return data;
    }
    const resData = await checkData(json);
    setoffer(resData);
   
  }
  return (
    <div class=" pt-[2%]">
      <h1 class="font-extrabold text-xl leading-7 pl-[8%] pb-[1%]">Best offers for you</h1>
      <div class="flex justify-center">
        {offer.map((i) => {
          return (
            <img
              class="w-[425px] h-[252px] m-2 pt-2 rounded-[32px]"
              src={IMG_CDN_URL+i}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bestoffer;
