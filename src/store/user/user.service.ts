import { http } from '../../config/http/http.instance'
import { AppService } from '../app/app.service'
import { Store } from '../store'
import { TokenService } from '../token/token.service'
import { Eerror } from '../../types/error.type'
import { Ijwt } from '../../types/models/jwt.model'
import {
  IUsersResponse,
  Iuser,
  IuserLogout,
  IuserUpdateResponse,
  TresetPassword,
  TupdatePasswordResponse,
} from '../../types/models/user.model'
import { Eroute } from '../../types/route.type'
import { userStore } from './user.store'

export const userService = {
  /**
   * get all users
   */
  getAllUsers: async () => {
    const res = await http.get<IUsersResponse>('users') // ici on a response
    userStore.users$.next([...res.data.users!])
  },
  /**
   * set user connected
   * @param user Iuser
   */
  setUserCurrent: (user: Iuser) => {
    userStore.userCurrent$.next({ ...user })
  },

  /**
   * remove user connected
   */
  removeUserCurrent: () => {
    userStore.userCurrent$.next({} as Iuser)
  },

  /**
   * reset all error related to user
   */
  resetError: () => {
    userStore.loginError$.next('')
  },

  /**
   * connexion user
   * @param email string
   * @param password string
   */
  login: async (email: string, password: string) => {
    try {
      userStore.loginLoading$.next(true)
      // login
      const res = await http.post<Ijwt>(`${Eroute.AUTH_LOGIN_POST}`, {
        email,
        password,
      })

      // is connected add token add userCurrent
      if (res.data.authenticated) {
        TokenService.setTokenWithSetStorage(res.data.access_token!)
        userService.setUserCurrent(res.data.user!)
      }

      userStore.loginLoading$.next(false)
    } catch (error) {
      AppService.errorMessage(userStore.loginError$, error, Eerror.LOGIN)
      userStore.loginLoading$.next(false)
    }
  },

  /**
   * disconnect user
   */
  logout: async () => {
    try {
      userStore.logoutLoading$.next(true)
      // logout
      const res = await http.delete<IuserLogout>(`${Eroute.AUTH_LOGOUT_DELETE}`)

      // if disconnect remove token remove usercurrent
      if (!res.data.authenticated) {
        TokenService.removeTokenAndStorage()
        userService.removeUserCurrent()
      }

      userStore.logoutLoading$.next(false)
      return true
    } catch (error) {
      TokenService.removeTokenAndStorage()
      userService.removeUserCurrent()
      userStore.logoutLoading$.next(false)
      return false
    }
  },

  /**
   * send email for forgot password
   * @param email string
   */
  sendForgotPassword: async (email: string) => {
    try {
      const res = await http.post<{ send_email: boolean }>(
        Eroute.FORGOT_PASSWORD,
        { email },
      )
      if (res.data.send_email) {
        // ! toastify
        return true
      }
      return false
    } catch (error) {
      AppService.errorMessage(
        userStore.forgotPasswordError$,
        error,
        Eerror.FORGOT_PASSWORD,
      )
      userStore.forgotPasswordLoading$.next(false)
      return false
    }
  },

  /**
   * reset password
   * @param data TresetPassword
   */
  resetPassword: async (data: TresetPassword) => {
    try {
      const res = await http.post<{ update_password: boolean }>(
        Eroute.RESET_PASSWORD,
        { ...data },
      )
      if (res.data.update_password) {
        // ! toastify
        return true
      }
      return false
    } catch (error) {
      AppService.errorMessage(
        userStore.resetPasswordError$,
        error,
        Eerror.FORGOT_PASSWORD,
      )
      userStore.resetPasswordLoading$.next(false)
      return false
    }
  },

  /**
   * active loader for forgot password
   */
  activateForgotPasswordLoadding: () => {
    userStore.forgotPasswordLoading$.next(true)
  },

  /**
   * disable loader for forgot password
   */
  disabledForgotPasswordLoadding: () => {
    userStore.forgotPasswordLoading$.next(true)
  },

  /**
   * active loader for reset password
   */
  activateResetPasswordLoadding: () => {
    userStore.resetPasswordLoading$.next(true)
  },

  /**
   * disable loader for reset password
   */
  disabledResetPasswordLoadding: () => {
    userStore.resetPasswordLoading$.next(true)
  },

  /**
   * update picture via formData
   * @param picture IPicture
   */
  updatePicture: async (picture: FormData) => {
    try {
      const res = await http.post(Eroute.UPLOAD_PICTURE, picture)
      console.log(res)
    } catch (error) {
      AppService.errorMessage(
        userStore.resetPasswordError$,
        error,
        Eerror.FORGOT_PASSWORD,
      )
      userStore.resetPasswordLoading$.next(false)
      return false
    }
  },

  /**
   * update profil via FormData
   * @param profil Iuser
   */
  updateProfil: async (profil: any) => {
    try {
      const res = await http.put<IuserUpdateResponse>(
        Eroute.UPDATE_PROFIL,
        profil,
      )
      console.log('ma res', res)
      Store.user.setUserCurrent(res.data.user_updated)
      AppService.errorMessage(
        userStore.updateProfilError$,
        Eerror.UPDTATE_PROFIL,
      )
    } catch (error) {
      AppService.errorMessage(
        userStore.updateProfilError$,
        error,
        Eerror.FORGOT_PASSWORD,
      )
      userStore.resetPasswordLoading$.next(false)
      return false
    }
  },

  /**
   * update password via FormData
   */
   updatePasswordProfil: async (current_password: any, password: any, passwordConfirme: any) => {
    try {
      console.log('je rentre la')
      const res = await http.put<TupdatePasswordResponse>(
        Eroute.UPDATE_PASSWORD,
        current_password,
        password,
      )
      console.log('ma reponse', res)
      Store.user.setUserCurrent(res.data.current_password)
    } catch (error) {
      AppService.errorMessage(
        userStore.updatePasswordProfilError$,
        error,
        Eerror.FORGOT_PASSWORD,
      )
      userStore.resetPasswordLoading$.next(false)
      return false
    }
  },

  deleteProfil: async (profil: Iuser) => {
    try {
      const res = await http.post(Eroute.DELETE_PROFIL, profil)
      console.log(res)
    } catch (error) {
      AppService.errorMessage(
        userStore.resetPasswordError$,
        error,
        Eerror.FORGOT_PASSWORD,
      )
      userStore.resetPasswordLoading$.next(false)
      return false
    }
  },
}
