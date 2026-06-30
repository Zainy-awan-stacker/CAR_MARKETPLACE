import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../api/api";

export default function PaymentSuccess() {

  const [searchParams] = useSearchParams();

  useEffect(() => {

    const bookingId =
      searchParams.get("bookingId");

    if (bookingId) {

      API.put("/payment/mark-paid", {
        bookingId,
      });

    }

  }, []);

  return (
    <div className="h-screen flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold text-green-500">
          Payment Successful 🎉
        </h1>

      </div>

    </div>
  );
}