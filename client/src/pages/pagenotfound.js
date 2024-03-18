import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
const Pagenotfound=()=>{
  return(
    <Layout title={"404 page not found !!!"}>
      <div className="pnf">
        <h1 className="pnf-title"></h1>
        <h2 className="pnf-heading">Page not found !!!</h2>
        <Link to="/" className="pnf-btn">
      Back
      </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;