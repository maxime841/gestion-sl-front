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
    SEND_COMMENTAIRE_CLUB = '/club/id/comment',

    // commentaireDj
    SEND_COMMENTAIRE_DJ = '/dj/id/comment',

     // commentaireHost
     SEND_COMMENTAIRE_HOST = '/host/id/comment',

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

    // add dj
    ADD_DJ = 'dj/create',

    // edit dj
    UPDATE_DJ = 'dj/update/',

    // delete dj
    DELETE_DJ = 'dj/delete/',

    // add dancer
    ADD_DANCER = 'dancer/create',

    // edit dancer
    UPDATE_DANCER = 'dancer/update/',

    // delete dancer
    DELETE_DANCER = 'dancer/delete/',

    // add host
    ADD_HOST = 'host/create',

    // edit host
    UPDATE_HOST = 'host/update/',

    // delete host
    DELETE_HOST = 'host/delete/',

    // add shop
    ADD_SHOP = 'shop/create',

    // edit shop
    UPDATE_SHOP = 'shop/update/',

    // delete shop
    DELETE_SHOP = 'shop/delete/',

    // add article
    ADD_ARTICLE = 'article/create',

    // edit article
    UPDATE_ARTICLE = 'article/update/',

    // delete article
    DELETE_ARTICLE = 'article/delete/',

     // add tenant
     ADD_TENANT = 'tenant/create',

     // edit tenant
     UPDATE_TENANT = 'tenant/update/',

     // delete tenant
     DELETE_TENANT = 'tenant/delete/',
   }
