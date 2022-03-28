import React from 'react'

export default function Alert(props) {
    function captiliseAlert(word){
        let wordLower = word.toLowerCase();
        return wordLower.charAt(0).toUpperCase() + wordLower.slice(1);

    }
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captiliseAlert(props.alert.type)}</strong> {props.alert.msg}
  
        </div>
    </div>
  )
}