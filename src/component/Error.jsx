import { useRouteError } from "react-router-dom"


const Error = () => {
const errr = useRouteError();



    return(

        <div className="er">
            
            <h3>{errr.status + " : " + errr.statusText}</h3>
            <p>Something went wrong </p>
        
           <button> <a href="/">GO Back</a></button>
      
        </div>
    )
}
export default Error