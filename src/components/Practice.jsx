import styled from "styled-components";
const Btn = styled.button`background-color: #00832c;`
const Div = styled.div`
background-color: #16a348; 
border: 1px solid #fff;
width: 250px;
height: 400px`
const Name = styled.h1`color: #fff;`
const Description = styled.p`color: #fff;`
export default function Practice(){
    return(
        <Div>
            <Name>Recepie</Name>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi temporibus sapiente laudantium a praesentium at doloremque dolor maiores vero voluptas.</Description>
        <Btn>Click Me</Btn>
        </Div>

    )
}