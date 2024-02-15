import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../Context/AuthContext"

export default function Protected ({children}){
    const {user} = useContext(Context)

    if(!user){
        return <Navigate to="/?message=You must log in first" replace/>
    } else{
        return children
    }

}

