import { InputHTMLAttributes, memo } from 'react'
import { withContextForm } from 'formcat'

import * as S from './styles'

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: boolean
}

const InputField = ({ label, error = false, ...input }: InputFieldProps) => (
  <S.Wrapper>
    <S.Label htmlFor={label}>{label}</S.Label>
    <S.Input error={error} id={label} {...input} />
  </S.Wrapper>
)

export default withContextForm(memo(InputField))
