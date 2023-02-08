import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Listing from './pages/Listing';
import Form from './pages/Form';
import Header from "./components/Header";
import Pagination from "./components/Pagination";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Pagination />
            <Routes>
                <Route path="/" element={<Listing />} />
                <Route path="/form">
                    <Route path=":movieId" element={<Form />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
  
  export default App;
