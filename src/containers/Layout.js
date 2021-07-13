import {
  lazy,
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Link,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

// import { ExclamationIcon } from '@heroicons/react/outline';
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
} from '@windmill/react-ui';

import ImageDark from '../assets/img/login-office-dark.jpeg';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ThemedSuspense from '../components/ThemedSuspense';
import Main from '../containers/Main';
import { SidebarContext } from '../context/SidebarContext';
import routes from '../routes';

const Page404 = lazy(() => import('../pages/404'))

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
  }, [location])

  const [isModalOpen, setIsModalOpen] = useState(false)

  // const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef()
  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }



  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar click={openModal}/>

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null
              })}
              <Redirect exact from="/app" to="/app/dashboard" />
              <Route component={Page404} />
            </Switch>
            <Modal isOpen={isModalOpen} onClose={closeModal} className="">
              <ModalBody >
                <div >
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
                            <Input className="mt-1" type="email" placeholder="john@doe.com" />
                          </Label>

                          <Label className="mt-4">
                            <span>Password</span>
                            <Input className="mt-1" type="password" placeholder="***************" />
                          </Label>

                          <Button className="mt-4" block tag={Link} to="/app">
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
              </ModalBody>
            </Modal>
          </Suspense>
        </Main>

      </div>
    </div>
  )
}

export default Layout
