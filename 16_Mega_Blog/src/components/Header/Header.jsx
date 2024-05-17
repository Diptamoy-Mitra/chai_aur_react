import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  //access status of state 
  const authStatus = useSelector((state) => state.auth.status) //initially false when logout

  //access navigation
  const navigate = useNavigate();


  //nav items
  const navItems = [
    {
      name: 'Home',
      path: '/'

    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }

  ]


  return (
    <header className='py-3 shadow bg-gray-400'>

      <Container>
        <nav className='flex'>
          <div className="mr-4">
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {
              navItems.map((item) => (
                item.active ? (
                  <li key={item.name} className='mr-4'>
                    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>

                ) : null
              ))
            }
            {
              authStatus && (
                <li className=''>
                  <LogoutBtn />
                </li>
              )
            }
          </ul>
        </nav>

      </Container>
    </header>
  )
}

export default Header
