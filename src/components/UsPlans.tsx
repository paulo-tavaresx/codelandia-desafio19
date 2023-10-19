import { Roboto, Sora } from 'next/font/google'
import Link from 'next/link'

type Props = {}

const sora = Sora({ weight: ['600', '700'], subsets: ['latin'] })
const roboto = Roboto({ weight: ['700'], subsets: ['latin'] })

export default function UsPlans({}: Props) {
  return (
    <section className="py-10 md:pt-12 md:pb-32 flex flex-col gap-10 md:gap-24">
      <div className="flex flex-col items-center gap-4">
        <h2
          className={`${sora.className} text-center text-[#293145] font-semibold text-2xl md:text-[2.5rem] leading-normal`}
        >
          Nossos Planos
        </h2>
        <p
          className={`text-center max-w-xl text-[#293145] font-normal text-sm md:text-lg leading-normal`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </p>
      </div>
      <ul>
        <li className="items-center flex flex-col bg-[#EFF8FF] max-w-[23.125rem]  pt-6 md:pt-14 pb-7 md:pb-16 gap-10">
          <h3 className={`${sora.className}`}>Bronze</h3>

          <h4 className={`${roboto.className} flex`}>
            <span className="text-xl self-start">R$</span>
            <strong className="text-5xl">28</strong>
            <span className="text-2xl self-end">/mês</span>
          </h4>
          <p className="text-[#6E7275] text-xs text-center max-w-[18.75rem] md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
          <Link
            href="/"
            className="py-2 px-20 text-xl bg-[#0F9AFE] text-white rounded-[3rem]"
          >
            Assinar
          </Link>
        </li>
      </ul>
    </section>
  )
}
