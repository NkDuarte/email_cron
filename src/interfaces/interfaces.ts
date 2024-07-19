/***************************/
interface _google {
    id: string;
    secrect: string;
    refresh: string;
    redirect_url: string;
}

interface _mail {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string
    attachments?: any[]
}
/***************************/
// TODO |-> Exportacion de modulo
export {
    _google,
    _mail
}