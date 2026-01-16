import { useEffect, useState } from "react";
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




export default function Product() {
  let [loading, setLoading] = useState(false);
  let { categorySlug } = useParams(); //beauty

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  let [category, setCategory] = useState([]);
  let [brand, setBrand] = useState([]);
  let [product, setProduct] = useState([]);

  //Filter State
  let [categoryFilter, setCategoryFilter] = useState([]);
  let [brandFilter, setbrandFilter] = useState([]);
  let [sorting, setSorting] = useState(null);

  let getCategory = async () => {
    let apiData = await fetch(
      `https://wscubetech.co/ecommerce-api/categories.php`
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
          page: 1,
          limit: 12,
          sorting: sorting,
          price_from: null,
          price_to: null,
          discount_from: null,
          discount_to: null,
          name: null,
          rating: null,
          brands: brandFilter.join(","),
          categories: categoryFilter.join(","), //["womens-shoes","beauty"]  // womens-shoes,beauty
        },
      }
    );
    let finalData = apiRes.data;
    let { data } = finalData;
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    getCategory();
    getBrand();
  }, []);

  //Get Product Call  //categoryFilter, brandFilter, sorting
  useEffect(() => {
    getProducts();
  }, [categoryFilter, brandFilter, sorting]);


  //Url Slug Store in State
  useEffect(() => {
    if (categorySlug) {
      setCategoryFilter([...categoryFilter, categorySlug]); //["beauty"]
    } else {
      setCategoryFilter([]);
    }
  }, [categorySlug]); //beauty

  // let l=["ws","iip"]

  // console.log(l.toString()); //"ws","iip"
  //   console.log(l.join("|")); //"ws" | "iip"

  console.log(categoryFilter);

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

                        {/* //categoryFilter ["beauty"].includes("beauty")  */} 
                        {" "}
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
                        <input type="checkbox" 
                        onChange={getCheckBrandValue} 
                        value={obj.slug} 
                        
                        /> {obj.name}
                      </li>
                    );
                  })}
                </ul>
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function ProductCard({ data }) {
  let { name, price, image, category_name, slug } = data;
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
