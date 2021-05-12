import * as S from './styles'

interface DashboardProps {
  result: number;
  description: string;
  type: string;
}

function index({result, description, type}: DashboardProps) {
  return (
    <S.Container>
      <label>
        <h2>Resultado: {result}</h2>
        <h4>Tipo: {type}</h4>
        <p>{description}</p>
      </label>
    </S.Container>
  )
}

export default index
