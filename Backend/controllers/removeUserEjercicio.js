import { mysqlConnection } from "../bdcon/bdcon"

removeUserEjercicio = (req,res) => {
    mysqlConnection.connect();
    mysqlConnection.query("insert into table.db values ('usuario','password'")
    mysqlConnection.end();
}

export {removeUserEjercicio};