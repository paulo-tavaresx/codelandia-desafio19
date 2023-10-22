import { Sora } from 'next/font/google'

type Props = {}

const sora = Sora({ weight: ['600', '700'], subsets: ['latin'] })

export default function ContactUs({}: Props) {
  return (
    <section className="relative before:bg-hero-contact before:bg-no-repeat before:absolute before:left-0 before:top-0 before:bg-center before:w-full before:h-full lg:before:bg-full after:w-full after:h-full after:left-0 after:top-0  after:absolute after:bg-opacity-70 after:bg-[#293145]  py-8 md:pt-12 md:pb-[5.3125rem] flex items-center justify-center w-full">
      <div className="flex flex-col gap-6 md:gap-[5.75rem] z-10">
        <div>
          <h2
            className={`${sora.className} mb-4 md:text-[2.5rem] text-white text-2xl font-semibold text-center`}
          >
            Contato
          </h2>
          <p className=" md:w-[33rem] w-[19.5rem] text-sm md:text-lg text-[#DBDBDB] text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
        </div>
        <form
          action="/"
          className="flex flex-col md:flex-row justify-center items-center gap-10 px-6"
        >
          <input
            type="text"
            className="bg-transparent w-[19.5rem] md:w-[18.75rem] text-white outline-none border-b-2 pb-2"
            placeholder="Seu melhor e-mail"
          />
          <button
            type="submit"
            className="bg-[#0F9AFE] text-white md:w-[7.375rem] w-[19.5rem] flex justify-center py-2 rounded-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
