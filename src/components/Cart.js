const Cart = () => {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
        return (<div>
            <h2>Panier</h2>
            <ul>
            <li>Monstera : {monsteraPrice}eu</li>
            <li>Lierre: {ivyPrice}eu</li>
            <li>Fleurs: {flowerPrice}eu</li>
            </ul>
            Total: {monsteraPrice + ivyPrice + flowerPrice}eu
        </div>)
}

export default Cart