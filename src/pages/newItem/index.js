import React, { useContext, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";

const NewItem = () => {
    const autCtx = useContext(AuthContext);
    const userEmail = autCtx.userEmail;
  const titleRef = useRef();
  const priceRef = useRef();
  const brandRef = useRef();
  const imageUrlRef = useRef();

  const addItemHandler = (event) => {
    event.preventDefault()
    const find = JSON.parse(localStorage.getItem(userEmail));
    if(find) {
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const brand = brandRef.current.value;
        const image = imageUrlRef.current.value;
        console.log(find)
        const {products}  = find;
        products.push({id:products.length, title:title,price:price,brand:brand, image:image})

      localStorage.setItem(find.email,JSON.stringify({...find, products}))
    }

  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={addItemHandler}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                ref={titleRef}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="mt-2">
              <input
                id="Price"
                name="Price"
                type="number"
                autoComplete="Price"
                ref={priceRef}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Brand"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Brand
            </label>
            <div className="mt-2">
              <input
                id="Brand"
                name="Brand"
                type="text"
                autoComplete="Brand"
                ref={brandRef}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="imagesUrl"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Images Url
            </label>
            <div className="mt-2 flex justify-center item-center">
              <input
                id="imagesUrl"
                name="imagesUrl"
                type="url"
                autoComplete="imagesUrl"
                ref={imageUrlRef}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            <button className="rounded-md md:w-32 sm:w-16 bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Push image
            </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={addItemHandler}
            >
             Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItem;
