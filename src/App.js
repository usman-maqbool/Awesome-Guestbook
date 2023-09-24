// import { Grid } from "@mui/material";
import { Grid } from "@mui/material";
import "./App.css";
import Appbar from "./components/Appbar";
import AddVisitor from "./components/AddVisitor";
import VisitorTable from "./components/VisitorTable";
import { useState } from "react";
function App() {
  const localVisitors = JSON.parse(localStorage.getItem("visitors"));
  const [visitors, setVisitors] = useState(
    localVisitors
      ? localVisitors
      : [
          {
            id: Math.floor(Math.random() * 10000),
            isChecked: false,
            name: "test",
            email: "test@test.com",
            department: "it",
          },
          {
            id: Math.floor(Math.random() * 10000),

            isChecked: false,
            name: "brad",
            email: "brad@test.com",
            department: "accounting",
          },
          {
            id: Math.floor(Math.random() * 10000),

            isChecked: false,
            name: "john",
            email: "john@test.com",
            department: "management",
          },
          {
            id: Math.floor(Math.random() * 10000),

            isChecked: false,
            name: "doe",
            email: "doe@test.com",
            department: "marketing",
          },
        ]
  );
  const [allSelected, setAllSelected] = useState(false);
  const [isRemove, setIsRemoved] = useState(false);
  const addVisitor = (visitor) => {
    const newVisitor = {
      ...visitor,
      id: Math.floor(Math.random() * 10000),
      isChecked: false,
    };

    setVisitors([...visitors, newVisitor]);
    localStorage.setItem("visitors", JSON.stringify([...visitors, newVisitor]));
  };
  const handleAllCheck = () => {
    if (allSelected) {
      const checkedVisitors = visitors.map((visitor) => {
        return { ...visitor, isChecked: false };
      });
      setVisitors([...checkedVisitors]);
      localStorage.setItem("visitors", JSON.stringify([...checkedVisitors]));
      setAllSelected(false);
      setIsRemoved(false);
    } else {
      const checkedVisitors = visitors.map((visitor) => {
        return { ...visitor, isChecked: true };
      });
      setVisitors([...checkedVisitors]);
      localStorage.setItem("visitors", JSON.stringify([...checkedVisitors]));
      setAllSelected(true);
      setIsRemoved(true);
    }
  };
  const handleCheck = (id) => {
    const checkedVisitors = visitors.map((visitor) => {
      if (visitor.id == id) {
        return { ...visitor, isChecked: !visitor.isChecked };
      } else {
        return visitor;
      }
    });
    setVisitors([...checkedVisitors]);
    localStorage.setItem("visitors", JSON.stringify([...checkedVisitors]));
    const isChecked = checkedVisitors.some((vis) => vis.isChecked == true);
    isChecked ? setIsRemoved(true) : setIsRemoved(false);
  };
  const removeVisitors = () => {
    const filteredVisiotrs = visitors.filter((vis) => vis.isChecked != true);
    setVisitors([...filteredVisiotrs]);
    localStorage.setItem("visitors", JSON.stringify([...filteredVisiotrs]));
    setAllSelected(false);
    setIsRemoved(false);
  };
  return (
    <div>
      <Appbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <AddVisitor addVisitor={addVisitor} />
        </Grid>
        <Grid item xs={12} md={8}>
          <VisitorTable
            visitors={visitors}
            handleCheck={handleCheck}
            removeVisitors={removeVisitors}
            handleAllCheck={handleAllCheck}
            isRemove={isRemove}
            allSelected={allSelected}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
