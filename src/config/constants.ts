import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "production":
    //Using App Engine Env Variables
    break;
  default:
    path = `${__dirname}/../.env`;
}
dotenv.config({ path: path });

export const PORT = process.env.PORT;
export const dbUrl = process.env.DBURL;
