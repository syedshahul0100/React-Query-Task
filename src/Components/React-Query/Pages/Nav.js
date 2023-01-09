import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
    <div className="bg-orange-400 text-black p-9  ">
      <Link to="/" className="p-9 m-1 text-xl font-semibold">Home</Link>
      <Link to="/rqdata" className="p-9 m-1 text-xl font-semibold">RQData</Link>
      <Link to="/famous-city" className="p-9 m-1 text-xl font-semibold">FamousCity</Link>
      </div>
    </>
  );
}
export default Nav;
