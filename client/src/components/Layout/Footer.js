import React from "react";
import{Link} from "react-router-dom"
const Footer=()=>{
  return(
    <div className="footer">
      <h1 className="text-center">All right reserved &copy; Devloper</h1>
      <p className="text-center mt-3">
        <Link >About</Link>
        <Link>Contact</Link>
        <Link>Policy</Link>
      </p>
    </div>
  );
};

export default Footer;