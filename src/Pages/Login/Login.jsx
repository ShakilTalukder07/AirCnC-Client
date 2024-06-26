import { Link, useLocation, useNavigate } from 'react-router-dom'
import PrimaryButton from '../../Components/Button/PrimaryButton'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { saveUser } from '../../api/auth'


const Login = () => {

  const { loading,
    setLoading,
    signIn,
    signInWithGoogle,
    resetPassword,
    updateUserProfile
  } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const emailRef = useRef()

  // Handle submit
  const handleSubmit = event => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        // navigate(from, { replace: true }),
        navigate('/')
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }

  // Handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        // save user to db
        saveUser(result.user)
        navigate(from, { replace: true }),
          navigate('/')
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }

  //   handle password reset
  const handleReset = () => {
    const email = emailRef.current.value

    resetPassword(email)
      .then(() => {
        toast.success('Please check your email for reset link')
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }

  return (
    <div className='flex justify-center items-center pt-8 mt-16'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <PrimaryButton
              type='submit'
              classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
            >
              Sign In
            </PrimaryButton>
          </div>
        </form>
        <div className='space-y-1'>
          <button
            onClick={handleReset}
            className='text-xs hover:underline text-gray-400'
          >
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='hover:underline text-gray-600'>
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
