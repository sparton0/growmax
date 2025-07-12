import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Growmax Engineers',
  description: 'Solar and Electrical Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
