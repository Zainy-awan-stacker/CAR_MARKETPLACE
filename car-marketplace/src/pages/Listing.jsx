import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../components/userScreenComponents/Item";
import { sortOptions, bodyType, priceRange } from "./../data/index";
import API from "../api/api";

function Listing() {
  const [filter, setFilter] = useState({
    bodyType: [],
    priceRange: [],
  });
  const [sort, setSort] = useState("");
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const currency = "Pkr";
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const heroDestination = (searchParams.get("destination") || "")
    .toLowerCase()
    .trim();

  // yha py aik const toggle filter bnany lga hu checkbox k liye
  const handleFilterChange = (checked, value, type) => {
    setFilter((prev) => ({
      ...prev,
      [type]: checked
        ? [...prev[type], value]
        : prev[type].filter((v) => v !== value),
    }));
  };

  //   yha py price vala filter function chly ga
  const matchesPrice = (car) => {
    if (filter.priceRange.length === 0) return true;
    return filter.priceRange.some((range) => {
      const [min, max] = range.split("to").map((x) => Number(x.trim()));
      return car.price.purchasePrice >= min && car.price.purchasePrice <= max;
    });
  };

  //filter type

  const matchesType = (car) => {
    if (filter.bodyType.length === 0) return true;
    return filter.bodyType.some(
      (type) => type.toLowerCase() === car.specs.type.toLowerCase(),
    );
  };

  //header ka searchbar use krky filtr krna

  // hero section mien serachbar sy jo destination krni ha yha py vo function chly ga

  const matchesHeroDestination = (car) => {
    if (!heroDestination) return true;
    return (car.destination || "").toLowerCase().includes(heroDestination);
  };

  //filter or sort krna cars ko
  const filteredCars = () => {
    return cars.filter((c) => matchesHeroDestination(c));
  };
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const type = filter.bodyType.join(",");

        let minPrice = "";
        let maxPrice = "";

        if (filter.priceRange.length > 0) {
          const range = filter.priceRange[0].split("to");
          minPrice = range[0];
          maxPrice = range[1];
        }
        const res = await API.get(
          `/cars?page=${currentPage}&sort=${sort}&type=${type}&minPrice=${minPrice}&maxPrice=${maxPrice}&keyword=${keyword}`,
        );

        setCars(res.data.cars);
        console.log(res.data.cars);

        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCars();
  }, [currentPage, sort, filter, keyword]);

  return (
    <section className="Section mx-auto max-w-[1300px] bg-primary px-5 py-10">
      {/* leftside part */}
      <div className="inner-sec flex flex-col gap-8 lg:flex-row lg:items-start">
        <aside className="sidebar w-full lg:w-[250px] bg-white rounded-md flex flex-col gap-10 transition-all duration-200">
          <div className="sorting-sec flex flex-col mx-5">
            {/* ye ha sorting vala part */}
            <h5 className=" py-2">Sort By</h5>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rely p-1 bg-primary border "
            >
              {sortOptions.map((sort, index) => (
                <option key={index} value={sort} className={""}>
                  {sort}
                </option>
              ))}
            </select>
          </div>

          <div className="type flex flex-col p-2 gap-2 mx-5 bg-primary rounded-md ">
            {/* ye ha sorting vala part */}
            <h5>Car Type</h5>

            {bodyType.map((type) => (
              <label key={type} className={"flex gap-2"}>
                <input
                  type="checkbox"
                  checked={filter.bodyType.includes(type)}
                  onChange={(e) =>
                    handleFilterChange(e.target.checked, type, "bodyType")
                  }
                />
                {type}
              </label>
            ))}
          </div>
          {/* priceRange vala part*/}
          <div className="range flex flex-col p-2 rounded-md gap-2 mx-5 bg-primary ">
            <h5>price Range</h5>

            {priceRange.map((price) => (
              <label key={price} className={"flex gap-2"}>
                <input
                  type="checkbox"
                  checked={filter.priceRange.includes(price)}
                  onChange={(e) =>
                    handleFilterChange(e.target.checked, price, "priceRange")
                  }
                />
                {currency}
                {price}
              </label>
            ))}
          </div>
        </aside>
        <main className="right-side w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 bg-white p-4 rounded-md transition-all duration-200">
          {filteredCars().length > 0 ? (
            filteredCars().map((car) => (
              <Item key={car._id || car.id} car={car} />
            ))
          ) : (
            <p className="capitalize">No cars found for selected filters</p>
          )}
          <div className="col-span-full flex justify-center items-center gap-3 mt-10">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="bg-sky-300 px-4 py-2 rounded-full text-white disabled:opacity-50"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full border transition-all duration-200
      ${
        currentPage === index + 1
          ? "bg-sky-500 text-white"
          : "bg-white text-black"
      }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className="bg-sky-500 px-4 py-2 rounded-full text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Listing;
