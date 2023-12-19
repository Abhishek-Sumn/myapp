import { BEST_OFFER_URL, IMG_CDN_URL } from "../content";

const Banner = ({ banner }) => {
    return (
      <div className='keen-slider__slide'>
        <img className='block w-full' src={IMG_CDN_URL + banner?.imageId} alt='' />
      </div>
    );
  };
  
  export default Banner;