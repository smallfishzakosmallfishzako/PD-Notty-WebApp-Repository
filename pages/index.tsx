import Head from 'next/head'
//import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Col,Row,Card, Button } from "react-bootstrap";
import Link from 'next/link';
import {Property} from 'csstype';
import type {NextPage} from 'next';
import {useSession,signIn,signOut} from 'next-auth/react'
import NAVBAR from './Component/Navbar';
import RouteCards from './Component/RouteCards'
import HEAD from './Component/HEAD';

const Home:NextPage = () => {
    return (
      <div>
        <NAVBAR/>
        <HEAD/>
        
        <div style={{padding : "15px"}}/>
          <RouteCards/>
          <div style={{padding : "15px"}}/>
  
          <Row md={2} className='g-2'>
          <Card>
            <Card.Body>
              <Link href="./Events">
              <Card.Title>
                イベント一覧
              </Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Row>
      </div>
    )
}

export default Home