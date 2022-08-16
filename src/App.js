import { Box, Button, Container, createTheme, Stack, styled, ThemeProvider, Typography } from "@mui/material";
import { Settings } from "@mui/icons-material";
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import Add from './components/Add'
import {useState} from "react"



function App() {
  const [mode, setMode] = useState("dark")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.priary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
