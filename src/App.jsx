import { Outlet } from "react-router"
import './style/style.css'
function App() {
  return (
    <div className="px-3 lg:px-0">
      <Outlet/>
    </div>
  )
}

export default App
