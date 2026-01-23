import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import { Link, useParams } from "react-router";
import Loading from "../common/Loading";
import { MyGlobalContext } from "../context/MainContextFile";

export default function Product() {
  let [loading, setLoading] = useState(false);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  let [category, setCategory] = useState([]);
  let [brand, setBrand] = useState([]);
  let [product, setProduct] = useState([]);

  //Filter State
  let [categoryFilter, setCategoryFilter] = useState([]);
  let [brandFilter, setbrandFilter] = useState([]);
  let [sorting, setSorting] = useState(null);
  let [priceFiter, setPriceFiter] = useState([null, null]);
  let [rating, setRating] = useState(null);
  let [currentPage, setCurrentPage] = useState(1);
  let [totPages, setTotPages] = useState(0);

  let getCategory = async () => {
    let apiData = await fetch(
      `https://wscubetech.co/ecommerce-api/categories.php`,
    );
    let finalData = await apiData.json();
    let { data } = finalData;
    setCategory(data);
  };

  let getBrand = async () => {
    let apiData = await fetch(`https://wscubetech.co/ecommerce-api/brands.php`);
    let finalData = await apiData.json();
    let { data } = finalData;

    setBrand(data);
  };

  let getProducts = async () => {
    setLoading(true);

    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/products.php`,
      {
        params: {
          page: currentPage,
          limit: 12,
          sorting: sorting,
          price_from: priceFiter[0],
          price_to: priceFiter[1],
          discount_from: null,
          discount_to: null,
          name: null,
          rating: rating,
          brands: brandFilter.join(","),
          categories: categoryFilter.join(","), //["womens-shoes","beauty"]  // womens-shoes,beauty
        },
      },
    );
    let finalData = apiRes.data;
    let { data, total_pages } = finalData;

    setTotPages(total_pages); // 14

    setProduct(data);
    window.scrollTo({
      top: "200",
      behavior: "smooth",
    });

    setLoading(false);
  };

  useEffect(() => {
    getCategory();
    getBrand();
  }, []);

  //Get Product Call  //categoryFilter, brandFilter, sorting
  useEffect(() => {
    getProducts();
  }, [categoryFilter, brandFilter, sorting, priceFiter, rating, currentPage]);

  let getCheckCategoryValue = (e) => {
    let checkBoxValue = e.target.value;
    if (e.target.checked) {
      setCategoryFilter([...categoryFilter, checkBoxValue]);
    } else {
      let filterCategory = categoryFilter.filter((v) => v != checkBoxValue);

      setCategoryFilter(filterCategory);
    }
  };

  let getCheckBrandValue = (e) => {
    let checkBoxValue = e.target.value;
    if (e.target.checked) {
      setbrandFilter([...brandFilter, checkBoxValue]);
    } else {
      let filterbrand = brandFilter.filter((v) => v != checkBoxValue);

      setbrandFilter(filterbrand);
    }
  };

  return (
    <div className="bg-white">
      <ToastContainer />
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3>Categories</h3>
                <ul
                  role="list"
                  className="px-2 py-3 font-medium text-gray-900"
                ></ul>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <div>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setSorting(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="1">Name : A to Z</option>
                  <option value="2">Name : Z to A</option>
                  <option value="3">Price: Low to High</option>
                  <option value="4">Price: High to Low</option>
                </select>
              </div>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="font-bold text-2xl mb-4">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 h-[250px] overflow-y-scroll border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {category.map((obj, index) => {
                    return (
                      <li>
                        {/* //categoryFilter ["beauty"].includes("beauty")  */}{" "}
                        <input
                          onChange={getCheckCategoryValue}
                          type="checkbox"
                          value={obj.slug}
                          checked={categoryFilter.includes(obj.slug)}
                        />
                        {obj.name}
                      </li>
                    );
                  })}
                </ul>

                <h3 className="font-bold text-2xl mb-4">Brands</h3>
                <ul
                  role="list"
                  className="space-y-4 h-[250px] overflow-y-scroll border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {brand.map((obj, index) => {
                    return (
                      <li>
                        {" "}
                        <input
                          type="checkbox"
                          onChange={getCheckBrandValue}
                          value={obj.slug}
                        />{" "}
                        {obj.name}
                      </li>
                    );
                  })}
                </ul>

                <h3 className="font-bold text-2xl mb-4">Price</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="0-500"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      type="radio"
                      name="price"
                      onClick={() => setPriceFiter([0, 500])}
                    />
                    <label
                      htmlFor="0-500"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Rs.0 - Rs.500
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      type="radio"
                      name="price"
                      onClick={() => setPriceFiter([501, 1000])}
                    />
                    <label
                      htmlFor="501-1000"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Rs.501 - Rs.1000
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      type="radio"
                      name="price"
                      onClick={() => setPriceFiter([1001, 1500])}
                    />
                    <label
                      htmlFor="1001-1500"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Rs.1001 - Rs.1500
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      type="radio"
                      onClick={() => setPriceFiter([1501, 2500])}
                      name="price"
                    />
                    <label
                      htmlFor="1501-2500"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Rs.1501 - Rs.2500
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      type="radio"
                      name="price"
                      onClick={() => setPriceFiter([2501, 50000000])}
                    />
                    <label
                      htmlFor="2501-more"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Rs.2501 and more
                    </label>
                  </div>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {loading ? (
                  <Loading />
                ) : (
                  <div className="grid grid-cols-4 gap-5">
                    {product.length >= 1 ? (
                      product.map((obj, index) => (
                        <ProductCard key={index} data={obj} />
                      ))
                    ) : (
                      <div>No Product Found</div>
                    )}
                  </div>
                )}

                <ResponsivePagination
                  current={currentPage}
                  total={totPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function ProductCard({ data }) {
  let { name, price, image, category_name, slug, id } = data;
  let { cart, setCart } = useContext(MyGlobalContext);

  let addToCart = () => {
    let myObj = {
      id,
      name,
      price,
      image,
      qty: 1,
    };
    setCart([...cart, myObj]);
    toast.success("Item  added in Cart");
  };

  let removeCart = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        let finalCart=cart.filter((obj)=>obj.id!=id)

        setCart(finalCart)

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  let checkMyProductinCart = cart.find((obj) => obj.id == id);

  return (
    <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
      <a href="#">
        <img className="rounded-t-base" src={image} alt="" />
      </a>
      <div className="p-6 text-center">
        <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
          <svg
            className="w-3 h-3 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
            />
          </svg>
          {category_name}
        </span>

        {checkMyProductinCart ? (
          <button
            onClick={removeCart}
            className="p-2 ms-3 text-white bg-red-700"
          >
            Remove Cart
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="p-2 ms-3 text-white bg-green-700"
          >
            Add to Cart
          </button>
        )}

        <Link href="#">
          <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
            {name}
          </h5>
          <p>Rs {price}</p>
        </Link>
        <Link
          to={`/product-details/${slug}`}
          className="inline-flex items-center bg-black text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Read more
          <svg
            className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
