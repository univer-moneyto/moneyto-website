import { useEffect } from 'react'
import ServiceSection from '../components/ServiceSection'

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16">
      <ServiceSection />
    </div>
  )
}

export default ServicePage