import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div>
    <div className='naglowek'>
    <h1>
      TESTOWA STRONA
    </h1>
      <div className='TP'>
          <a href='#section1' className='a1'>SEKCJA 1</a>
          <a href='#section2' className='a2'>SEKCJA 2</a>
      </div>
      </div>
      <div className='kolorek'>
      <section id="section1">
        <div className='div2'>
          <p>
          <code>sekcja 1<code id="back"><a href="#" className='backi' id="a12">    wroc</a></code><br></br><br></br></code>
            Ex aliquip amet nostrud officia. Aliqua consequat aliqua occaecat duis mollit cupidatat in esse laboris reprehenderit enim. Fugiat minim pariatur laborum incididunt cupidatat anim sunt nisi. Et laborum tempor laboris amet.

Esse ad non adipisicing cillum minim eiusmod. Ipsum dolor laborum incididunt id laborum ad ut sint laboris dolor. Pariatur commodo tempor ad duis consequat nulla do cupidatat. Irure veniam veniam fugiat anim deserunt sit ea anim fugiat.
          </p>
        </div>
      </section>
    
      <section id="section2">
        <div className='div3'>
          <p>
          <code>sekcja 2<code id="back"><a href="#" className='backi' id="a11">    wroc</a></code><br></br><br></br></code>
            Ex aliquip amet nostrud officia. Aliqua consequat aliqua occaecat duis mollit cupidatat in esse laboris reprehenderit enim. Fugiat minim pariatur laborum incididunt cupidatat anim sunt nisi. Et laborum tempor laboris amet.

Esse ad non adipisicing cillum minim eiusmod. Ipsum dolor laborum incididunt id laborum ad ut sint laboris dolor. Pariatur commodo tempor ad duis consequat nulla do cupidatat. Irure veniam veniam fugiat anim deserunt sit ea anim fugiat.
          </p>
        </div>
      </section>
      </div>
      </div>
  )
}

export default App
