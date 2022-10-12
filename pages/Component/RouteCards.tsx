import {Row,Col,Card} from 'react-bootstrap'
import Link  from 'next/link'
import {Property} from 'csstype';

type route_obj = {
    color:NonNullable<Property.Color>
    route_name:NonNullable<string>,
    route_startpoint:NonNullable<string>,
    route_endpoint:NonNullable<string>
  }
  
  const route_variation : route_obj[] = [
    {color:"red",route_name:"中央",route_startpoint:"フォルテ",route_endpoint:"若松"},
    {color:"blue",route_name:"西部",route_startpoint:"野々市市役所",route_endpoint:"藤平田南"},
    {color:"green",route_name:"北部",route_startpoint:"フォルテ",route_endpoint:"本町6丁目"},
    {color:"yellow",route_name:"南部",route_startpoint:"野々市市役所",route_endpoint:"矢作西"}
  ]

const RouteCards = () =>{
    return (
    <Row xs={2} md={2} className="g-2">
          {Object.keys(route_variation).map((_, idx) => (
          <Col>
            <Card>
              {/*<Card.Img variant="top" src="https://thumb.ac-illust.com/6c/6c49457122b22005a8dcacaac54d2c17_t.jpeg" />*/}
              <Card.Body >
              <Card.Title>{route_variation[idx].route_name+"ルート"}</Card.Title>
                <Card.Text>
                  {route_variation[idx].route_startpoint}~{route_variation[idx].route_endpoint} 
                </Card.Text>
                <Link href="/">
                  <Card.Text>
                    このルートのバス停一覧を見る
                  </Card.Text>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          ))}
    </Row>
    )
}
export default RouteCards