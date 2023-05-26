const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(200).send("Servidor funcionando 🤵");
})

app.listen(3000, () => {console.info('app start!')})
