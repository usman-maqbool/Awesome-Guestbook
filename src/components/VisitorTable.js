import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Box,
  Typography,
} from "@mui/material";
function VisitorTable({
  visitors,
  handleCheck,
  removeVisitors,
  handleAllCheck,
  isRemove,
  allSelected,
}) {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" color="inherit" component="h3">
        Awesome Guestbook
      </Typography>
      <TableContainer sx={{ mt: 3 }} component={Paper}>
        <Box sx={{ my: 1, px: 2 }}>
          <button
            disabled={isRemove ? false : true}
            onClick={() => {
              removeVisitors();
            }}
            className={`btn btn-danger ${isRemove ? "" : "disabled"}`}
          >
            remove
          </button>
        </Box>
        <Table sx={{ minWidth: 650 }} aria-label="visitor table" size="small">
          <TableHead>
            <TableRow>
              <TableCell className="checkbox-cell">
                <Checkbox
                  checked={allSelected ? true : false}
                  onChange={() => handleAllCheck()}
                />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Department
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visitors.map((visitor) => (
              <TableRow
                key={visitor.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  textTransform: "capitalize",
                }}
              >
                <TableCell sx={{ width: "20px" }}>
                  <Checkbox
                    onChange={() => handleCheck(visitor.id)}
                    checked={visitor.isChecked ? true : false}
                  />
                </TableCell>
                <TableCell>{visitor.name}</TableCell>
                <TableCell>{visitor.email}</TableCell>
                <TableCell align="right">
                  <span className="depart-pill">{visitor.department} </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default VisitorTable;
