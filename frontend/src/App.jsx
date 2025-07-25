import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Pages and Components
import Landing from "./pages/Landing"

function App() {

  return (
    <div>
      <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route 
                path="/"
                element={<Landing />}
              />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App