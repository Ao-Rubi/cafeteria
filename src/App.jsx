import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/views/Home";
import AdministrarProductos from "./components/views/producto/AdministrarProductos"
import CrearProducto from "./components/views/producto/CrearProducto"
import EditarProductos from "./components/views/producto/EditarProductos"
import Error404 from './components/views/Error404';
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import DetalleProductos from './components/views/producto/DetalleProductos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>

        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/administrar' element={<AdministrarProductos></AdministrarProductos>}></Route>
          <Route exact path='/administrar/crear' element={<CrearProducto></CrearProducto>}></Route>
          <Route exact path='/administrar/editar/:id' element={<EditarProductos></EditarProductos>}></Route>
          <Route exact path="/detalles/:id" element={<DetalleProductos></DetalleProductos>}></Route>

          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
