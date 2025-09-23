import { Route, Routes } from "react-router"
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import About from "./routes/About"

export default function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
