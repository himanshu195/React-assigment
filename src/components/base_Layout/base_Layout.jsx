import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from "../side_Bar/side_Bar";
import RouteConfig from "../../project_routes/route";
class BaseLayout extends React.Component {
    constructor(props){
        super(props)
        this.state={};
    }
    render() {
      return(
        <Container>
        <Row>
          <Col sm={2}><SideBar/></Col>
          <Col sm={10}><RouteConfig/></Col>
        </Row>
      </Container>
        );
    }
}


export default BaseLayout;
