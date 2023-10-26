import Button from "@/components/Button"

const Contact = () => {
	return (
		<div className="max-container padding-container flex flex-col py-40 lg:py-60">
			<div className="relative py-3">

				{/* Background */}
				<div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-400 shadow-lg transform skew-y-0 -rotate-3 rounded-3xl">
				</div>

				{/* Form */}
				<div className="relative px-4 py-10 shadow-lg rounded-3xl sm:p-20 bg-white border border-slate-700">
					<div className="max-w-3xl mx-auto">
						{/* Title */}
						<h1 className="text-xl lg:text-2xl font-semibold text-center mb-7">
							We're here to hear from you 😊
						</h1>
						<div className="py-8 text-base leading-6 space-y-12 sm:text-lg sm:leading-7">

							{/* Email */}
							<div className="relative">
								<input
									autoComplete="off"
									id="email"
									name="email"
									type="text"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Email"
								/>
								<label
									htmlFor="email"
									className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Email
								</label>
							</div>

							{/* Message */}
							<div className="relative">
								<input
									autoComplete="off"
									id="message"
									name="message"
									type="text"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Message"
								/>

								<label
									htmlFor="message"
									className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
								>
									Message
								</label>
							</div>

						</div>

						{/* Button Send */}
						<div className="mt-10">
							<Button
								type='button'
								title='Submit'
								variant='btn_send'
							/>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact