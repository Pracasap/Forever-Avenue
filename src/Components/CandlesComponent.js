import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Candles(props) {
    const candles = props.candles.map(candle => {
        return (
            <div key={candle.id} className="col-md-4 p-3">
                <RenderCandles candle={candle} />
            </div>
        )
    })
    return (
        <div className="container-fluid products">
            <div className="container pb-5">
                <div className="row pt-5">
                    <div className="col-2 col-md-1 backIcon">
                        <Link to={ `/shop` }>
                            <ion-icon name="chevron-back-outline" />
                        </Link>
                    </div>
                    <div className="col">
                        <h3>
                            Scented Candles
                        </h3>
                    </div>
                </div>
                <div className="row" style={{ borderRadius: 2 }}>
                        {candles}
                </div>
            </div>
        </div>
    )
}

const RenderCandles = ({candle}) => {
    return (
        <Card className="shadow">
            <div className="card-img-div">
                <img width="100%" src={candle.image} alt={candle.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{candle.name} - {candle.price}</h4></CardTitle>
            <CardText>{candle.description}</CardText>
            <hr></hr>
            <div className="d-flex justify-content-center">
                <Link to={ `/shop` }>
                    <Button className="btn btn-full btn-lg">Add To Cart</Button>
                </Link>
            </div>
            </CardBody>
        </Card>
    )
}

export default Candles;