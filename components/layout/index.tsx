import React from "react"
import { Footer } from "./footer"
import { Nav } from "./header"
import { Search } from "./header/search"

export const Layout:React.FC<{children:React.ReactNode}> = (props) => {
    return(
        <div className="min-h-screen bg-white justify-between flex flex-1 flex-col">
            <Nav/>
            <Search />
            <div className="flex flex-1 flex-col">
                <main>{props.children}</main>
            </div>
            <Footer/>
        </div>
    )
}