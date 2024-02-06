import { List } from "./data";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import RestrauntMenuData from "./RestrauntMenuData";

// const Card = ({ name, cuisines, cloudinaryImageId, lastMileTravelString, costForTwoString, avgRating }) => {
const Card = () => {
  return (
    <>
      {List
        //  .filter((data)=>{
        //     return searchInput.toLowerCase()===''? data:data.name.toLowerCase().includes(searchInput);
        //   })
        .map((data) => {
          return (

            <div className="col-md-3 mt-5">
              <Link to={"/menu/" + data.id} key={RestrauntMenuData.id} style={{ textDecoration: "none" }}>
                {" "}
                <div className="card">
                  <img
                    className="card-img-top"
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                      data.imageId
                    }
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 className="c-title"> {data.name}</h5>

                    <p
                      className="c-text"
                      data-toggle="tooltip"
                      title={data.cuisines}
                    >
                      {data.cuisines.substring(0, 40)}
                      {data.cuisines.length > 40 ? "....." : ""}
                    </p>

                    <div className="card-footer">
                      <p className="star-icon mb-0">
                        <i className="fa fa-star "></i> {data.rating}
                      </p>
                      {/* <p style={{ fontSize: "13px", fontWeight: "bold" }}>{lastMileTravelString}</p> */}

                      <p
                        className="mb-0"
                        style={{ fontSize: "13px", fontWeight: "bold" }}
                      >
                        {data.cost}
                      </p>
                      
                      <button className="img-btn">Add</button>
                    </div>

                    {/* <button className="menu_button">menu</button> */}

                    {/* <Link to ="/menu"> <button>menu</button></Link> 

                    <Link to={"/menu/"+RestrauntMenuData.id}
                  key = {RestrauntMenuData.id} >
                  //<RestrauntCard {...restaurant.info}/>
                  </Link> */}
                  </div>
                </div> </Link>
            </div>
          );
        })}
    </>
  );
};

export default Card;
