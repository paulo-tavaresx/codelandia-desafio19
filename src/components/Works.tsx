import { Sora } from 'next/font/google'
import Image from 'next/image'

type Props = {}

const sora = Sora({ weight: '600', subsets: ['latin'] })
export default function Works({}: Props) {
  return (
    <section className="py-10 px-[5.25rem] md:py-14 gap-8 md:gap-20 flex flex-col items-center">
      <h2
        className={`${sora.className} text-center text-[#293145] font-semibold text-2xl md:text-[2.5rem] leading-normal`}
      >
        Como funciona
      </h2>
      <ul className="flex flex-col md:flex-row gap-8 md:gap-20 md:pb-12">
        <li className="flex flex-col items-center gap-5 md:gap-8 ">
          <Image src={'/person.svg'} alt="Icon" width={60} height={60} />
          <div className="flex flex-col gap-1 md:gap-4 items-center">
            <h3
              className={`${sora.className} text-[#293145] font-semibold text-base md:text-lg leading-normal`}
            >
              Crie conexões
            </h3>
            <p className="text-[#6E7275] max-w-[16rem] text-center">
              Lorem ipsum dolor sit amet, consecteteu.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center gap-5 md:gap-8 ">
          <Image
            src={'/carbon_security.png'}
            alt="Icon"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-1 md:gap-4 items-center">
            <h3
              className={`${sora.className} text-[#293145] font-semibold text-base md:text-lg leading-normal`}
            >
              100% gratuito
            </h3>
            <p className="text-[#6E7275] max-w-[16rem] text-center">
              Lorem ipsum dolor sit amet, consecteteu.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center gap-5 md:gap-8 ">
          <Image src={'/emoticon.svg'} alt="Icon" width={60} height={60} />
          <div className="flex flex-col gap-1 md:gap-4 items-center">
            <h3
              className={`${sora.className} text-[#293145] font-semibold text-base md:text-lg leading-normal`}
            >
              Compartilhamento
            </h3>
            <p className="text-[#6E7275] max-w-[16rem] text-center">
              Lorem ipsum dolor sit amet, consecteteu.
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}
