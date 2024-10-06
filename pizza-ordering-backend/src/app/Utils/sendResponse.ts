import { Response } from "express"

type Tres ={ statusCode:number ,success:boolean,
    message:string,
    data:any,}


const sendResponse =(res:Response,adata:Tres)=>{

        return res.status(adata.statusCode).json({
            success:adata.success,
            message:adata.message,
            data:adata.data
        })
    }



    export default sendResponse