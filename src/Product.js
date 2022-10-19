function Product(props){
    console.log(props)
    return <div>
        <h1>{props.title}😉</h1>
        <p>${props.amount}</p>
        <p>{props.married ? 'married' : 'GigaChad'}</p>
        <ul>
            <li>{props.address.city}</li>
            <li>{props.address.street}</li>
        </ul>
    </div>
}

export default Product