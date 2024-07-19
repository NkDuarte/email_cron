/****************************/
//! Imports
import path from 'path'
import fs from 'fs'
import { _email_def_, _email_send_ } from '../environments/environments';
import { config_send_mail } from '../configs/email.config';
/****************************/
//? -_ Funcion que permitira la carga de datos y envio del correo
const transfer_function = () => {
    const filesDir = path.join(__dirname, '../files');
    fs.readdir(filesDir, async (err, files) => {
        if (err) {
            return console.error('Error leyendo la carpeta de archivos:', err);
        }
        //* |-> Mapeamos el arreglo para que sea un arreglo variante con los archivos que tenga la carpeta
        const attachments = files.map(file => {
            return {
                filename: file,
                path: path.join(filesDir, file)
            };
        });
        //* |-> Definicion del objeto de transferencia de correo
        const transfer = {
            from: _email_def_,
            to: _email_send_,
            subject: `URGENTE | Solicitud de Asistencia para Certificación - Ficha 2252471`,
            text: `
            Estimados

            Espero que este correo le encuentre bien.Me dirijo a usted con la finalidad de expresar mi preocupación respecto al proceso de certificación del Tecnólogo en Análisis y Desarrollo de Sistemas Informáticos correspondiente a la ficha 2252471.Actualmente resido en Jamundí, Valle del Cauca, lo que me dificulta trasladarme al municipio de Mosquera para firmar el formato de paz y salvo de forma presencial en el CBA. Esta situación se ha convertido en un obstáculo significativo, especialmente considerando que estoy a punto de perder el tiempo de certificación debido a la vigencia de dos años.Entiendo la importancia de cumplir con todos los requisitos establecidos para la certificación y estoy dispuesto/a a tomar cualquier medida necesaria para asegurar la correcta culminación del proceso. Por ello, solicito su colaboración para encontrar una solución que me permita completar la certificación a tiempo.

            Recordar que solo me hacen falta las firmas para el paz y salvo de coordinación académica, bienestar y audiovisuales.

            Adjunto todos los documentos que ya tengo junto con el paz y salvo firmado por el instructor de prácticas.
            `,
            attachments: attachments
        };
        await config_send_mail(transfer)
    });
}
/****************************/
// TODO |-> Exportacion del modulo
export {
    transfer_function
}