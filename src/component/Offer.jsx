 const offer_data =[
    {
        name:"Domino's Pizza",
        cuisines:'Pastas,Chinese,North Indian,Ice Cream,Pizzas,Biryani',
        imageId:'https://i.pinimg.com/originals/a7/73/1a/a7731aeda345ee42c0fc4bb19d328718.jpg',
        rating:'4.3',
        discount:'₹100 of above ₹199'
    },
    {
        name:"KFC",
        cuisines:'Burgers, Biryani',
        imageId:'https://www.forcesdiscountoffers.co.uk/wp-content/uploads/2021/04/kfc-military-discount-2048x1151.jpg',
        rating:'4.3',
        discount:'20% OF UPTO ₹50'
    },
    {
        name:"Daawat Hotel Family Reataurant",
        cuisines:'Chinese,North Indian,Biryani',
        imageId:'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/g/i/p103484-164629244562206ddd3bd5a.jpg',
        rating:'3.6',
        discount:'50% OFF UPTO ₹80'
    },
    {
        name:"Madan Ji Halwai & Fast Food",
        cuisines:'Bakery,Desserts,Chinese,Burgers,Pizzas,Pastas',
        imageId:'https://th.bing.com/th/id/R.492f9c7edb34968902d268ec3f774fc7?rik=D4%2bQNWNN5Anw5w&riu=http%3a%2f%2fimg.tasteofcity.com%2ftasteimages%2f201703%2fimage_original%2f63EC002DE7CE6EBE_1.jpg&ehk=P9tfrWzZMWpOPl9c6xlfELkpRYO%2fve4AAZ9vP8PGqpA%3d&risl=&pid=ImgRaw&r=0',
        rating:'3.8',
        discount:'50% OFF UPTO ₹80'
    },
    {
        name:'Dosa Plaza',
        cuisines:'Pastas,Chinese,South Indian,Ice Cream,Pizzas',
        imageId:'https://th.bing.com/th/id/OIP.O3A3BTULImI_3AYAAS_gSwHaDw?pid=ImgDet&rs=1',
        rating:'4.2',
        discount:'50% OFF UPTO ₹80'
    },
    {
        name:"Royal Baker's And Lassi Corner",
        cuisines:'Pastas,Burgers,South Indian,Ice Cream,Pizzas,Fast Food,Bakery',
        imageId:'https://th.bing.com/th/id/OIP.arRCVBwonXjJISf0NBwgiQHaHa?pid=ImgDet&rs=1',
        rating:'3.8',
        discount:'50% OFF UPTO ₹80'
    },
    {
        name:'The Belgian Waffle Co.',
        cuisines:'Waffle,Ice Cream,Desserts,Beverages',
        imageId:'https://th.bing.com/th/id/OIP.mpaYGxyHIu1vwX_awyhzsgHaE8?w=262&h=180&c=7&r=0&o=5&pid=1.7',
        rating:'4.2',
        discount:'50% OFF UPTO ₹80'
    },
    {
        name:'Milan Restaurant',
        cuisines:'Desserts',
        imageId:'https://milanfoodieinsider.com/wp-content/uploads/2020/07/Ristoranti-vegetariani-e-vegani-a-Milano-7-Fairouz.png',
        rating:'	4.3',
        discount:'50% OFF UPTO ₹80'
    },
    {
        name:"Milky way ice cream palour",
        cuisines:'Ice Cream,Sweets,beverages',
        imageId:'https://th.bing.com/th/id/OIP.4DGd-_RHf2I40HkNq_xJpgHaFC?pid=ImgDet&rs=1',
        rating:'3.8',
        discount:'50% OFF UPTO ₹80'
    },
    {
        name:"M.G Bakery",
        cuisines:'Bakery',
        imageId:'https://th.bing.com/th/id/R.aa7e0c844f265bfac4309849681abede?rik=hl9UOkYaHiAH6g&riu=http%3a%2f%2featmorechocolate.com%2fwp-content%2fuploads%2f2015%2f04%2fOreo-Fudge-Cheesecake.jpg&ehk=8m%2fl4jam3BGHmpWnnE5coJcqm7qKBvEntbVtx3dh%2ffk%3d&risl=&pid=ImgRaw&r=0',
        rating:'3.8',
        discount:' ₹125 OFF ABOVE ₹199'
    },
    {
        name:"Indian Pizza House",
        cuisines:'Burgers,Pizzas,Italian,Waffles',
        imageId:'https://www.metroalive.com/images/720x580/9652-9800.jpg',
        rating:'4.0',
        discount:'60% OFF UPTO ₹120'
    },
    {
        name:"Mast banarasi Paan",
        cuisines:'Paan-Asian',
        imageId:'https://th.bing.com/th/id/OIP.Xp-4s9gs0F-4MwiCcayFpQHaDE?pid=ImgDet&rs=1c',
        rating:'4.4',
        discount:'50% OFF UPTO ₹80'
    }
 ] 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const Offer = ()=>{
    return(
        <>
        <div className="offer-card">
           {
        offer_data
        .map(item =>{
            return(
                
                <div className='col-md-3 mt-5 '>
                <div className="card"  >
                    <img className="card-img-top" src={item.imageId} alt="Card image" />
                   <div className="bottom-left">{item.discount}</div>
                    <div className="card-body">
                        <h5 className="c-title"> {item.name}</h5>
                        <p className="c-text">{item.cuisines}</p>
    
                        <div className="card-footer">
    
                            <p className="star-icon"><i className="fa fa-star " ></i> {item.rating}</p>
                       
                        </div>
                    </div>
                </div>
            </div>
            )
        })
       }
    </div>

        </>
    )
}
export default Offer;