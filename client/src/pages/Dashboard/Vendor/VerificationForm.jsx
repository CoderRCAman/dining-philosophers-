import axios from "axios";
import React from "react";

export default function VerificationForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("fd");
    const newFormData = new FormData(e);
    const formRes = await axios.post(
      "http://localhost:4269/api/vendor/form",
      newFormData
    );
    console.log(formRes);
  };
  return (
    <div className="h-screen grid  place-items-center">
      <form
        className="border-[1px] shadow-sm border-[#c9c9c9] p-4 rounded-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label>Brand Name*</label>
          <input
            className="py-3 outline-none border-[#c9c9c9] border-[1px] w-full "
            type="text"
            name="brand"
          />
        </div>
        <div className="space-y-2">
          <label>Documents*</label>
          <input
            className="py-3 outline-none border-[#c9c9c9] border-[1px] w-full "
            type="file"
            name="file"
          />
        </div>
        <div className="space-y-2">
          <label>Links</label>
          <input
            className="py-3 outline-none border-[#c9c9c9] border-[1px] w-full "
            type="text"
            name="links"
          />
        </div>
        <button className="rounded-sm bg-gray-300 py-2 px-3">Submit</button>
      </form>
    </div>
  );
}
