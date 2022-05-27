import Link from 'next/link'
import { FC, useState } from 'react'

import { useAuth } from '../api/modules/users/users.hooks'
import { InputDefault } from './InputDefault'
import { ModalSignIn } from './ModalSignIn'

export const LayoutDefaultHeader: FC = () => {
  const { user, logout } = useAuth()

  const [signInModalOpened, setSignInModalOpened] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10  border-b border-gray-200 bg-white !bg-opacity-[0.97] px-8 py-3 backdrop-blur-sm">
        <div className="container grid grid-cols-4 items-center">
          <div>
            <Link href="/" passHref>
              <a className="text-4xl font-bold">XX</a>
            </Link>
          </div>

          <div className="col-span-2">
            <InputDefault
              placeholder="Search for a movie, tv show..."
              className="transition placeholder:transition focus:placeholder-gray-300"
            />
          </div>

          <div className="justify-self-end">
            {user ? (
              <div className="flex">
                <p className="font-bold">{user.name}</p>
                <button
                  className="ml-4  transition hover:text-black/70  active:text-black/40"
                  onClick={logout}
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSignInModalOpened(true)}
                className="transition hover:text-black/70  active:text-black/40"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </header>

      <ModalSignIn
        opened={signInModalOpened}
        onClose={() => setSignInModalOpened(false)}
      />
    </>
  )
}
