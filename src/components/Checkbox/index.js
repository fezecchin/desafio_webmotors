import React from 'react'
import {LabelNew, StyleInput} from './style'


const vehiclesArray = ['Novos', 'Usados'];

export default function Checkbox() {
     const [vehiclesTypes, setVehiclesTypes] = React.useState([]);
     

     function handleChange({target}) {
         if(target.checked) {
          setVehiclesTypes([...vehiclesTypes, target.value])
         } else {
             setVehiclesTypes(vehiclesTypes.filter((vehiclesTypes) => {
                return vehiclesTypes !== target.value;
             })
            )
          }
        }
        
    return (
      <>
       {vehiclesArray.map(types => <LabelNew key={types}>
        <StyleInput 
             type="checkbox"
             value={types}
             checked={vehiclesTypes.includes(types)}
             onChange={handleChange}
             />
             {types}
         </LabelNew>           
        )}
       
      </>
    )
}
