import React, { useContext, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import './add_project.css';
import ModalPopupComponent from "../../shared_Components/modalPopup";
import { GlobalContext } from "../../context/GlobalState";
import * as ProjectConstants from '../../shared_Components/constants';
import EmptyPage from "../../shared_Components/empty_page";

const AddProject =()=> {
  
  const [showModal, setModalvalue] = useState(false);
  const { allProjects, removeProject } = useContext(GlobalContext);

 const updateProject = (project) => {
  setModalvalue(project);
  }

 const openModal = (e) => {
  setModalvalue(true);
  }
    return (
      <Container>
        <h1>{ProjectConstants.projects}</h1>
        <h3>
          <Badge onClick={openModal} className="cursor_cls" bg="secondary">+</Badge> {ProjectConstants.addNewProject}
        </h3>
        {allProjects.length > 0 ?
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>{ProjectConstants.projectTitle}</th>
                <th>{ProjectConstants.startDate}</th>
                <th>{ProjectConstants.endDate}</th>
                <th>{ProjectConstants.deleteValue}</th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((object, i) =>
                <tr key={i}>
                  <td>{object.projectTitle}</td>
                  <td>{object.startDate}</td>
                  <td>{object.endDate}</td>
                  <td onClick={() => removeProject(object.id)}>{ProjectConstants.deleteValue}</td>
                </tr>
              )}
  
            </tbody>
          </Table>
        :  <EmptyPage errorMessage={ProjectConstants.noProject}/>}
    
        <ModalPopupComponent show={showModal} onSubmitForm={updateProject} />
      </Container>
    );
}




export default AddProject;


// import React from "react";
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Badge from 'react-bootstrap/Badge';
// import './add_project.css';
// import ModalPopupComponent from "../../shared_Components/modalPopup";
// import { GlobalContext } from '../../context/GlobalState';


// class AddProject extends React.Component {
  
//   constructor(props) {
//     super(props)
//     this.state = {
//       projectList: [],
//       showModal: false
//     }
//   }

//   openModal = (e) => {
//     this.setState({
//       showModal: true
//     })
//   }
//   render() {
//     return (
//       <Container>
//         <h1>Projects</h1>
//         <h3>
//           <Badge onClick={this.openModal} className="cursor_cls" bg="secondary">+</Badge> Add new project
//         </h3>
//         <Table striped bordered hover size="sm">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.projectList.map((object, i) =>
//               <tr key={i}>
//                 <td>{object.projectTitle}</td>
//                 <td>{object.startDate}</td>
//                 <td>{object.endDate}</td>
//                 <td onClick={() => this.removeProject(object)}>Delete</td>
//               </tr>
//             )}

//           </tbody>
//         </Table>
//         <ModalPopupComponent show={this.state.showModal} onSubmitForm={this.updateProject} />
//       </Container>

//     );
//   }

//   updateProject = (project) => {
//     if (project) {
//       this.setState(prevState => ({
//         projectList: [...prevState.projectList, project],
//         showModal: false 
//       }))
//     }
//     else {
//       this.setState({ showModal: false });
//     }
//   }


//   removeProject =(e)=> {
//     let array = [...this.state.projectList]; // make a separate copy of the array
//     let index = array.indexOf(e)
//     if (index !== -1) {
//       array.splice(index, 1);
//       this.setState({projectList: array});
//     }
//   }
// }




// export default AddProject;
