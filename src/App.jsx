import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./Component/RootLayout"
import Home from "./Page/Home"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
    </Route>
  )
)


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
