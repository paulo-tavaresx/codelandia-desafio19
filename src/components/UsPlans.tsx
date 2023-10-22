import { Roboto, Sora } from 'next/font/google'
import Link from 'next/link'

type Props = {}

const sora = Sora({ weight: ['600', '700'], subsets: ['latin'] })
const roboto = Roboto({ weight: ['700'], subsets: ['latin'] })

export default function UsPlans({}: Props) {
  return (
    <section className="py-10 md:pt-12 md:pb-32 flex flex-col gap-10 md:gap-24 items items-center">
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
      <ul className="flex flex-wrap gap-8 md:gap-7 justify-center items-center">
        <li className="pb-7 lg:pb-16 even:bg-[#293145] bg-[#EFF8FF] group text-[#293145] even:text-white w-[19.5rem] lg:w-[23.125rem] h-[25rem] lg:h-[29.375rem] rounded-lg justify-end flex flex-col items-center">
          <span className="flex flex-col gap-3 items-center mb-8 group-even:mb-6 lg:group-even:mb-8 lg:mb-14">
            <h3
              className={`${sora.className} lg:group-even:text-3xl text-2xl leading-normal font-semibold`}
            >
              Bronze
            </h3>
          </span>
          <h4 className={`${roboto.className} flex mb-10 lg:mb-12`}>
            <span className="text-xl self-start">R$</span>
            <strong className="text-5xl">28</strong>
            <span className="text-2xl self-end">/mês</span>
          </h4>
          <p className="text-[#6E7275] group-even:text-[#DBDBDB] text-center w-72 lg:w-[18.75rem] lg:text-lg text-base mb-12 lg:mb-14">
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
        <li className="pb-7 lg:pb-16 even:bg-[#293145] bg-[#EFF8FF] group text-[#293145] even:text-white w-[19.5rem] lg:w-[23.125rem] h-[25rem] lg:h-[29.375rem] rounded-lg justify-end flex flex-col items-center">
          <span className="flex flex-col gap-3 items-center mb-8 group-even:mb-6 lg:group-even:mb-8 lg:mb-14">
            <h3
              className={`${sora.className} lg:group-even:text-3xl text-2xl  leading-normal font-semibold`}
            >
              Prata
            </h3>
            <span className="py-1 px-8 bg-[#0F9AFE] text-sm text-white rounded-[3rem]">
              PREFERIDO
            </span>
          </span>
          <h4 className={`${roboto.className} flex mb-10 lg:mb-12`}>
            <span className="text-xl self-start">R$</span>
            <strong className="text-5xl">57</strong>
            <span className="text-2xl self-end">/mês</span>
          </h4>
          <p className="text-[#6E7275] group-even:text-[#DBDBDB] text-center w-72 lg:w-[18.75rem] lg:text-lg text-base mb-12 lg:mb-14">
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
        <li className="pb-7 lg:pb-16 even:bg-[#293145] bg-[#EFF8FF] group text-[#293145] even:text-white w-[19.5rem] lg:w-[23.125rem] h-[25rem] lg:h-[29.375rem] rounded-lg justify-end flex flex-col items-center ">
          <span className="flex flex-col gap-3 items-center mb-8 group-even:mb-6 lg:group-even:mb-8 lg:mb-14">
            <h3
              className={`${sora.className} lg:group-even:text-3xl text-2xl  leading-normal font-semibold `}
            >
              Ouro
            </h3>
          </span>

          <h4 className={`${roboto.className} flex mb-10 lg:mb-12`}>
            <span className="text-xl self-start">R$</span>
            <strong className="text-5xl">94</strong>
            <span className="text-2xl self-end">/mês</span>
          </h4>
          <p className="text-[#6E7275] group-even:text-[#DBDBDB] text-center w-72 lg:w-[18.75rem] lg:text-lg text-base mb-12 lg:mb-14">
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
