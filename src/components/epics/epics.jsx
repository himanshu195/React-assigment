import React, { useContext, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'
import { GlobalContext } from "../../context/GlobalState";
import Badge from 'react-bootstrap/Badge';
import './epics.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import * as ProjectConstants from '../../shared_Components/constants';
import EmptyPage from "../../shared_Components/empty_page";
import { v4 as uuid } from 'uuid';

const Epics = () => {
  const { allProjects, editProjectEpics } = useContext(GlobalContext);

  const addEpic = (object, index) => {
    let currentProject = object;     
    const unique_id = uuid();
    const small_id = unique_id.slice(0,4)
    let epic = {
      name: `Project :${index+1}, Epic:${small_id}`,
      epicId: Math.random()
    }
    currentProject.epics.push(epic);
    editProjectEpics(currentProject);

  }

  const removeEpic = (project, epic, index) => {
    let currentProject = project;
    let allEpic = currentProject.epics;
    allEpic = allEpic.filter(e => e.epicId !== epic.epicId);
    currentProject.epics = allEpic;
    editProjectEpics(currentProject);
  }

  return (
    <Container className="main">
      <Badge className="epic_cls" bg="info">{ProjectConstants.epics}</Badge>{' '}
      {allProjects.length > 0 ? 
      <Accordion>
        {allProjects.map((object, i) =>
          <Accordion.Item key={i} eventKey={i}>
            <Accordion.Header> {ProjectConstants.singleProject} : {i + 1} </Accordion.Header>
            <Accordion.Body>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>{object.projectTitle}
                    <span className="flot_right"><Badge className="bg_cls" bg="secondary" onClick={() => addEpic(object, i)}>+</Badge>{ProjectConstants.addEpic}</span>
                  </Card.Title>
                  
                  {object.epics.map((epics, j) =>
                    <Row key={j}>
                      <Col md={5}>
                        <Form.Group className="mb-3" controlId="name">
                          <Form.Control
                            disabled
                            readOnly
                            value={epics.name}
                            type="name" placeholder="Epic name" />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Select>
                          <option>Priority</option>
                        </Form.Select>
                      </Col>
                      <Col md={3}>

                        <Badge onClick={() => removeEpic(object, epics, j)} bg="info">{ProjectConstants.deleteValue}</Badge>
                      </Col>
                    </Row>
                  )}

                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>
      : <EmptyPage errorMessage={ProjectConstants.noEpic}/>}
    </Container>
  );

}


export default Epics;
