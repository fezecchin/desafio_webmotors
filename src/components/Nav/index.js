import React from 'react'
import  ButtonSell from '../ButtonSell'
import { NavContent, IconCar, IconMoto, NavIcon, NavUl, Paragraph, List, BoxButton, LinkBuy} from './style'
import Car from '../../assets/images/car.svg'
import Moto from '../../assets/images/motorcycle.svg';



export default function Nav() {
    return (
        <NavContent>
            <NavIcon>
                <NavUl>
                    <IconCar src={Car} alt="carro"/>
                    <Paragraph>Comprar</Paragraph>
                    <List><LinkBuy href="http://" alt="" target="blank">Carros</LinkBuy></List>
                </NavUl>  
            </NavIcon> 

            <NavIcon>
               <NavUl>
                    <IconMoto src={Moto} alt='moto'/>
                    <Paragraph>Comprar</Paragraph>
                    <List>Motos</List>
               </NavUl>
            </NavIcon>

            <BoxButton>
              <ButtonSell/>
            </BoxButton>
         </NavContent>
    )
}
