import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { getDefaultAvatar } from "../api/DefaultAvatar"
import { getMe } from "../api/Auth"

const NavbarLink = ({ to, children, ...props }) => {
    return (
        <NavLink style={{ textDecoration: "none", color: "black" }} to={to} {...props}>
            {children}
        </NavLink>
    )
}

export const Navbar = () => {
    const [avatarLink, setAvatarLink] = useState("");
    useEffect(() => {
        getMe()
            .then((user) => console.log(user))
            .catch((error) => console.warn(`Could not restore session: ${error.message}`));
        // getDefaultAvatar(user.name).then((link) => setAvatarLink(link))
    }, [])
    return (
        <div style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: "1.2em",
            backgroundColor: "white",
            borderBottom: "3px solid #d3d3d3",
            width: "100%",
            height: "70px",
            overflowX: "clip"
        }}>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", padding: "20px", alignItems: "center" }}>

                <NavbarLink to="/">
                    Home
                </NavbarLink>

                <NavbarLink to="/University_Search">
                    <div >University Search</div>
                </NavbarLink>

            </div>
        </div >
    )
}