

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });



export default {

    port : process.env.PORT,
    NODE_ENV : process.env.NODE_ENV,
    database_Url:process.env.MONGOOSE_URL,
    accessToken:process.env.accessTokenSecret,
   refreshToken:process.env.refreshTokenSecret,
   accessTokenexpiries:process.env.JWT_ACCESS_EXPIRES_IN,
   refreshTokenexpiries:process.env.JWT_REFRESH_EXPIRES_IN,
   reset_pass_base_url:process.env.RESET_PASS_UI_LINK,
   gmail_app_secret : process.env.gmail_app_pass
}