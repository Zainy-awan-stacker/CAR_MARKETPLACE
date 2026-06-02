import Car from "../model/car.model.js";

export const getCars = async (req, res) => {

  try {

    const page = parseInt(req.query.page) || 1;

    const limit = 6;

    const skip = (page - 1) * limit;

    const {sort,type,minPrice,maxPrice,keyword} = req.query;

    let filter = {};

    if(type){
      filter["specs.type"] = {
        $in: type.split(",")
      };
    }

    if(minPrice && maxPrice){
      filter["price.rentPerDay"] = {$gte: Number(minPrice), $lte: Number(maxPrice)};
    }

    // for searchbar
    if(keyword){

  filter.$or = [

    {
      name:{
        $regex:keyword,
        $options:"i",
      },
    },

    {
      location:{
        $regex:keyword,
        $options:"i",
      },
    },

    {
      "specs.brand":{
        $regex:keyword,
        $options:"i",
      },
    },

    {
      "specs.type":{
        $regex:keyword,
        $options:"i",
      },
    },

    {
      destination:{
        $regex:keyword,
        $options:"i",
      },
    }

  ];

}

    let sortOption = {};

    if(sort === "Low to High"){
      sortOption["price.rentPerDay"] = 1;
    }

    if(sort === "High to Low"){
      sortOption["price.rentPerDay"] = -1;
    }

    const totalCars = await Car.countDocuments(filter);

    const cars = await Car.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    res.json({
      cars,
      currentPage: page,
      totalPages: Math.ceil(totalCars / limit),
    });

  } catch (err) {

    res.status(500).json(err);

  }

};


export const getSingleCar = async (req, res) => {

  try {

    const car = await Car.findById(req.params.id);

    if (!car) {

      return res.status(404).json({ message: "Car not found" });

    }

    res.json(car);

  } catch (err) {

    res.status(500).json(err);

  }

};

export const addCar = async (req, res) => {

  try {

    const car = new Car(req.body);

    await car.save();

    res.json(car);

  } catch (err) {

    res.status(500).json(err);

  }

};

export const deleteCar = async (req, res) => {

  try {

    await Car.findByIdAndDelete(req.params.id);

    res.json({
      message: "Car deleted",
    });

  } catch (err) {

    res.status(500).json(err);

  }

};

