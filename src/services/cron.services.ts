/***************************/
//! Import
import cron from 'node-cron'
import { transfer_function } from '../function/transfer_email.function';
/***************************/
const initial_demon = () => {
    cron.schedule('0,30 * * * *', () => {
        transfer_function()
    });
}
/***************************/
// TODO |-> Exportacion del modulo
export {
    initial_demon
}