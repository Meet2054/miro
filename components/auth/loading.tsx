
import Image from 'next/image'

const loading = () => {
  return (
    <div className='w-ful h-full flex flex-col  justify-center items-center'>
      <Image src='/logo.svg' alt='logo' width={120} height={120}
      className='animate-pulse duration-700'
      />
    </div>
  )
}

export default loading
