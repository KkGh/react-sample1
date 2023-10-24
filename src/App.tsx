import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useCallback, useState } from "react";

const App = () => {
  const [text, setText] = useState("sample");
  const [value, setValue] = useState(5);

  const handleTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setText(event.target.value);
    },
    []
  );

  const handleValueChange = useCallback(
    (event: Event, value: number | number[], activeThumb: number) => {
      setValue(value as number);
    },
    []
  );

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        React sample
      </Typography>

      <TextField fullWidth value={text} onChange={handleTextChange} />
      <Slider value={value} onChange={handleValueChange} />

      <Box mb={2}>
        repeated {value} times:
        <Box>{text.repeat(value)}</Box>
      </Box>

      <List>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>

      <Box mb={2}>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Header 1</TableCell>
                <TableCell>Header 2</TableCell>
                <TableCell>Header 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Row 1, Cell 1</TableCell>
                <TableCell>Row 1, Cell 2</TableCell>
                <TableCell>Row 1, Cell 3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Row 2, Cell 1</TableCell>
                <TableCell>Row 2, Cell 2</TableCell>
                <TableCell>Row 2, Cell 3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Grid
        mb={2}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Paper>Item 1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>Item 2</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>Item 3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>Item 4</Paper>
        </Grid>
      </Grid>

      <Stack mb={2} direction="row" spacing={2}>
        <Paper elevation={1}>Item 1</Paper>
        <Paper elevation={3}>Item 2</Paper>
        <Paper elevation={5}>Item 3</Paper>
      </Stack>
    </Container>
  );
};

export default App;
