import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className = 'mx-auto flex-grow content-end'>
      <nav className = 'flex justify-center gap-3 text-buttonCol pb-8 *:border *:rounded-full *:size-6 *:text-center *:p-1 *:text-sm *:ease-linear *:duration-150'>
        <a href='https://facebook.com' className = 'hover:text-white hover:bg-buttonCol active:scale-90'><FaFacebookF /></a>
        <a href='https://x.com' className = 'hover:text-white hover:bg-buttonCol active:scale-90'><FaTwitter /></a>
        <a href='https://instagram.com' className = 'hover:text-white hover:bg-buttonCol active:scale-90'><FaInstagram /></a>
      </nav>
        <p className = 'text-2xs text-textCol2'>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  )
}

export default Footer