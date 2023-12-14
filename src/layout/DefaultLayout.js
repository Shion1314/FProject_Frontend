import { Navbar } from "../components/Navbar"

export const DefaultLayout = ({ children }) => {
    return (
        <div style={{ width: "100%", backgroundColor: "#f9f9fb", height: "100%" ,minHeight: "100vh", overflowX: "clip" }}>
            <Navbar />
            <div style={{ padding: "10px" }}>
                {children}
            </div>
        </div>
    )
}