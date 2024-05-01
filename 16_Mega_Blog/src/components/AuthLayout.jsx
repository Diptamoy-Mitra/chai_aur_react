import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({ children, authentication = true }) {


    const navigate = useNavigate();

    const [loader, setLoader] = useState(true)

    //check status
    const authStatus = useSelector((state) => state.auth.status)


    //kya kam karna hai decide karega, homepage or others pai jana hai ki nehi
    useEffect(() => {

        //Todo //make it more easy later
        //initially authentication true
        if (authentication && authStatus != authentication) {
            navigate('/login')
        }
        else if (!authentication && authStatus != authentication) {
            navigate('/')

        }

        setLoader(false)
    }, [authStatus, navigate, authentication])



    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected
{ children, authentication = true }