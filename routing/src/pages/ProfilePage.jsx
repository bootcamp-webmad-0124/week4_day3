import { useState } from "react"
import { Navigate } from "react-router-dom"

function ProfilePage() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)          // Cambialo a false para echarle jejejje

    if (!isLoggedIn) return <Navigate to="/error" />

    return (
        <div>
            <h1>Estás aquí porque estás logueado/a</h1>
        </div>
    )
}

export default ProfilePage
