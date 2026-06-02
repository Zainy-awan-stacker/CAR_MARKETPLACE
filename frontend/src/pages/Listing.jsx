import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../components/userScreenComponents/Item";
import { sortOptions, bodyType, priceRange, Cars } from "./../data/index";

function Listing() {
  const [filter, setFilter] = useState({
    bodyType: [],
    priceRange: [],
  });
  const [sort, setSort] = useState("");
  const currency = "Pkr";
  const [searchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const heroDestination = (searchParams.get("destination") || "")
    .toLowerCase()
    .trim();

  // yha py aik const toggle filter bnany lga hu checkbox k liye
  const handleFilterChange = (checked, value, type) => {
    setFilter((prev) => {
      const updated = { ...prev };
      if (checked) {
        updated[type].push(value);
      } else {
        updated[type] = updated[type].filter((v) => v !== value);
      }
      return updated;
    });
  };
  // yha py car ko sort krny ka function

  const sortCars = (a, b) => {
    if (sort === "Low to High") return a.purchasePrice - b.purchasePrice;
    if (sort === "High to Low") return b.purchasePrice - a.purchasePrice;
    return 0;
  };
  //   yha py price vala filter function chly ga
  const matchesPrice = (car) => {
    if (filter.priceRange.length === 0) return true;
    return filter.priceRange.some((range) => {
      const [min, max] = range.split("to").map((x) => Number(x.trim()));
      return car.price.sale >= min && car.price.sale <= max;
    });
  };

  //filter type

  const matchesType = (car) => {
    if (filter.bodyType.length === 0) return true;
    return filter.bodyType.some(
      (type) => type.toLowerCase() === car.type.toLowerCase(),
    );
  };

  //header ka searchbar use krky filtr krna
  const matchesSearch = (car) => {
    if (!searchQuery) return true;
    return (
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // hero section mien serachbar sy jo destination krni ha yha py vo function chly ga

  const matchesHeroDestination = (car) => {
    if (!heroDestination) return true;
    return (car.city || "").toLowerCase().includes(heroDestination);
  };

  //filter or sort krna cars ko
  const filteredCars = () => {
    return Cars
      .filter(
        (c) =>
          matchesType(c) &&
          matchesPrice(c) &&
          matchesSearch(c) &&
          matchesHeroDestination(c),
      )
      .sort(sortCars);
  };

  return (
    <section className="Section bg-primary px-5 py-10">
      {/* leftside part */}
      <div className="inner-sec flex gap-8">
        <aside className="sidebar w-[250px] bg-white  rounded-md  flex flex-col gap-10">
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
        <main className="right-side grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6 bg-white p-4 rounded-md ">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => <Item key={car.id} car={car} />)
          ) : (
            <p className="capitalize">No cars found for selected filters</p>
          )}
        </main>
      </div>
    </section>
  );
}

export default Listing;
