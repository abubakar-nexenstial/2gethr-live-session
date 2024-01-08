//NPM IMPORTS
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//COMPONENETN IMPORTS
import Footer from "./components/Footer"

// PAGES IMPORTS
import CurrentSessionPage from "./pages/CurrentSessionPage";

function Wrapper({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

function App() {

  return (
    <>
    <Toaster />
     <BrowserRouter>
        <Routes>
          <Route path="/:device_license" element={<Wrapper><CurrentSessionPage /></Wrapper>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
