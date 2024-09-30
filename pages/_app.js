import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (
    <div className="border-b p-6 bg-ether">
      <nav className="border-b p-6 ">
        <p className="text-4xl font-bold flex justify-center text-gray-200">NFT Marketplace</p>
        <div className="flex justify-center p-8" >
          <Link href="/"  className="mr-4 text-xl text-gray-200">
            
              Home
          
          </Link>
          <Link href="/createNFT" className="mr-6 text-xl text-gray-200">
          
              Create NFTs
            
          </Link>
          <Link href="/myNFTs" className="mr-6 text-xl text-gray-200">
            
              My NFTs
          
          </Link>
          <Link href="/dashboard" className="mr-6 text-xl text-gray-200">
           
              Dashboard
          
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
    
  )
}

export default Marketplace