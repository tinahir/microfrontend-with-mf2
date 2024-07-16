import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from './pages/WatchPage';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import palette from './theme/pallete';


const router = createBrowserRouter([{
  path: "/watch",
  element: <WatchPage />
}], {
  basename: "/remote"
});

const WatchApp = (info?: { basename?: string; initialEntries?: Array<string> }) => {
  return (
    <>
      <ThemeProvider theme={createTheme({palette})}>
        <RouterProvider router={router} />
      </ThemeProvider>
      
    </>
  )
};

export default WatchApp;