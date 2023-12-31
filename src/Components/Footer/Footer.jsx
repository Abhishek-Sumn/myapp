import React from "react";

const Footer = () => {
  return (
    <>
      <div class="flex justify-center bg-slate-100 mt-16">
        <div class="flex flex-col">
          <h1 class="mb-2 text-xl font-extrabold text-gray-900 dark:text-whitez md:text-xl lg:text-xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-sky-600">
              A project made by
              <a href="https://abhisheksuman.me/">
                <span
                  class="underline decoration-black ml-1"
                  href="abhisheksuman.me"
                >
                  Abhishek Suman
                </span>
              </a>
            </span>
          </h1>
        </div>
      </div>
      <div class="bg-black text-white flex p-4 gap-[10%] pl-[22.5%] h-[450px] pt-14">
        <div class=" text-white font-bold">Swiggy</div>
        <div class=" text-white">
          <span class="font-bold">Company</span>
          <ul class="text-gray-400 flex flex-col gap-2 pt-2">
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>
        <div class=" text-white">
          <span class="font-bold">Contact Us</span>
          <ul class="text-gray-400 flex flex-col gap-2 pb-12 pt-2">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride With us</li>
          </ul>
          <span class="font-bold ">Legal</span>
          <ul class="text-gray-400 flex flex-col gap-2 pt-2">
            <li>Terms & conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div class=" text-white">
          <span class="font-bold">We Deliver To :</span>
          <ul class="text-gray-400 flex flex-col gap-2 pt-2">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>589 More cities</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
