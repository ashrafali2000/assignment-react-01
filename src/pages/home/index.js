import { Image } from "antd";
import React from "react";
const images = [
  {
    img: "https://static-01.daraz.pk/p/612eafdcc33588aa640464d9ebdf0e6d.jpg",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShao8Fx5wt25LJVNgXKHEbrGoEXNG6NdWDeEaKHnSKX34h4Dqc9WF3lrPb9dW4Wki9dkM&usqp=CAUg",
  },
  {
    img: "https://www.pakmobizone.pk/wp-content/uploads/2022/10/Apple-iPhone-14-Purple-4.jpg",
  },
  {
    img: "https://5.imimg.com/data5/BV/UY/ZP/SELLER-59756470/mens-cotton-jacket-500x500.jpg",
  },
  {
    img: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
  },
  {
    img: "https://audionic.co/cdn/shop/files/audionic-the-sound-master-default-title-airbud-two-max-wireless-earbuds-35639348920476.png?v=1693983650",
  },
  {
    img: "https://www.91wheels.com/assets/uploads/swatchs/MT-15__V2_CYANSTORM1680248182.jpg"
  }
];

const Home = () => {
  return (
    <div>
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          New product available here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new products collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={images[0].img}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={images[1].img}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={images[6].img}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={images[2].img}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={images[5].img}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={images[3].img}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={images[4].img}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent  bg-orange-500 px-8 py-3 text-center font-medium text-white hover:bg-orange-400"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
      {/* Our Featured Products */}
      <div>
        <h1 className="text-center mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Featured Products</h1>
       <div className="flex justify-center mt-2"><hr className="bg-orange-600 w-40 h-2 rounded "/></div> 
        <div className="flex flex-wrap mt-10 p-8 gap-10 bg-gray-200 justify-center" >
          {images.map((p) => <Image key={Math.random()} style={{
            height:230,width:230
          }} src={p.img}></Image>)}
        </div>
      </div>

      </div>
  );
};

export default Home;
