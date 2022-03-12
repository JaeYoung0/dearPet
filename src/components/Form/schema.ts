import * as yup from 'yup'

export const emailValidation = yup.string().email('이메일 형식이 아닙니다.').required('이메일을 입력해주세요.')

export const passwordValidation = yup
  .string()
  // (영문 + 숫자 or 특문) | (숫자 + 특문 or 영문)
  .matches(/(^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$)|(^(?=.*\d)((?=.*\W)|(?=.*[a-zA-Z])).{8,20}$)/, {
    message: '8~20자, 영문/숫자/특수문자를 2가지 이상 조합해주세요.',
  })
  .required('8~20자, 영문/숫자/특수문자를 2가지 이상 조합해주세요.')

export const passwordCheckValidation = yup
  .string()
  .required('비밀번호를 다시 입력해주세요.')
  .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')

export const displayNameValidation = yup.string().required('이름을 알려주세요.')

export const signUpSchema = yup
  .object({
    email: emailValidation,
    password: passwordValidation,
    passwordCheck: passwordCheckValidation,
    displayName: displayNameValidation,
  })
  .required()

export const emailLoginSchema = yup
  .object({
    email: emailValidation,
    password: passwordValidation,
  })
  .required()
