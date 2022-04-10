import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
 function SideBar() {
    return (
        <div>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/epics">Epics</Nav.Link>
            </Nav>
        </div>
    );
}

export default SideBar;



