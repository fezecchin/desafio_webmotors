import React from 'react'
import Pin from '../../assets/images/pin_icon.svg'
import BtnOffer from '../ButtonOffer'
import Checkbox from '../Checkbox'
import { IconPin,WhereSpan,BoxVersion, InputLocation, SelectRange, StyleSelect, BoxInput, BoxAction, Search, BoxSelect, BoxSelect1 } from './style'
import {FaAngleRight} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import SelectsApi from '../SelectsApi'
import SelectsVersion from '../SelectsApi/SelectsVersion'
import SelectsModel from '../SelectsApi/SelectsModel'
import ButtonClear from '../ButtonClear'

export default function Selects() {
  const makeSelected = useSelector(state => state.makeSelected)
  
 
  return (
    <>

      <Checkbox />
      <BoxInput>
        <IconPin src={Pin} alt="localização" />
        
        <WhereSpan>Onde:</WhereSpan>
        <InputLocation
          value=" São Paulo - SP"
        />
         <SelectRange>
          <option>Raio: 100km</option>
        </SelectRange>
        </BoxInput>

        
        <BoxSelect>
          <SelectsApi typeSelect={'Make'} typeFunction={'SELECT_MAKE'} typeAction={'Marca:Todas'}/>
          <SelectsModel typeSelect={`Model?MakeID=${makeSelected}`} typeFunction={'SELECT_MODEL'} typeAction={'Modelo: Todos'  }/>
        </BoxSelect>

       <BoxSelect1>
        <StyleSelect>
          <option>Ano Desejado</option>
        </StyleSelect>
        <StyleSelect>
          <option>Faixa de Preço</option>
        </StyleSelect>
        
        </BoxSelect1>

        <BoxVersion >
          <SelectsVersion typeSelect={`Version?ModelID=${makeSelected} `} typeFunction={'SELECT_VERSION'} typeAction={'Versão'}/>
      </BoxVersion>

      
      <BoxAction>
        <Search>
          <FaAngleRight 
          style={{color: "#cc2929", background: "white"}}/>
          Busca Avançada
        </Search>
        <ButtonClear  />
        <BtnOffer/>
     </BoxAction> 
    </>
  )
}
