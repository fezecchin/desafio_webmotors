import React from 'react'
import { useDispatch } from 'react-redux'
import {FilterClean} from './style'

export default function ButtonClear() {
    
    const dispatchClear = useDispatch()
    
        function handleClear() {
        const clear = []
        dispatchClear({type:'SELECT_CLEAR', clear });
     }
    return (
        <>
          <FilterClean onClick={handleClear}>Limpar Filtros</FilterClean>  
        </>
    )
}
