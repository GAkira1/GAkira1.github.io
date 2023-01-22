import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import WineCard from '../../components/WineCard';
import { useLocalStorage } from 'react-use';
const dummyPrice = 200
function PosPage() {
    // window.localStorage['Wine']
    const [Wine, setWine] = useLocalStorage('Wine')
    let [WineTitles, setWineTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('reds')
    // let [cart, setCart] = React.useState([])
    let [cart, setCart] = useLocalStorage('cart', [])
    function addToCard(Wine) {
        // console.debug(Wine)
        cart.push(Wine)
        console.table(cart)
        setCart([...cart])
    }
    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/wines/${subMenu}`)
            .then(res => res.json())
            .then((Wine) => {
                for (let i = 0; i < Wine.length; i++) {
                    // console.log(Wine[i].title)
                    items.push(<WineCard
                            key={i}
                            image={Wine[i].image}
                            wine={Wine[i].wine}
                            description={Wine[i].description}
                            price={dummyPrice}
                            handleClick={() => { addToCard(Wine[i]) }}
                        />
                    )
                }
                setWineTitles(items)
            })
    }, [subMenu])
    return <Container><h1>POS</h1><ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => { setSubMenu('reds') }}>red</Button>
        <Button variant="secondary" onClick={() => { setSubMenu('whites') }}>white</Button>
        </ButtonGroup><Row><Col><Row>
        {WineTitles}</Row></Col><Col sm={3}><h2>Cart {Wine}</h2>
            {cart.map((item, i) => {
                return <Row key={i}><Col>{item.wine}</Col><Col>{dummyPrice}</Col></Row>
            })}<Row>
                Total: {cart.length * dummyPrice} Baht</Row></Col></Row></Container >
}
export default PosPage