import Image from "next/image"
import Button from "./Button"

const GetApp = () => {
	return (
		<section className="max-container lg:padding-container relative flex flex-col pt-20 pb-40">
			<div className=" bg-pink-50 shadow-lg grid grid-cols-1 lg:grid-cols-3 lg:rounded-5xl pt-14 pb-5 px-20">

				{/* LEFT */}
				<div className="flex flex-col items-center lg:items-start justify-center gap-10 col-span-2 mb-16 lg:mb-0">

					<h2 className="font-bold text-3xl lg:bold-64 whitespace-nowrap">Get for free now! 😎</h2>
					<p className="regular-16">Available on iOS and Android</p>

					<div className="flex flex-col lg:flex-row gap-3 w-full lg:w-2/3">
						<Button
							type="button"
							title="App Store"
							icon="/apple.svg"
							variant="btn_getapp"
							full
						/>
						<Button
							type="button"
							title="Play Store"
							icon="/android.svg"
							variant="btn_getapp"
							full
						/>
					</div>
				</div>

				{/* RIGHT */}
				<div className="flex justify-center items-center">
					<Image src="/phone-2.svg" alt="phones" width={320} height={500} />
				</div>

			</div>
		</section>
	)
}

export default GetApp