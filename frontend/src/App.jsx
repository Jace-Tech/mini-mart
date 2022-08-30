import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

const App = () => {
    const routes = [
        { id: "dscbsdjjdddjdcbsdh", path: '/', component: <Home />}
    ]

    return (
        <Routes>
            { routes.map(({ id, component, path }, _) => <Route key={id} path={path} element={component}  /> )}
        </Routes>
    )
}

export default App
