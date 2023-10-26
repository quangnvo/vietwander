import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="flexCenter mb-8">
      <div className="padding-container max-container flex w-full flex-col gap-8">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">

          {/* Logo */}
          <Link href="/" className='pb-10 md:pb-0'>
            <Image
              src="/vietwander-logo.svg"
              alt="Vietwander Logo"
              width={150}
              height={50}
            />
          </Link>

          {/* Footer Links */}
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index} >
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="#" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact */}
            <div className="flex flex-col gap-1">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="#"
                    key={link.label}
                    className="flex gap-2 md:flex-col lg:flex-row items-center"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30 items-center">
                  {SOCIALS.links.map((link) => (
                    <Link href="#" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />

        {/* Bottom */}
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Vietwander | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer