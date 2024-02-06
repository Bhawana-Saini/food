import { useState, useEffect } from "react";
import { List } from "./data";




function filterData(searchInput, res) {
    return res.filter((restro) => restro?.data.name?.toLowerCase()?.includes(searchInput?.toLowerCase()));
}
const Search = () =>{
    // const [allRestro, setAllRestro] = useState([]);
    // const [filteredRestro, setFilteredRestro] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    return(
    <>
    
        <div  className="data-mid res-mid ">
                    <input type="text" placeholder="Search for Restraunts and Food" className="search"
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }} />
                    {/* <button className="btn" >
                        <i className="fa fa-search " ></i></button>
                    
                    <div className="res-search">

                        <i className="fa fa-search">Search</i>
                    </div> */}
                    
                </div>
                <div className="cardList">
                        {
                            List.filter((value)=>{
                                if(searchInput==""){
                                    return value;
                                }
                                else if(value.name.toLowerCase().includes(searchInput.toLowerCase())){
                                    return value;
                                }
                            })
                            .map(data =>{
                                return(
                                    <div className='col-md-3 mt-5'>
                                    <div className="card"  >
                                        <img className="card-img-top" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + data.imageId} alt="Card image" />
                                        <div className="card-body">
                                            <h5 className="c-title"> {data.name}</h5>
                                            <p className="c-text">{data.cuisines}</p>
                        
                                            <div className="card-footer">
                        
                                                <p className="star-icon"><i className="fa fa-star " ></i> {data.rating}</p>
                                                {/* <p style={{ fontSize: "13px", fontWeight: "bold" }}>{lastMileTravelString}</p> */}
                                    
                                                <p style={{ fontSize: "13px", fontWeight: "bold" }}>{data.cost}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
    
    
</>)
}
export default Search