import {useEffect, useState} from 'react'

export const useOutsideClick = (el, initialState) => {
  
  const [menuActive, setMenuActive] = useState(initialState)
  
  useEffect(() => {
    const onClick = e => {
      if(el.current !== null && !el.current.contains(e.target)){
        setMenuActive(!menuActive)
      }
    }

    if(menuActive){
      window.addEventListener("click", onClick)
    }

    return () => {
      window.removeEventListener("click", onClick)
    }
  },[menuActive, el])

  return [menuActive, setMenuActive]
}