import React from 'react'
import { pricingPlans } from '@/constants'
import Button from './Button'

const PricingPlans = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-16 lg:gap-8 mt-14 mb-24'>
            {pricingPlans.map((plan) => (
                <div
                    key={plan.title}
                    className='rounded-2xl border border-slate-200 bg-white shadow-lg p-8 relative flex flex-col hover:border-2 hover:border-purple-600'
                >

                    {/* Title */}
                    <h3 className='text-lg font-semibold leading-5'>{plan.title}</h3>
                    {plan.mostPopular &&
                        <p className='absolute top-0 -translate-y-1/2 bg-primary px-3 py-0.5 text-sm text-white font-semibold tracking-wide rounded-full shadow-md'>
                            Most Popular
                        </p>
                    }
                    <p className='mt-4 text-slate-700 text-sm leading-6 h-12'>
                        {plan.description}
                    </p>

                    {/* Price */}
                    <div className='mt-4 rounded-lg bg-purple-50 p-6 -mx-6'>
                        <p className='text-sm font-semibold text-slate-500 flex items-center'>
                            <span>{plan.currency}</span>
                            <span className='text-4xl ml-3 text-slate-900'>
                                ${plan.price}
                            </span>
                            <span className='ml-1.5'>{plan.frequency}</span>
                        </p>
                    </div>

                    {/* Features */}
                    <ul className='mt-6 space-y-4 flex-1'>
                        {plan.features.map((feature) => (
                            <li key={feature} className='text-sm leading-6 text-slate-700 flex gap-3 items-center'>
                                <svg
                                    className='h-4 w-4 '
                                    viewBox="0 0 55 55"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M54.0505 27.0252C54.0505 41.9509 41.9509 54.0505 27.0252 54.0505C12.0996 54.0505 0 41.9509 0 27.0252C0 12.0996 12.0996 0 27.0252 0C41.9509 0 54.0505 12.0996 54.0505 27.0252ZM23.8992 41.3349L43.9502 21.2839C44.6311 20.603 44.6311 19.499 43.9502 18.8182L41.4845 16.3524C40.8036 15.6715 39.6996 15.6715 39.0187 16.3524L22.6663 32.7047L15.0318 25.0702C14.3509 24.3893 13.2469 24.3893 12.566 25.0702L10.1002 27.5359C9.41939 28.2167 9.41939 29.3207 10.1002 30.0016L21.4334 41.3348C22.1144 42.0157 23.2183 42.0157 23.8992 41.3349Z" fill="#5D50C6" />
                                </svg>

                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Call to action */}
                    <div className='mt-12'>
                        {plan.mostPopular ?
                            <Button
                                type='button'
                                title={plan.cta}
                                variant='btn_purple_pricing_popular'
                                full
                            /> :
                            <Button
                                type='button'
                                title={plan.cta}
                                variant='btn_purple_pricing_non_popular'
                                full
                            />
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PricingPlans