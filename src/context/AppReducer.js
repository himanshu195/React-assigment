/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
      case 'REMOVE_PROJECT':
        return {
          ...state,
          allProjects: state.allProjects.filter(project => {
            return project.id !== action.payload;
          })
        }
      case 'ADD_PROJECT':
        return {
          ...state,
          allProjects: [action.payload, ...state.allProjects]
        }

        case 'EDIT_PROJECT':
          const updateUser = action.payload;
          const updateUsers = state.allProjects.map(project => {
            if (project.id === updateUser.id) {
              return updateUser;
            }
            return project;
          })
          return {
            ...state,
            allProjects: updateUsers
          }
  
      default:
        return state;
    }
  }