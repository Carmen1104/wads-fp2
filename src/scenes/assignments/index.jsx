import React, { useState, useRef, useEffect } from "react";
import { Box } from '@mui/material'
import FilterButton from "../../components/FilterButton";
import Todo from "../../components/Todo";
import Header from '../../components/Header'
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: (assignment) => !assignment.completed,
  Completed: (assignment) => assignment.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Tasks(props) {
  const [assignments, setassignments] = useState(props.assignments);
  const [filter, setFilter] = useState("All");

  function toggleassignmentCompleted(id) {
    const updatedassignments = assignments.map((assignment) => {
      // if this assignment has the same ID as the edited assignment
      if (id === assignment.id) {
        // use object spread to make a new obkect
        // whose `completed` prop has been inverted
        return { ...assignment, completed: !assignment.completed };
      }
      return assignment;
    });
    setassignments(updatedassignments);
  }

  
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
          <Box m="20px">
            <Header  title="MY ASSIGNMENTS" subtitle="Find and submit all your assignments here" />

            

          </Box>
      </main>
    </div>
    
  );
}

export default Tasks;