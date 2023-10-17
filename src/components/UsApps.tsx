import { Sora } from 'next/font/google'
import Image from 'next/image'

type Props = {}
const sora = Sora({ weight: '600', subsets: ['latin'] })

export default function UsApps({}: Props) {
  return (
    <section className="py-8 md:py-9 flex justify-center lg:justify-between lg:px-[8.5rem] bg-[#EFF8FF] items-center ">
      <div className="flex flex-col gap-8 items-center lg:items-start">
        <div className="flex flex-col gap-4 items-center  lg:items-start lg:gap-6">
          <h2
            className={`${sora.className} text-center lg:text-left text-[#293145] font-semibold text-2xl md:text-3xl leading-normal`}
          >
            Baixe nosso app para desfrutar mais!
          </h2>
          <p className="text-sm md:text-base font-normal text-[#6E7275] text-center lg:text-left max-w-md">
            Amet in elementum nulla scelerisque dui, egestas at. Elit
            consectetur turpis elementum amet vitae et etiam nec. Varius
            volutpat hac adipiscing tincidunt pretium.
          </p>
        </div>
        <span className="flex gap-6 md:gap-[1.34375rem]">
          <Image src={'/playstore.png'} alt="image" width={172.5} height={60} />
          <Image src={'/appstore.png'} alt="image" width={172.5} height={60} />
        </span>
      </div>
      <Image
        className="hidden lg:block"
        src={'/usApp.png'}
        alt="image"
        width={400}
        height={400}
      />
    </section>
  )
}
