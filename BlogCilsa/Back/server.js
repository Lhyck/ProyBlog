const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Blog"
});
/*
app.post("/create", (req, res) => {
    const { nombre, apellido, email, telefono, destino, cantidad_pasajeros, precio_unitario, precio_total } = req.body;

    db.query(
        'INSERT INTO reservas(nombre, apellido, email, telefono, destino, cantidad_pasajeros, precio_unitario, precio_total) VALUES(?,?,?,?,?,?,?,?)',
        [nombre, apellido, email, telefono, destino, cantidad_pasajeros, precio_unitario, precio_total],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al guardar la reserva.");
            } else {
                res.status(200).send("Reserva guardada en BD.");
            }
        }
    );
});

app.get("/reservas", (req, res) => {
    db.query('SELECT * FROM reservas', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener las reservas.");
        } else {
            res.status(200).send(result);
        }
    });
});

app.put("/updateReserva", (req, res) => {
    const { id, cantidad_pasajeros, precio_total } = req.body;

    db.query(
        'UPDATE reservas SET cantidad_pasajeros = ?, precio_total = ? WHERE id = ?',
        [cantidad_pasajeros, precio_total, id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al actualizar la reserva.");
            } else {
                res.status(200).send("Reserva actualizada.");
            }
        }
    );
});

app.delete("/deleteReserva/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        'DELETE FROM reservas WHERE id = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al eliminar la reserva.");
            } else {
                res.status(200).send("Reserva eliminada.");
            }
        }
    );
});
*/
app.listen(3001, () => {
    console.log("    Corriendo en el puerto")
})