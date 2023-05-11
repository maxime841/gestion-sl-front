import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FormUpdatePassword() {
  const { error, password } = Store.user.useUpdatePasswordProfil()
  console.log('mon erreur', error, 'mon passwordProfil', password)

  const navigate = useNavigate()
  const [current_password, setCurrentPassword] = useState('')
  const [newPassword, setPassword] = useState('')
  const [passwordConfirme, setPasswordConfirme] = useState('')
  useEffect(() => {
    setCurrentPassword(password)
    setPassword(newPassword)
    setPasswordConfirme(passwordConfirme)
  }, [password])

  const handlerUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    // Store.user.activateResetPasswordLoadding()
    const res = await Store.user.updatePasswordProfil(
      current_password,
      password,
      passwordConfirme,
    )
    console.log('res', res)
    if (res) {
      navigate('/user/profil')
    }
    // Store.user.disabledResetPasswordLoadding()
  }

  return (
    <form onSubmit={handlerUpdatePassword}>
       {/* input password current */}
       <InputFull
        placeholder='Mot de passe'
        value={current_password ?? ''}
        name='current_password'
        setValueInput={setCurrentPassword}
        addClass='mb-3'
        type='password'
        eye
        required
      />

      {/* input password */}
      <InputFull
        placeholder='Nouveau mot de passe'
        value={newPassword ?? ''}
        name='password'
        setValueInput={setPassword}
        addClass='mb-3'
        type='password'
        eye
        required
      />

      {/* input password_confirmation */}
      <InputFull
        placeholder='Confirmer le nouveau mot de passe'
        value={passwordConfirme ?? ''}
        name='passwordConfirme'
        setValueInput={setPasswordConfirme}
        addClass='mb-3'
        type='password'
        eye
        required
      />

      {/* error text */}
      <ErrorText position='text-center sm:text-left'>{error}</ErrorText>

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        <Btn submit>Modifier</Btn>
      </div>
    </form>
  )
}
