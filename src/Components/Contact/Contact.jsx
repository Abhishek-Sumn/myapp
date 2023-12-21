const Contact = () => {
  return (
    <div class="flex mx-[15%] gap-4 mt-4">
      <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src="https://raw.githubusercontent.com/Abhishek-Sumn/portfolio2/main/a.png"
            alt="ui/ux review check"
          />
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              Inxee Inventory Management
            </h5>
          </div>
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            <ul>
              <li>
                {" "}
                Streamlined inventory tracking
              </li>
              <li>Capable of CRUD operations on Products.</li>
              <li>Easy to use.</li>
            </ul>
          </p>
        </div>
        <div class="p-6 pt-3">
          <a href="https://inxee-inventory-system.vercel.app/" target="_blank">
            <button
              class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Visit
            </button>
          </a>
        </div>
      </div>

      <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src="https://raw.githubusercontent.com/Abhishek-Sumn/portfolio2/main/b.png"
            alt="ui/ux review check"
          />
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              MovieFinder
            </h5>
          </div>
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            <ul>
              <li> Fetching LIVE data from OMDB API</li>
              <li>Get Updated infos about latest Movies And Series</li>
              <li>Dark Theme.</li>
            </ul>
          </p>
        </div>
        <div class="p-6 pt-3">
          <a href="https://moviefinder-two.vercel.app/" target="_blank">
            <button
              class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Visit
            </button>
          </a>
        </div>
      </div>

      <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src="https://raw.githubusercontent.com/Abhishek-Sumn/portfolio2/main/c.png"
            alt="ui/ux review check"
          />
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              Budgetify
            </h5>
          </div>
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            <ul>
              <li> Simple Soothing Budget Calculator.</li>
              <li>Feel GOOD UI.</li>
              <li>Light Colors.</li>
            </ul>
          </p>
        </div>
        <div class="p-6 pt-3">
          <a href="https://abhishek-sumn.github.io/budget_calculator/" target="_blank">
            <button
              class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Visit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
