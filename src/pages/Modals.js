import {
  useRef,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

// import { ExclamationIcon } from '@heroicons/react/outline';
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
} from '@windmill/react-ui';

import ImageDark from '../assets/img/login-office-dark.jpeg';
import ImageLight from '../assets/img/login-office.jpeg';
import CTA from '../components/CTA';
import PageTitle from '../components/Typography/PageTitle';
import {
  GithubIcon,
  TwitterIcon,
} from '../icons';

function Modals() {
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
    <>
      <PageTitle>Modals</PageTitle>
      <CTA />

      <div>
        <Button onClick={openModal}>Open modal</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} className="">
        <ModalBody >
          <div >
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <div className="flex flex-col overflow-y-auto md:flex-row">
                <div className="h-32 md:h-auto md:w-1/2">
                  <img
                    aria-hidden="true"
                    className="object-cover w-full h-full dark:hidden"
                    src={ImageLight}
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

                    <Button block layout="outline">
                      <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
                    <Button className="mt-4" block layout="outline">
                      <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button>

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
    </>
  )
}

export default Modals
