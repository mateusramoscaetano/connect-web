import Image from 'next/image'
import MedalGold from '../../../assets/Medal_1.svg'
import MedalSilver from '../../../assets/Medal_2.svg'
import MedalCooper from '../../../assets/Medal_3.svg'

export function Ranking() {
  return (
    <>
      <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
          Ranking de indicações
        </h2>
        <div className="space-y-4">
          <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semi-bold">#1</span> | Mateus Ramos
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>

            <Image
              src={MedalGold}
              alt="logo"
              className="absolute top-0 right-8"
            />
          </div>
          <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semi-bold">#2</span> | Mateus Ramos
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>

            <Image
              src={MedalSilver}
              alt="logo"
              className="absolute top-0 right-8"
            />
          </div>
          <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semi-bold">#3</span> | Mateus Ramos
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>

            <Image
              src={MedalCooper}
              alt="logo"
              className="absolute top-0 right-8"
            />
          </div>
        </div>
      </div>
    </>
  )
}
