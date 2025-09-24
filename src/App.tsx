import { Route, Routes } from "react-router"
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import About from "./routes/About"
import Services from "./routes/Services"
import BookkeepingServices from "./routes/Services/BookkeepingServices"
import TaxConsultancyServices from "./routes/Services/TaxConsultancyServices"
import AuditServices from "./routes/Services/AuditServices"
import ManagementConsultancyServices from "./routes/Services/ManagementConsultancyServices"

export default function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/bookkeeping" element={<BookkeepingServices />} />
      <Route path="/services/tax-consultancy" element={<TaxConsultancyServices />} />
      <Route path="/services/audit" element={<AuditServices />} />
      <Route path="/services/management-consultancy" element={<ManagementConsultancyServices />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
