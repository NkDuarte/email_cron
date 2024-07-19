/************************/
//! Import
import express from 'express'
import cors from 'cors'
import { _port_ } from './environments/environments'
import { initial_demon } from './services/cron.services'
/************************/
//? Inicializacion del demon
const app: express.Application = express()
//? Configuracion
app.use(cors())
/************************/
/**
 * @DemonCron
 */
initial_demon()
/************************/
//? Arranque Demon
app.listen(_port_, () => console.log(`Demon listen ${_port_}`))