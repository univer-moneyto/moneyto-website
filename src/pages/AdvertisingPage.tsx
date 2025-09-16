import { useEffect } from 'react'
import AdvertisingSection from '../components/AdvertisingSection'

const AdvertisingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16">
      <AdvertisingSection />
    </div>
  )
}

export default AdvertisingPage