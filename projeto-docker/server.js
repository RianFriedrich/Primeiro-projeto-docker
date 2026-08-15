const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
    host: "banco",
    port: 5432,
    user: "admin",
    password: "123456",
    database: "minha_api"
});

app.get("/", (req, res) => {
    res.send("Hello Docker! 🐳");
});

app.get("/banco", async (req, res) => {
    try {
        const resultado = await pool.query("SELECT NOW()");

        res.json({
            mensagem: "API conectada ao PostgreSQL",
            horarioBanco: resultado.rows[0].now
        });
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: "Não consegui conectar ao banco."
        });
    }
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Servidor rodando na porta 3000");
});