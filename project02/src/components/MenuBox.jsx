const MenuBox = ({name, price}) => {

    // Case 1) 매개변수 props => props.name
    // Case 2) 객체 비구조화 할당 {속성이름} => 속성이름

    return(
    <div style = {{border : '1px solid black', margin : '2%', padding : '2%'}}>
        <h2>{name}</h2>
        <p>{price}원</p>
    </div>   
    )
}
export default MenuBox