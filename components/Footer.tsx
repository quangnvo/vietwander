import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FooterColumnProps = {
  children: React.ReactNode;
}

const FooterColumn = ({ children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      {children}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="flexCenter mb-8">
      <div className="padding-container max-container flex w-full flex-col gap-8">

        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/vietwander-logo.svg"
              alt="Vietwander Logo"
              width={150}
              height={50}
            />
          </Link>

          {/* Icons */}
          <FooterColumn>
            <ul className="regular-14 flex gap-4 text-gray-30 items-center">
              {SOCIALS.links.map((link) => (
                <Link href="#" key={link}>
                  <Image src={link} alt="logo" width={24} height={24} />
                </Link>
              ))}
            </ul>
          </FooterColumn>
        </div>



        {/* Bottom */}
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Vietwander | All rights reserved
        </p>
      </div>
    </footer >
  )
}

export default Footer