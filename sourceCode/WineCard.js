import * as React from 'react'
import { Card, Button } from 'react-bootstrap';
function WineCard(props) {
    const { wine, image, description, price, handleClick } = props;
    return (<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body><Card.Title>{wine} - {price} Baht</Card.Title>
            {/* <Card.Text>description}</Card.Text> */}
            <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
        </Card.Body>
    </Card>
    )
}
export default WineCard 