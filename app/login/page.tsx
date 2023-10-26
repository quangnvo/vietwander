const Login = () => {
	return (
		<div className="max-container padding-container flex flex-col gap-10 pt-10 pb-32 md:gap-14 lg:py-20">
			<div className="relative  pt-28 pb-28 lg:pb-56">
				<div className="relative m-auto md:w-8/12 lg:w-1/2">

					{/* Image */}
					<div
						className='absolute z-0 w-[310px] h-[200px] hidden lg:flex flex-col gap-8 rounded-3xl bg-white/70 shadow-lg px-7 py-6 -left-52 -top-16 bg-opacity-40 backdrop-blur-2xl bg-center bg-cover bg-no-repeat'
						style={{ backgroundImage: 'url(img-5.png)' }}
					>
					</div>

					<div
						className='absolute z-0 w-[400px] h-[250px] hidden lg:flex flex-col gap-8 rounded-3xl bg-white/70 shadow-lg px-7 py-6 -right-52 -bottom-36 bg-opacity-40 backdrop-blur-2xl bg-center bg-cover bg-no-repeat'
						style={{ backgroundImage: 'url(img-6.png)' }}
					>
					</div>

					{/* Login form */}
					<div className=" relative z-10 rounded-2xl bg-white shadow-xl lg:shadow-2xl">
						<div className="p-6 sm:p-16">
							<div className="space-y-4">
								<h2 className="mb-8 text-2xl font-bold text-center">
									Login to unlock the best of Viet<span className="text-secondary">wander</span>.
								</h2>
							</div>

							<div className="mt-16 grid space-y-4">

								{/* Button Continue with Google */}
								<button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-primary focus:bg-steal-50 active:bg-steal-100">
									<div className="relative flex items-center space-x-4 justify-center">
										<img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
										<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">Continue with Google</span>
									</div>
								</button>

								{/* Button Continue with Facebook */}
								<button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                       hover:border-primary focus:bg-steal-50 active:bg-steal-100">
									<div className="relative flex items-center space-x-4 justify-center">
										<img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
										<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">Continue with Facebook</span>
									</div>
								</button>
							</div>

							<div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
								<p className="text-xs">By proceeding, you agree to our <a href="#" className="underline">Terms of Use</a> and confirm you have read our <a href="#" className="underline">Privacy and Cookie Statement</a>.</p>
								<p className="text-xs">This site is protected by reCAPTCHA and the <a href="#" className="underline">Google Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	)
}

export default Login