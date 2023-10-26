import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
	return (
		<section className='max-container padding-container flex flex-col gap-10 py-10 pb-32 md:gap-10 lg:py-20 xl:flex-row'>
			{/* <div className='hero-map' /> */}

			{/* LEFT */}
			<div className='relative z-20 flex flex-1 flex-col xl:w-1/3'>

				<h1 className='bold-52 lg:bold-88 leading-loose'>Discover Vietnam with Viet<span style={{ color: "#F85E9F" }}>wander</span></h1>
				<p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px] bg-white/80'>
					Whether you're a seasoned explorer or a first-time visitor, our app is designed to make your Vietnam experience unforgettable.
				</p>


				<div className='my-11 flex flex-wrap gap-5'>
					{/* Stars */}
					<div className='flex items-center gap-2'>
						{Array(5).fill(0).map((_, index) => (
							<Image
								src="/star.svg"
								key={index}
								alt='star'
								width={24}
								height={24}
							/>
						))}
					</div>

					{/* Rating */}
					<p className='bold-16 lg:bold-20 text-blue-70'>
						7.4k+
						<span className='regular-16 lg:regular-20 ml-1'>Excellent reviews</span>
					</p>
				</div>

				<div className='flex flex-col w-full gap-3 sm:flex-row'>

					{/* Button Download app */}
					<Button
						type='button'
						title='Download App'
						variant='btn_purple'
					/>

					{/* Button Watch demo */}
					<Button
						type='button'
						title='Watch demo'
						icon='/play.svg'
						variant='btn_white'
					/>
				</div>
			</div>

			{/* RIGHT */}
			<div
				className='relative xl:flex flex-1 items-start hidden rounded-3xl shadow-2xl bg-center bg-cover bg-no-repeat'
				style={{ backgroundImage: 'url(img-4.png)' }}
			>

				{/* Floating box */}
				<div className='absolute z-20 w-[310px] flex flex-col gap-8 rounded-3xl bg-white/70 shadow-lg px-7 py-6 right-7 top-7 bg-opacity-40 backdrop-blur-2xl'>
					<div className='flex flex-col'>

						<div className='flexBetween'>
							<p className='regular-16'>Location</p>
						</div>
						<p className='bold-20'>Ha Long Bay</p>
					</div>

					<div className='flexBetween gap-4'>
						<div className='flex flex-col'>
							<p className='regular-16 block'>Distance</p>
							<p className='bold-20 whitespace-nowrap'>167 km</p>
						</div>
						<div className='flex flex-col'>
							<p className='regular-16 block'>Weather</p>
							<p className='bold-20 whitespace-nowrap'>Occasional rain</p>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}

export default Hero