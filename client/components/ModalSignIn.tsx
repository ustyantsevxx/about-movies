import { FC } from 'react'

import { LoginForm } from './LoginForm'
import { Modal } from './Modal'

type ModalSignInProps = {
  opened: boolean
  onClose: () => void
}

export const ModalSignIn: FC<ModalSignInProps> = props => {
  return (
    <Modal opened={props.opened} onClose={props.onClose}>
      <h1 className="text-2xl font-bold">Sign in</h1>
      <LoginForm onSuccess={props.onClose} />
    </Modal>
  )
}
