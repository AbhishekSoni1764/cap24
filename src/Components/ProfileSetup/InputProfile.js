import React from 'react'
import styles from './profilesetup.module.css'

const InputProfile = (props) => {
  return (
    <div className={styles.inputfield}>
      <img src={props.icon} alt={props.icon}/>
      {
        props.input ? 
        <input {...props.input} onChange = { e => props.dispatch(e.target.value)} />
        :
        props.children
      }
    </div>
  )
}

export default React.memo(InputProfile)