'use client'

// import Navbar from './components/navbar/Navbar'
// import { NavbarContext, initialNavbarState } from './contexts/NavbarContext'
// import { NavbarItems } from './components/navbar/NavbarItems'
// import { NavbarState, NavbarAction } from './typing/NavbarTypes'
import { useEffect, useReducer } from 'react'
import Link from 'next/link'
import DumpHex from '@/components/disassembly/radare2/dumpHex/dumpHex'
import { NavbarState, NavbarAction } from './typing/NavbarTypes'
import { NavbarContext, initialNavbarState } from './contexts/NavbarContext'
import Navbar from '@/components/navbar/Navbar'
import { navbarReducer } from './reducers/navbarReducer'

export default function Home() {
  const [state, dispatch] = useReducer(navbarReducer, initialNavbarState);
  useEffect(() => {
    console.log("use effecte activated from page.tsx ....." + "current component is " +
      state.currentComponent
    )
    // if (state.currentComponent instanceof NavbarIte)
  }, [state])
  return (
    <>
      <header className='py-4 px-6'>
        <NavbarContext.Provider value={{state, dispatch}}>
          <Navbar />
        </NavbarContext.Provider>
      </header>


      <main className='py-8 px-6'>
      {state.currentComponent}
      </main>



      <footer>
        &copy; 2023 My Website. Al rights reserved.
      </footer>
    </>
  )
}
