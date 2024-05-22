import { RouterProvider } from 'react-router-dom'
import './App.css'
// import router from './Routes/Routes'
import AuthProvider from './Context/AuthProvider'
import { router } from './Routes/Routes'

function App() {


  return (
    <>
      <div className='max-w-screen-xl'>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </>
  )
}

export default App
