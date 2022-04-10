import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  allProjects: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeProject = (id) => {
    dispatch({
      type: 'REMOVE_PROJECT',
      payload: id
    })
  }

  const addProject = (project) => {
    dispatch({
      type: 'ADD_PROJECT',
      payload: project
    })
  }

  const editProjectEpics = (project) => {
    dispatch({
      type: 'EDIT_PROJECT',
      payload: project
    })
  }
  
  return (
    <GlobalContext.Provider value={{
      allProjects: state.allProjects,
      removeProject,
      addProject,
      editProjectEpics
    }}>
      {children}
    </GlobalContext.Provider>
  )
}