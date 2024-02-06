
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Header from "./Header";
import Card from "./RestrauntCard";
import { List } from "./data";
import useOnline from "./InternetConnect";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Second from "./Header2";



// function filterData(searchInput, restraunts){
//     return restraunts.filter((restraunt) => 
//       restraunt?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
//     );
//   }


const Body = () => {
    //     const [allRestro, setAllRestro] = useState([]);
    //     const [filteredRestro, setFilteredRestro] = useState([]);
    //     const [searchInput, setSearchInput] = useState("");

    //     useEffect(() => {
    //         getRestaurants();
    //     }, []);


    //     async function getRestaurants(){
    //         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //         const json = await data.json();
    //         console.log(json);
    //         console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0].info.id);

    //         setAllRestro(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    // setFilteredRestro(json.data?.cards[5].card?.card.gridElements.infoWithStyle.restaurants);
    //     }


    //     const offline = useOnline;
    //     if(!offline){
    //       return <h1>offline. please check our internet connection... </h1>
    //     }

    //     if(!allRestro) return null;
    //     if(filteredRestro?.length===0) return <Shimmer/>
    //     return(allRestro.length ===0) ? <Shimmer/>: ( 
    //             <>
    //             <div className="searchbar">

    //            <input type="text" placeholder="Search for Restraunts and Food" className="insearch"
    //             value={searchInput}
    //             onChange={(e) => {
    //                 setSearchInput(e.target.value);
    //             }}></input> 
    //             <a href="/"> <i class="fa fa-close" ></i></a>

    //              </div>

    //              <p className="para">No match Found</p>
    //              <div className='cardList'>
    //              {
    //                 filteredRestro.map(restraunt=>{
    //                     return(
    //                         <Link to ={"/restraunt/"+restraunt.info.id}
    //                         key={restraunt.info.id}>
    //                           <Card {...restraunt.info}/>
    //                         </Link>
    //                     )
    //                 })


    //              }

    //             </div>

    //             </>


    //         )



    return (
        <>
            <Second />

            <div className='cardList'>

              {/* <Link to="/menu"> <Card /></Link>  */}
<Card/>            </div>

        </>
    )
}

export default Body