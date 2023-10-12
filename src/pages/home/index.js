import { Image } from "antd";
import React from "react";
import {MdArrowForwardIos} from "react-icons/md"
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
    img: "https://www.91wheels.com/assets/uploads/swatchs/MT-15__V2_CYANSTORM1680248182.jpg",
  },
];

const weekItem = [
  {
    img: "https://cdn.edenrobe.com/media/amasty/amopttablet/catalog/product/images/Men/Men_Coat_Pant_Formal/2023/23_M_MenCoatPantFormal_EMTCPC22-6814_1.webp",
    title: "Men Coat",
    price: "80$",
  },
  {
    img: "https://www.jiomart.com/images/product/original/rvdtte76wn/birde-stylish-comfortable-navy-sports-shoes-for-men-s-product-images-rvdtte76wn-0-202305250800.jpg?im=Resize=(500,630)",
    title: "Sport Shoes",
    price: "40$",
  },
  {
    img: "https://pcdesignperfumes.com/wp-content/uploads/2020/07/03-2046-00-00.jpg",
    title: "Smilly Perfume",
    price: "60$",
  },
];
const LovedItem = [
  {
    img: "https://cdn.edenrobe.com/media/amasty/amopttablet/catalog/product/images/Men/Men_Coat_Pant_Formal/2023/23_M_MenCoatPantFormal_EMTCPC22-6814_1.webp",
    title: "Men Coat",
    price: "80$",
  },
  {
    img: "https://www.jiomart.com/images/product/original/rvdtte76wn/birde-stylish-comfortable-navy-sports-shoes-for-men-s-product-images-rvdtte76wn-0-202305250800.jpg?im=Resize=(500,630)",
    title: "Sport Shoes",
    price: "40$",
  },
  {
    img: "https://pcdesignperfumes.com/wp-content/uploads/2020/07/03-2046-00-00.jpg",
    title: "Smilly Perfume",
    price: "60$",
  },
  {
    img: "https://pcdesignperfumes.com/wp-content/uploads/2020/07/03-2046-00-00.jpg",
    title: "Smilly Perfume",
    price: "60$",
  },
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
                            className="h-full w-full object-scale-down object-center"
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
                  className="inline-block w-48 rounded-md border border-transparent  bg-orange-500 px-8 py-3 flex justify-center gap-2 items-center flex-wrap font-medium text-white hover:bg-orange-400"
                >
                 Get Started <MdArrowForwardIos></MdArrowForwardIos>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Design of this Week */}
      <div>
        <h1 className="text-center mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Design of this weeek
        </h1>
        <div className="flex justify-center mt-5">
          <hr className="bg-orange-600 w-40 h-2 rounded " />
        </div>

        <div className="flex justify-center align-center gap-10 flex-wrap mt-9">
          <div className="w-[100] h-[100]  flex justify-center items-center flex-col">
            <img
              src={weekItem[0].img}
              alt=""
              className="object-contain h-80 w-80 object-center"
            />
            <p>{weekItem[0].title}</p>
            <p>{weekItem[0].price}</p>
          </div>
          <div className="w-[100] h-[100]   flex justify-center items-center flex-col ">
            <img
              src={weekItem[1].img}
              alt=""
              className="h-80 w-80 object-contain object-center"
            />
            <p>{weekItem[1].title}</p>
            <p>{weekItem[1].price}</p>
          </div>
          <div className="w-[100] h-[100]  flex justify-center items-center flex-col">
            <img
              src={weekItem[2].img}
              alt=""
              className="h-80 w-80 object-contain object-center"
            />
            <p>{weekItem[2].title}</p>
            <p>{weekItem[2].price}</p>
          </div>
        </div>
      </div>

      {/* Our Featured Products */}
      <div>
        <h1 className="text-center mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our Featured Products
        </h1>
        <div className="flex justify-center mt-5">
          <hr className="bg-orange-600 w-40 h-2 rounded " />
        </div>
        <div className="flex  flex-wrap mt-10 p-8 gap-10 bg-gray-200 justify-center">
          {images.map((p) => (
            <Image
              key={Math.random()}
              style={{
                height: 230,
                width: 230,
              }}
              src={p.img}
            ></Image>
          ))}
        </div>
      </div>

      {/* Shop Now Section */}
      <div>
        <div>
        </div>
        <div className="w-[700] h-96 bg-fuchsia-100 relative p-2 md:p-16">
        <h1 className="text-start text-gray-900 font-bold text-4xl sm:text-4xl">
        Hurry Up! 
        </h1>
        <h1 className="text-start mt-3 font-bold text-5xl  text-gray-900 sm:text-5xl">
      Deal of the Day!
        </h1>
        <p>Buy This T-shirt At 20% Discount, Use Code Off20</p>
        <a
                  href="#"
                  className="inline-block w-48 rounded-md border border-transparent  bg-orange-500 px-8 py-3 text-center font-medium text-white 
                  flex justify-center gap-2 items-center flex-wrap hover:bg-orange-400"
                >
                  Shop Now <MdArrowForwardIos></MdArrowForwardIos>
                </a>
        <img
          src="https://www.advertisemint.com/wp-content/uploads/2021/09/advertisemint-amazon-ad-agency.png"
          alt=""
          className="h-80 w-80 object-contain object-center  absolute  bottom-10 right-0 md:right-10"
        /></div>
      </div>

      {/* Most Loved Products */}
      <h1 className="text-center mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our Loved Products
        </h1>
        <div className="flex justify-center mt-5">
          <hr className="bg-orange-600 w-40 h-2 rounded " />
        </div>
      <div className="flex justify-center items-center flex-wrap mt-8">
      <div className="w-[100] h-[100]  flex justify-center items-center flex-col">
            <img
              src={LovedItem[0].img}
              alt=""
              className="object-contain h-80 w-80 object-center"
            />
            <p>{LovedItem[0].title}</p>
            <p>{weekItem[0].price}</p>
          </div>
      <div className="w-[100] h-[100]  flex justify-center items-center flex-col">
            <img
              src={LovedItem[1].img}
              alt=""
              className="object-contain h-80 w-80 object-center"
            />
            <p>{LovedItem[1].title}</p>
            <p>{LovedItem[1].price}</p>
          </div>
      <div className="w-[100] h-[100]  flex justify-center items-center flex-col">
            <img
              src={LovedItem[2].img}
              alt=""
              className="object-contain h-80 w-80 object-center"
            />
            <p>{LovedItem[2].title}</p>
            <p>{LovedItem[2].price}</p>
          </div>
      <div className="w-[100] h-[100]  flex justify-center items-center flex-col">
            <img
              src={LovedItem[3].img}
              alt=""
              className="object-contain h-80 w-80 object-center"
            />
            <p>{LovedItem[3].title}</p>
            <p>{LovedItem[3].price}</p>
          </div>
       
      </div>
    </div>
  );
};

export default Home;
