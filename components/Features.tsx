import { FEATURES } from "@/constants"
import Image from "next/image"


interface FeatureProps {
    title: string
    description: string
    icon: string
    variant?: string
}

const FeatureItem = ({ title, description, icon }: FeatureProps) => {
    return (
        <li className="flex w-full flex-1 flex-col items-center border rounded-xl border-slate-200 py-7 px-9 justify-center text-center">
            <div className="rounded-lg p-4 lg:p-5 bg-pink-200">
                <Image
                    src={icon}
                    alt="map"
                    width={28}
                    height={28}
                />
            </div>
            <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                {title}
            </h2>
            <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none h-24">
                {description}
            </p>
        </li>
    )
}

const Features = () => {
    return (
        <section className="max-container padding-container relative flex flex-col py-20 gap-20">

            <h2 className="bold-40 lg:bold-64 text-center">Our features</h2>

            <div className="flex w-full flex-col">
                <ul className="grid gap-10 md:grid-cols-2 lg:gap-10">
                    {FEATURES.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            variant={feature.variant}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Features