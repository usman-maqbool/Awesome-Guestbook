import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Typography,
  Checkbox,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  FormControlLabel,
} from "@mui/material";
function AddVisitor({ addVisitor }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [isChecked, SetIsChecked] = useState(false);
  const departments = [
    {
      value: "it",
      label: "IT",
    },
    {
      value: "marketing",
      label: "Marketing",
    },
    {
      value: "accounting",
      label: "Accounting",
    },
    {
      value: "management",
      label: "Management",
    },
    {
      value: "management",
      label: "Management",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    addVisitor({ name, email, department });
    clearForm();
  };
  const clearForm = () => {
    setName("");
    setEmail("");
    setDepartment("");
    SetIsChecked(false);
  };
  return (
    <Box elevation={0} sx={{ padding: 2 }}>
      <Typography
        variant="h5"
        color="inherit"
        component="h5"
        sx={{ fontWeight: "medium", my: 2 }}
      >
        Add new visitor
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ my: 1 }} fullWidth size="small">
          <InputLabel htmlFor="name">Full Name*</InputLabel>
          <OutlinedInput
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Full Name*"
          />
        </FormControl>
        <div>
          <FormControl sx={{ my: 2 }} fullWidth size="small">
            <InputLabel htmlFor="email">Email Address*</InputLabel>
            <OutlinedInput
              className="form-control"
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address*"
            />
          </FormControl>
        </div>
        <FormControl sx={{ my: 1 }} fullWidth size="small">
          <InputLabel id="deparment">Department</InputLabel>
          <Select
            className="form-control"
            required
            labelId="deparment"
            id="demo-simple-select"
            value={department}
            label="Department*"
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map((dep) => (
              <MenuItem key={dep.value} value={dep.value}>
                {dep.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          required
          control={
            <Checkbox
              onChange={() => SetIsChecked(!isChecked)}
              checked={isChecked ? true : false}
            />
          }
          label="I agree to be added to the table"
        />

        <Box elevation={0} sx={{ textAlign: "center", my: 3 }}>
          <button
            onClick={clearForm}
            type="reset"
            className="btn btn-orange-outlined"
          >
            reset
          </button>
          <button type="submit" className="btn btn-orange">
            Add New Visitor
          </button>
        </Box>
      </form>
    </Box>
  );
}

export default AddVisitor;
