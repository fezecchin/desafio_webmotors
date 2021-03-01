import styled from 'styled-components';


export const BoxInput = styled.div`
   background: white;
   position: absolute;
   width: 450px;
   margin-left: 3rem;
   margin-top: 16px;

    @media screen and (max-width: 932px) {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 16px 0px 0px 23px;

    input {
      width: 70%;
    }

    select {
      width: 70%;
      margin-top: 1rem;
    }
  
   
`

export const IconPin = styled.img`
  width:25px;
  height:25px;
  background-color:white;
  position: absolute;
  margin: 5px;
 
`

export const InputLocation = styled.input`
   outline: none;
   border: 1px solid #F4F4F4;
   width:300px;
   height:2.1rem;
   background-color: white;
   text-align: center;
   border-radius: 4px; 
   font-size:1rem;
` 

export const SelectRange = styled.select`
padding: 5px;
font-size: 16px;
outline: none;
line-height: 1;
border:  1px solid #F4F4F4;
border-radius: 4px;
height: 34px;
background: transparent;
`

export const StyleSelect = styled.select`
width: 200px;
padding: 5px;
font-size: 16px;
outline: none;
line-height: 1;
border:  1px solid #F4F4F4;
border-radius: 4px;
height: 34px;
background: transparent;
margin-right: 1rem;


`

export const BoxAction = styled.div`
  background: white;
  width:848px;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;

  @media screen and (max-width: 932px) {
    flex-direction: column;
    margin: 80px 0px;
    display: flex;
    align-items: end;
  }

   
`
export const WhereSpan = styled.span`
   background: white;
   position: absolute;
   position: absolute;
   margin: 8px 0px 0px 44px;
   color: #dedede;
   
`

export const Search = styled.span`
background: white;
color: #cc2929;
font-family: sans-serif;
font-weight: bold;
cursor: pointer;
`

export const BoxSelect = styled.div`
width: 400px;
position: relative;
margin-top: 0.8rem;
background-color: white;
display: flex;
margin: 16px 0px 16px 507px;
justify-content: space-evenly;

@media screen and (max-width: 932px) {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 23px;

 

  select {
    width: 79%;
    margin-top: 1rem;
  }

  
`
export const BoxSelect1 = styled.div`
  width: 456px;
  background-color: white;
  display: flex;
  margin: 0px 0px 0px 40px;
  justify-content: space-evenly;
  position: absolute;

  @media screen and (max-width: 932px) {
   
    flex-direction: column;
    margin: 48px 0px 0px 0px;
  
   
  
    select {
    width: 70%;
    margin: 16px 0px 0px 17px;

    }

`

export const BoxVersion = styled.div`
  width: 389px;
  background: white;
  position: relative;
  margin: 0px 0px 12px 504px;

  @media screen and (max-width: 932px) {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0px 0px 0px 23px;
  
   
  
    select {
      width: 80%;
      margin-top: 1rem;
    }


`
export const SelectVersion = styled.select`
  width: 387px;
  padding: 5px;
  font-size: 16px;
  outline: none;
  line-height: 1;
  border:  1px solid #F4F4F4;
  border-radius: 4px;
  height: 34px;
  background: transparent;
  margin-right: 1rem;

   
`
