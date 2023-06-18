import React from 'react'
import Styles from './Styles/Style.module.css'

const Main = (props) => {
  return (
    <div className={Styles.Main}>
            {props.children}

    </div>
  )
}

export default Main
