import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../../Api/api'
import {  StyleSelect  } from '../Selects/style'

export default function SelectsModel(props) {
    const dispatch = useDispatch()
    const [listModel, setListModel] = useState([])
    
    useEffect(() => {
      api.get(`api/OnlineChallenge/${props.typeSelect}`).then(response => {
       setListModel(response.data)
       
      })
    }, [props])

    const handleSelectModel = (e, type) => {
        const model = e.target.value
        dispatch({type:type, model})
    }
    return (
        <>
        <StyleSelect onChange={(event) => handleSelectModel(event, props.typeFunction )}>
                <option selected>{props.typeAction}</option>
                {listModel.map((model) => {
                return <option key={model.ID} value={model.ID}>{model.Name}</option>
                })}
        </StyleSelect>
            
        </>
    )
}
