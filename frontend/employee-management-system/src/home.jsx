import './Home.css'

function Home() {
  return (
      <>
          <div className='login employee-login'>
              <p>Login as employee</p>
              <button className='employee-login login-button'>Login</button>
          </div>
          <div className='login admin-login'>
              <p>Log in as Admin</p>
              <button className='admin-login login-button'>Login</button>
          </div>
    </>
  )
}

export default Home