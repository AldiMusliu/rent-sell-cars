import { useParams } from "react-router-dom";
import React from "react";
import { api} from "../../lib/api/";

const DashboardCar=()=>{
    const {carId}=useParams();
    const [car, setCar] = React.useState();
    const getCar = async () => {
      const result = await api.call({url:`/car/${carId}`, Method:'GET'});
       if(result.success){
        setCar(result.data);
       }
    };
    React.useEffect(() => {
      getCar();
    }, []);
    return(
        <div>
            <h2>{car?.name}</h2>
        </div>
    )
}
export default DashboardCar;