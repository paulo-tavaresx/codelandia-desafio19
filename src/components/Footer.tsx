import { Sora } from 'next/font/google'

type Props = {}

const sora = Sora({ weight: ['400', '600', '700'], subsets: ['latin'] })
export default function Footer({}: Props) {
  return (
    <footer className="py-5 lg:pt-10 lg:pb-9 bg-white flex items-center justify-center">
      <p
        className={`${sora.className} text-sm lg:text-xl  font-normal text-[#293145]`}
      >
        Rachi - Todos os direitos reservados.
      </p>
    </footer>
  )
}
