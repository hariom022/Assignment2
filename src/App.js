import "./App.css";
import DrawerNav from "./Components/DrawerNav";

import { Box } from "@mui/material";

const App = () => {
  return (
    <Box className="App-container" style={{ display: "flex" }}>
      <div>
        <DrawerNav />
      </div>
    </Box>
  );
};

export default App;
