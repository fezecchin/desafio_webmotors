import styled from 'styled-components';

export const NavContent = styled.div`
   width: 933px;
   margin: 0 auto;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding-top: 16px;
      
`
export const NavIcon = styled.div`
    margin-top: 2rem;
    margin-left: 2rem;
    @media screen and (max-width: 932px) {
      flex-direction: column;
      
`

export const NavUl = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    border-bottom: 3px solid #cc2929;
    padding-bottom: 1rem;
    @media screen and (max-width: 932px) {
      flex-direction: column;
      margin:0px;
`

export const IconCar = styled.img`
  width:40px;
  height:40px;
  position: absolute;
  margin-top: 15px;
`

export const Paragraph = styled.p`
  margin-left: 50px;
  text-transform: uppercase;

  @media screen and (max-width: 932px) {
    flex-direction: column;
    margin: -6px 0px -27px 55px;
    font-size: 1rem;

  
`

export const LinkBuy = styled.a`
  text-decoration: none;
  color: #cc2929;

`

export const List = styled.li`
  margin-left: 47px;
  font-size: 2em;
  text-transform: uppercase;
  color: #cc2929;

  @media screen and (max-width: 932px) {
    flex-direction: column;
    margin-top: 34px;
    font-size: 1.5rem;
`


export const IconMoto = styled.img`
  width:40px;
  height:40px;
  position: absolute;
  margin-top: 15px;
  
`
export const BoxButton = styled.div`
margin-left:280px;
padding-top: 34px;

@media screen and (max-width: 932px) {
  flex-direction: column;
  position: absolute;
  margin: 0rem 0rem -12rem 5rem;

`
