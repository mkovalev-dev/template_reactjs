import { Route, Routes } from "react-router-dom";

import BasicPathConstants from "./utils/constants/routesConst";

function App() {
  return (
    <Routes>
      <Route path={BasicPathConstants.ERROR_404} element={<></>} />
      <Route path={BasicPathConstants.HOME_PAGE} element={<>Hello World</>} />
    </Routes>
  );
}

export default App;
