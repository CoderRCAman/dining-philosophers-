import React from "react";
import { Link } from "react-router-dom";

function SidenavVendor() {
  return (
    <div className="py-8 w-full flex flex-col justify-center items-center">
      {/* list of pages */}
      {/* <div className="p-6">
        <Link to="/dashboard/vendor">Overview</Link>
      </div> */}
      {/* <div className="p-6">
        <Link to="/dashboard/vendor/products">Products</Link>
      </div> */}
      <div className="p-6">
        <Link to="/dashboard/vendor/add">Add</Link>
      </div>
      <div className="p-6">
        <Link to="/dashboard/vendor/category">Add Category</Link>
      </div>
    </div>
  );
}

export default SidenavVendor;
