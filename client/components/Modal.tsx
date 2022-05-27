import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

import SvgClose from '../assets/svg/Close.svg'

type ModalProps = {
  opened: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = props => {
  const close = () => props.onClose?.()

  return (
    <Transition show={props.opened} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/5 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button onClick={close} className="absolute right-2 top-2 p-1">
                  <SvgClose />
                </button>
                {props.children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
