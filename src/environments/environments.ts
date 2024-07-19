/***********************/
//! Imports
import dotenv from 'dotenv'
import { _google } from '../interfaces/interfaces'
/***********************/
//? config environment
dotenv.config()
/***********************/
//* Variables exportables
const _port_: number = Number(process.env.PORT)
const _google_: _google = { id: String(process.env.GOOGLE_ID), secrect: String(process.env.GOOGLE_SECRET), refresh: String(process.env.OAUTH_TOKEN), redirect_url: String(process.env.REDIRECT_URL_GOO) }
const _email_def_: string = String(process.env.EMAIL_DEF)
const _email_send_: string = String(process.env.EMAIL_SEND)
/***********************/
// TODO -> Exportacion del modulo
export {
    _port_,
    _google_,
    _email_def_,
    _email_send_
}