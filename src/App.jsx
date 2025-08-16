import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./Component/RootLayout"
import Home from "./Page/Home"
import Jewelry from "./Page/Jewelry"
import Clothing from "./Page/Clothing"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element = {<Home />}></Route>
      <Route path="home" element={<Home />} />
      <Route path="jewelry" element={<Jewelry />} />
      <Route path="clothing" element={<Clothing />} />
      <Route path="home_living" element={<Clothing />} />
      <Route path="wedding" element={<Clothing />} />
      <Route path="toys" element={<Clothing />} />
      <Route path="art" element={<Clothing />} />
      <Route path="craft" element={<Clothing />} />
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
