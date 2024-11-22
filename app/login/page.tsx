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
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 48 48"
											width="24"
											height="24"
										>
											<path
												fill="#4285F4"
												d="M24 9.5c3.1 0 5.6 1.1 7.5 2.9l5.6-5.6C33.4 3.2 28.9 1 24 1 14.6 1 6.9 6.6 3.4 14.3l6.9 5.3C12.1 13.1 17.5 9.5 24 9.5z"
											/>
											<path
												fill="#34A853"
												d="M46.5 24c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.4 5.5-5 7.2l7.7 5.9c4.5-4.1 7.1-10.1 7.1-17.6z"
											/>
											<path
												fill="#FBBC05"
												d="M10.3 28.6c-1.1-3-1.1-6.2 0-9.2l-6.9-5.3c-2.9 5.8-2.9 12.8 0 18.6l6.9-5.3z"
											/>
											<path
												fill="#EA4335"
												d="M24 46.5c5.9 0 11.3-2 15.5-5.5l-7.7-5.9c-2.2 1.5-4.9 2.4-7.8 2.4-6.5 0-12-4.1-14-9.9l-6.9 5.3C6.9 41.4 14.6 46.5 24 46.5z"
											/>
											<path fill="none" d="M0 0h48v48H0z" />
										</svg>

										<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">Continue with Google</span>
									</div>
								</button>

								{/* Button Continue with Facebook */}
								<button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                       hover:border-primary focus:bg-steal-50 active:bg-steal-100">
									<div className="relative flex items-center space-x-4 justify-center">
										{/* Facebook logo */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 48 48"
										>
											<path
												fill="#1877F2"
												d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24"
											/>
											<path
												fill="#FFFFFF"
												d="M33.342 30.938L34.406 24H27.75v-4.5c0-1.9.93-3.75 3.911-3.75h3.026V9.844s-2.747-.469-5.372-.469c-5.482 0-9.065 3.323-9.065 9.337V24h-6.094v6.938h6.094v16.77c1.225.182 2.476.292 3.75.292s2.525-.11 3.75-.292v-16.77h5.592z"
											/>
										</svg>

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
		</div>
	)
}

export default Login