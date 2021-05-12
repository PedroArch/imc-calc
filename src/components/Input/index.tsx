import * as S from './styles'

interface InputProps {
  label: string;
  attribute: number;
  setAttribute: (number: number) => void;
}

export default function Input (props: InputProps) {
  const steps: number = props.label === 'Altura' ? 0.01 : 1;

  return (
    <S.Container>
      <label htmlFor={props.label}>{props.label}</label>
      <input 
        placeholder={props.label} 
        id={props.label} 
        type="number"
        min="0"
        step={steps}
        className="validate"
        onChange={(event) => {props.setAttribute(Number(event.target.value))}}
        value={props.attribute}
        />
    </S.Container>
  )
}