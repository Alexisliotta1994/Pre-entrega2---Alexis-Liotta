import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { createBrowserRouter, Outlet } from 'react-router-dom'


function App() {
  return (
    <div className="d-flex">
      <NavBar />
      <div className="flex-grow-1 p-3">
        <Outlet />
      </div>
  </div>
  )
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ItemListContainer /> },
      {
        path: "/category/:id",
        element: <ItemListContainer />
      },
      {
        path: "/item/:id",
        element: <ItemDetailContainer />
      }
    ]
  }
])

export default Router
