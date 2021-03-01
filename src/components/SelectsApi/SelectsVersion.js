import React, { useEffect, useState } from 'react'
import {  useDispatch } from 'react-redux'
import api from '../../Api/api'
import {  SelectVersion  } from '../Selects/style'

export default function SelectsVersion(props) {
    const dispatch = useDispatch()
    const [listVersion, setListVersion] = useState([])

    
    

    useEffect(() => {
        api.get(`api/OnlineChallenge/${props.typeSelect}`).then(response => {
            setListVersion(response.data)
        })

    }, [props])
     //console.log("VERSÃO" + listVersion)

    const handleSelect = (e, type) => {
        const version = e.target.value
        dispatch({type:type,version})
    }
    return (
        <>
          <SelectVersion onChange={(event) => handleSelect(event, props.typeFunction)}>
            <option selected>{props.typeAction}</option>
            {listVersion.map((versions) => {
                return <option key={versions.ID} value={versions.ID}>{versions.Name}</option>
            })}       
        </SelectVersion>
        </>
    )
}
