import Image from "next/image"

const Guide = () => {
	return (
		<section className="max-container lg:padding-container relative flex flex-col py-10">

			<section className="flexCenter flex-col">

				{/* Text */}
				<div className="padding-container max-container w-full pb-24">

					<div className="flex flex-col justify-center items-center gap-5 lg:gap-10 ">
						<h2 className="bold-40 lg:bold-64 text-center">
							Easy navigation
						</h2>
						<p className="lg:text-xl text-center lg:w-[1000px] lg:leading-8">
							Never fret about losing your way with the Vietwander app. We've got your back with offline maps for those moments when you're off the grid.
						</p>
					</div>
				</div>


				<div className="flexCenter max-container relative w-full">
					{/* Image */}
					<div
						className="xl:rounded-5xl"
						style={{ width: '100%', maxWidth: '1440px', maxHeight: '600px', overflow: 'hidden' }}
					>
						<Image
							src="/img-7.png"
							alt="hoankiemlake"
							width={1440}
							height={400}
						/>
					</div>



					{/* Floating box */}
					<div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
						<Image
							src="/meter.svg"
							alt="meter"
							width={60}
							height={158}
							className="h-full w-auto"
						/>

						<div className="flexBetween flex-col">
							<div className="flex w-full flex-col">
								<div className="flexBetween w-full">
									<p className="regular-16 text-gray-20">Start</p>
									<p className="bold-16 text-primary">48 min</p>
								</div>
								<p className="bold-20 mt-1">West Lake</p>
							</div>

							<div className="flex w-full flex-col">
								<p className="regular-16 text-gray-20">Destination</p>
								<p className="bold-20 mt-1 whitespace-nowrap">Hoan Kiem Lake</p>
							</div>

						</div>
					</div>
				</div>
			</section >
		</section>
	)
}

export default Guide