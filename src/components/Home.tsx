import { Sora } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

type Props = {}
const sora = Sora({ weight: '600', subsets: ['latin'] })

export default function HomeSections({}: Props) {
  return (
    <section className="bg-[#EFF8FF] pt-10 md:items-center lg:py-[4.375rem] px-[8.5rem] flex flex-col md:flex-row justify-between w-full">
      <div>
        <h1
          className={`${sora.className} text-2xl lg:text-5xl font-semibold text-[#293145] lg:max-w-[35.875rem] max-w-[17.9375rem]: flex  object-cover flex-col`}
        >
          <span>Rachi,</span>
          <span>é tudo que você</span>
          <span>precisa em um só lugar.</span>
        </h1>
        <button>Cadastrar-se</button>
      </div>
      <div className="relative w-[13.125rem] md:w-[31.25rem] h-[11.4375rem] md:h-[31.25rem] self-center">
        <Image src="/imageHome.png" fill alt="image description" />
      </div>
    </section>
  )
}
