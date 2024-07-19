/**************************/
//! Imports
import mail from 'nodemailer'
import { OAuth2Client } from "google-auth-library";
import { _email_def_, _google_ } from '../environments/environments';
import { _mail } from '../interfaces/interfaces';
/**************************/
const config_send_mail = async (body_email: _mail): Promise<boolean> => {
    return new Promise(async(resolve, reject) => {
        const oAuth = new OAuth2Client({
            clientId: _google_.id,
            clientSecret: _google_.secrect,
            redirectUri: _google_.redirect_url
        })
        oAuth.setCredentials({
            refresh_token: _google_.refresh
        })
        //* |-> Control de errores tryCatch
        try {
            const access_t = await oAuth.getAccessToken()
            const transporter = mail.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    type: 'OAuth2',
                    user: _email_def_,
                    clientId: _google_.id,
                    clientSecret: _google_.secrect,
                    refreshToken: _google_.refresh,
                    accessToken: access_t
                }
            } as mail.TransportOptions);
            const result = await transporter.sendMail(body_email);
            resolve(true)
        } catch (err) {
            console.log(err);
            reject(false)
        }
    })
}
/**************************/
// TODO |-> Exportacion del modulo
export {
    config_send_mail
}