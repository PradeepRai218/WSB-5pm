import Footer from "../common/Footer";
import Header from "../common/Header";
import aboutImg from "../../assets/images/jodhpur-team.webp" 
function Home() {
  return (
    <>
 
    <section className="py-10 bg-[#194cff]">
      <h2 className="lg:text-[42px] text-white sm:text-3xl text-2xl font-bold text-center">
        Our Product
      </h2>

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-5 lg:px-0 px-4 ">
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
      </div>
    </section>

    <section className="bg-gray-200 py-10">
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[40%_auto] sm:grid-cols-2 grid-cols-1  gap-10">
           <figure>
            <img src="https://uptownskylla.in/wp-content/uploads/2022/09/01-1-2048x1497.jpg" alt="" />
           </figure>
           <article>
                <h1>About Uptown Skylla -Zirakpur</h1>
                <p>
                    Redefining the standards of elegant living with meticulously planned apartments or flats in Zirakpur that are crafted with sophisticated taste, Uptown Skylla Zirakpur has outdone its residential stature with impeccable premium Flats. Available in configurations of 2, 3, 3+S, 4+S BHK luxurious Flats and Pent houses in Zirakpur , these upscale homes are truly a dream come true for young couples and growing families. One of the many great features of the Uptown Skylla flats in Zirakpur is its enviable location and excellent connectivity to the rest of the city. The location have been strategically chosen to offer close proximity to modern lifestyle conveniences, ample green spaces as well as a picturesque view. Another perk of living in a Uptown Skylla apartments is that you will never run out of things to do.

                </p>
           </article>
        </div>
    </section>

    </>
  );
}
export { Home };

function ProductItems() {
  return (
    <div className="bg-white">
      <div className="overflow-hidden">
        <img
          src={aboutImg}
          alt=""
          className="hover:scale-125 duration-500"
        />
      </div>

      <h3 className="p-3">Iphone</h3>
    </div>
  );
}
