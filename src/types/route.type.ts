/**
 * enum has all route of app
 */
export enum Eroute {
    // auth
    AUTH_LOGIN_POST = 'login',
    AUTH_LOGOUT_DELETE = 'auth/logout',
    AUTH_VERIFIED = 'auth/verified',

    // forgot password
    FORGOT_PASSWORD = 'forgot-password',
    RESET_PASSWORD = 'reset-password',

    // user
    UPLOAD_PICTURE = 'user/upload/avatar',
    UPDATE_PROFIL = 'user/profil/update',
    DELETE_PROFIL = 'user/delete',
    UPDATE_PASSWORD = 'user/profil/update/password',

    // commentaireClub
    SEND_COMMENTAIRE_CLUB = 'commentaire/create',

    // add land
    ADD_LAND = 'land/create',

    // edit land
    UPDATE_LAND = 'land/update/',

    // delete land
    DELETE_LAND = 'land/delete/',

    // add hobby
    ADD_HOBBY = 'hobby/create',

    // edit hobby
    UPDATE_HOBBY = 'hobby/update/',

    // delete hobby
    DELETE_HOBBY = 'hobby/delete/',

    // add Activity
    ADD_ACTIVITY = 'activity/create',

    // edit activity
    UPDATE_ACTIVITY = 'activity/update/',

    // delete activity
    DELETE_ACTIVITY = 'activity/delete/',

    // add club
    ADD_CLUB = 'club/create',

    // edit club
    UPDATE_CLUB = 'club/update/',

    // delete club
    DELETE_CLUB = 'club/delete/',
  }
