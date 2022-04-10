import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/GlobalState';
import * as ProjectConstants from '.././shared_Components/constants';

const initialState = {
  title:"",
  startDate:"",
    endDate:""
};
  
const ModalPopupComponent =(props)=> {
  
    const [{title,startDate,endDate}, setState] = useState(initialState);
    const { addProject } = useContext(GlobalContext);

    const onChange = e => {
      const { name, value } = e.target;
      setState(prevState => ({ ...prevState, [name]: value }));
    };
     const handleClose = (e) => {
             props.onSubmitForm(false);
             setState({ ...initialState });
       }  
     const handleSubmit =(event)=>{
          event.preventDefault();
           let formData ={
            id:Math.random(),
            projectTitle:title,
            startDate:startDate,
            endDate:endDate,
            epics:[]
          }
          addProject(formData);
          props.onSubmitForm(false);
          setState({ ...initialState });
      }


    return (
      <>
        <Modal show={props.show}
        backdrop="static"
        keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>{ProjectConstants.addProject}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>{ProjectConstants.projectTitle}</Form.Label>
                <Form.Control
                required
                  type="text"
                  autoFocus
                  name="title"
                  value={title}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="startDate">
                <Form.Label>{ProjectConstants.startDate}</Form.Label>
                <Form.Control
                required
                  type="date"
                  name="startDate"
                  value={startDate}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="endDate">
                <Form.Label>{ProjectConstants.endDate}</Form.Label>
                <Form.Control
                required
                  type="date"
                  name="endDate"
                  value={endDate}
                  onChange={onChange}
                />
              </Form.Group>
              <Button variant="primary"type='submit'>
              {ProjectConstants.saveChanges}
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {ProjectConstants.close}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    
}

export default ModalPopupComponent;




// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';


// const initialState = {
//     projectTitle:"",
//     startDate:"",
//     endDate:""
// };
// class ModalPopupComponent extends React.Component {
  
//     constructor(props){
//         super(props)
//         this.state=initialState
//     }

//     handleClose = (e) => {
//              this.props.onSubmitForm(false);
//              this.setState(initialState);

//        }  
  
//       handleChange = event =>{
//           this.setState({
//               [event.target.id]:event.target.value
//           })
//       }

//       handleSubmit =(event)=>{
//           event.preventDefault();
//            let formData ={
//             projectTitle:this.state.projectTitle,
//             startDate:this.state.startDate,
//             endDate:this.state.endDate
//           }
//           this.props.onSubmitForm(formData);
//           this.setState(initialState);

//       }

//     render() {
//     return (
//       <>
//         <Modal show={this.props.show}
//         backdrop="static"
//         keyboard={false}
//         onHide={this.componentDidUpdatehandleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Add a new project</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form onSubmit={this.handleSubmit}>
//               <Form.Group className="mb-3" controlId="projectTitle">
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control
//                 required
//                   type="text"
//                   autoFocus
//                   value={this.state.projectTitle}
//                   onChange={this.handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="startDate">
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control
//                 required
//                   type="date"
//                   name="Start date"
//                   value={this.state.startDate}
//                   onChange={this.handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="endDate">
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control
//                 required
//                   type="date"
//                   name="End date"
//                   value={this.state.endDate}
//                   onChange={this.handleChange}
//                 />
//               </Form.Group>
//               <Button variant="primary"type='submit'>
//               Save Changes
//             </Button>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//     }
// }

// export default ModalPopupComponent;
