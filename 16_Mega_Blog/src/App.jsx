import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import Header from '../src/components/Header/Header'
import Footer from "./components/Footer/Footer"
function App() {
     //    console.log(import.meta.env.VITE_APPWRITE_URL) 
     const [loading, setLoading] = useState(true)
     const dispatch = useDispatch()


     useEffect(() => {
          authService.getCurrentUser()
               .then((userData) => {
                    if (userData) {
                         dispatch(login({ userData }))
                    }
                    else {
                         dispatch(logout({}))
                    }
               })
               .finally(() => setLoading(false))



     }, [])


     return !loading ? (
          <div className="min-h-screen flex flex-wrap  bg-gray-300 border border-pink-800 content-between">
               <div className="w-full block border  border-black">
                    <Header />
                    <main>
                         TODO
                    </main>
                    <Footer />

               </div>
          </div>
     ) : (null)
}

export default App
