'use client'
import { Sora } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type Props = {}
const sora = Sora({ weight: '600', subsets: ['latin'] })

export default function NavBar({}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="px-6 pt-6 pb-4 lg:px-[8.5rem] lg:py-5 flex justify-between relative">
      <Link
        href="/"
        className={`${sora.className} flex gap-2 font-semibold items-center text-base md:text-2xl`}
      >
        <Image src={'/LogoIcon.png'} width={18} height={18} alt="logo" />
        Ranchi
      </Link>

      <Image
        src={'/menu.svg'}
        alt="open menu"
        width={24}
        height={14}
        onClick={() => setIsOpen(true)}
        className={`${isOpen ? 'hidden' : 'block'} lg:hidden`}
      />
      <p
        className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}
        onClick={() => setIsOpen(false)}
      >
        X
      </p>
      <ul
        className={`text-lg absolute z-10 justify-center w-full py-5 lg:py-0 gap-5 flex-col font-medium text-[#6E7275] lg:w-auto items-center lg:justify-start lg:flex-row lg:flex lg:static lg:gap-16 ${
          isOpen ? 'flex left-0 top-full    bg-white' : 'hidden'
        }  `}
      >
        <li onClick={() => setIsOpen(false)}>
          <Link href={''}>Funcionalidades</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href={''}>App</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href={''}>Planos</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href={''}>Contato</Link>
        </li>
      </ul>
    </header>
  )
}
