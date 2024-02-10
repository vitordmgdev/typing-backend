import express,{Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routers/routes";

dotenv.config(); 

const app = express();
app.use(cors())

app.get("/teste", (req:Request, res:Response) => {
    res.json([{teste:"BARABARABARA"}])
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})