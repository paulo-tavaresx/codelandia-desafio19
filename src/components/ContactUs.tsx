import { Sora } from 'next/font/google'

type Props = {}
const sora = Sora({ weight: ['600', '700'], subsets: ['latin'] })
export default function ContactUs({}: Props) {
  return (
    <section className="bg-hero-contact bg-center py-8 md:pt-12 md:pb-[5.3125rem] flex items-center justify-center">
      <div className="flex flex-col gap-6 md:gap-[5.75rem]">
        <div>
          <h2
            className={`${sora.className} mb-4 md:text-[2.5rem] text-white text-2xl font-semibold text-center`}
          >
            Contato
          </h2>
          <p className=" md:w-[33rem] w-[19.5rem] text-sm text-lg text-[#DBDBDB] text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
        </div>
        <form action="/" className="flex  justify-center items-center">
          <input
            type="text"
            className="bg-transparent border-opacity-0  text-white outline-none border-b-white"
            placeholder="Seu melhor e-mail"
          />
          <button type="submit" ckl>
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
