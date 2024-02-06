import { useParams } from "react-router-dom";
import RestrauntMenuData from "./RestrauntMenuData";






const Menu = (id) => {

    const menuId = useParams();
    const RestoMenuDetails = RestrauntMenuData[menuId.id];


    // console.log("menuId ---- "+ menuId);
    // console.log("id  ---- "+ id);



    console.log("RestoMenuDetails ------ " + RestoMenuDetails);

    return (
        <>
            {
                RestrauntMenuData.map(item => {



                    if (item.list_id === parseInt(menuId.id))

                        return (
                            <>
                                <div style={{ width: "55%", margin: "3% 22% " }}>
                                    <div className="restro">
                                        <div className="name">
                                            <h6>{item.name}</h6>
                                            <p>{item.cusines}</p>
                                        </div>
                                        <button className="btn" style={{ border: "1px solid" }}><i className="fa fa-star  " ></i>{item.rating}
                                            <hr />
                                            <p>{item.ratingString}</p>
                                        </button>
                                    </div>

                                    <div className="price"><i className="fa fa-rupee"></i> {item.price}</div>
                                    <hr />
                                    <h6 className="price">Recommended</h6><br />
                                    <div className="menu-list">
                                        <div className="food-name">
                                            <h5>{item.dish1}</h5>
                                            <p>{item.price1} </p>
                                        </div>
                                        <div className="menu-img">
                                            <img alt={item.dish1} src={item.image1} />

                                        </div>
                                    </div>
                                    <hr />
                                    <div className="menu-list">
                                        <div className="food-name">
                                            <h5>{item.dish2}</h5>
                                            <p>{item.price2} </p>
                                        </div>
                                        <div className="menu-img">
                                            <img alt={item.dish2} src={item.image2} />

                                        </div>
                                    </div>
                                    <hr />
                                    <div className="menu-list">
                                        <div className="food-name">
                                            <h5>{item.dish3}</h5>
                                            <p>{item.price3} </p>
                                        </div>
                                        <div className="menu-img">
                                            <img alt={item.dish3} src={item.image3} />

                                        </div>

                                    </div>
                                    <hr />
                                    <div className="menu-list">
                                        <div className="food-name">
                                            <h5>{item.dish4}</h5>
                                            <p>{item.price4} </p>
                                        </div>
                                        <div className="menu-img">
                                            <img alt={item.dish4} src={item.image4} />

                                        </div>

                                    </div>
                                    <hr />
                                    <div className="menu-list">
                                        <div className="food-name">
                                            <h5>{item.dish5}</h5>
                                            <p>{item.price5} </p>
                                        </div>
                                        <div className="menu-img">
                                            <img alt={item.dish5} src={item.image5} />

                                        </div>

                                    </div></div>
                            </>
                        )
                })



            }
        </>
    )
}

export default Menu;