/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { descriptionsDB } from '../../utils/descriptions'

interface ButtonProps {
  weight: number;
  height: number;
  setResult: (number: number) => void;
}

function index({
  weight, 
  height,
  setResult
}: ButtonProps) {
  
  function imcCalc() {
    const finalResult = Number(((weight) /( height * height)).toFixed(2));
    setResult(finalResult)
  }

  return (
    <div>
      <a className="waves-effect waves-light btn" onClick={imcCalc}>Calcular</a>
    </div>
  )
}

export default index
