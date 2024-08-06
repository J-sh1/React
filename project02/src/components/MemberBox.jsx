const MemberBox = ({teamName, memberName}) => {
    return(
        <div style = {{border : '1px solid black', margin : '2%', padding : '2%'}}>
            <h1>{teamName}</h1>
            <div>{memberName}</div>
        </div>
    )
}
export default MemberBox