import data from "../data/products";
import React from 'react';

function Products() {
    const print = () => {
      return
     }
  return (
    <div className="container" style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
      {data.map((elem) => {
        return (
          <div className=" col-lg-2 col-md-3 col-sm-6 my-2 px-3" style={{ display: "flex", flexWrap: "wrap" }}>
            <center>
              <img
                src={elem.image}
                width="120px"
                height="120px"
                alt="error"
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  margin: "auto",
                }}
              />
              <button className="btn btn-outline-success btn-sm" style={{ width: "120px" }}>
                Add to Cart
              </button>
            </center>
            <div style={{ fontSize: "14px" }}>Category - {elem.category.toUpperCase()}</div>
            <div style={{ fontSize: "14px" }}>Price - ${elem.price} </div>
            <div style={{ fontSize: "14px" }}>
              Rating - {elem.rating["rate"]} and {elem.rating["count"]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products
