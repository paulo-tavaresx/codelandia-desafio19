import { Sora } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}
const sora = Sora({ weight: '600', subsets: ['latin'] })

export default function NavBar({}: Props) {
  return (
    <header className="px-6 pt-6 pb-4 md:px-[8.5rem] md:py-5 flex justify-between">
      <Link
        href="/"
        className={`${sora.className} flex gap-2 font-semibold items-center text-base md:text-2xl`}
      >
        <Image src={'/LogoIcon.png'} width={18} height={18} alt="logo" />
        Ranchi
      </Link>

      <ul className="text-lg font-medium text-[#6E7275] items-center lg:flex hidden gap-16 ">
        <li>
          <Link href={''}>Funcionalidades</Link>
        </li>
        <li>
          <Link href={''}>App</Link>
        </li>
        <li>
          <Link href={''}>Planos</Link>
        </li>
        <li>
          <Link href={''}>Contato</Link>
        </li>
      </ul>
    </header>
  )
}
