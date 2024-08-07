import { useState } from "react"

export const useNav = () => {
  const [isActive, setIsActive] = useState(false)
  
  const handleNav = () => {
    setIsActive(!isActive);
    console.log(isActive)
  }

  return {
    isActive,
    handleNav
  }
}
