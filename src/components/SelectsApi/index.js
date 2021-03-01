import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../Api/api'
import {  StyleSelect,  } from '../Selects/style'


export default function SelectsApi(props) {
    const dispatch = useDispatch()
    const [list, setList] = useState([])
    const state = useSelector(state=>state)
    useEffect(() => {
      api.get(`api/OnlineChallenge/${props.typeSelect}`).then(response => {
        setList(response.data)
      })
    }, [props,state])
    
     
    const handleSelect = (e, type) => {
       const make = e.target.value
       dispatch({type:type, make})
    }
   
    

    return (
        <>
            <StyleSelect onChange={(event) => handleSelect(event, props.typeFunction )}>
                <option selected>{props.typeAction}</option>
                
                {list.map((make) => {
                return <option key={make.ID} value={make.ID}>{make.Name}</option>
                })}
            </StyleSelect>
            
        </>
    )
}
