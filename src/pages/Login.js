import React, { useState } from 'react';

import LoadingOverlay from 'react-loading-overlay';
import {
  Link,
  useHistory,
} from 'react-router-dom';

import {
  Button,
  Input,
  Label,
} from '@windmill/react-ui';

import ImageDark from '../assets/img/login-office-dark.jpeg';

async function loginUser(credentials) {
  return fetch('https://packitapi.herokuapp.com/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json()).then(data => console.log(data))
}



function userToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}
function Login() {
  const history = useHistory();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();
  const [active, isActive] = useState(false);

  const handleSubmit = async e => {
    isActive(true)
    e.preventDefault();
    const token = await loginUser({
      "email": username,
      "password": password
    });
    setToken(token);
    history.push('/app')
  }
  return (
    <LoadingOverlay
      active={active}
      spinner
      text='Wait, while we process your data'
    >
      <form>
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="flex flex-col overflow-y-auto md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2">
                <img
                  aria-hidden="true"
                  className="object-cover w-full h-full dark:hidden"
                  src="https://ohhyesafrica.com/wp-content/uploads/2019/04/IMG_1091.jpg"
                  alt="Office"
                />
                <img
                  aria-hidden="true"
                  className="hidden object-cover w-full h-full dark:block"
                  src={ImageDark}
                  alt="Office"
                />
              </div>

              <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
                  <Label>
                    <span>Email</span>
                    <Input className="mt-1" type="email" placeholder="email@gmail.com" onChange={e => setUserName(e.target.value)} />
                  </Label>

                  <Label className="mt-4">
                    <span>Password</span>
                    <Input className="mt-1" type="password" placeholder="***************" onChange={e => setPassword(e.target.value)} />
                  </Label>

                  <Button className="mt-4" block tag={Link} to="/app" onClick={handleSubmit}>
                    Log in
              </Button>

                  <hr className="my-8" />


                  <p className="mt-4">
                    <Link
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      to="/forgot-password"
                    >
                      Forgot your password?
                </Link>
                  </p>
                  <p className="mt-1">
                    <Link
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      to="/create-account"
                    >
                      Create account
                </Link>
                  </p>
                </div>
              </main>

            </div>
          </div>
        </div>
      </form>
    </LoadingOverlay>
  )
}

export default Login
