import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bgColor: { type: String },
    location: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: Number,
      default: 0,
    },
    destination: {
      type: String,
    },

    price: {
      rentPerDay: {
        type: Number,
        required: true,
      },

      purchasePrice: {
        type: Number,
        required: true,
      },
    },

    specs: {
      brand: {
        type: String,
      },

      model: {
        type: String,
      },

      type: {
        type: String,
      },

      fuel: {
        type: String,
      },

      transmission: {
        type: String,
      },

      seats: {
        type: Number,
      },

      mileage: {
        type: String,
      },
    },

    description: {
      type: String,
    },

    features: [
      {
        type: String,
      },
    ],

    images: {
      main: {
        type: String,
      },

      gallery: [
        {
          type: String,
        },
      ],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Car", carSchema);
