const express = require('express');
const app = express();
const experienceRoutes = require('./routes/experienceRoutes'); // Importando as rotas
const bodyParser = require('body-parser');
const personalInfoRoutes = require('./routes/personalInfoRoutes');

// Middleware para permitir o envio de JSON
app.use(express.json());

// Usando as rotas
app.use('/api', experienceRoutes);
app.use('/api', personalInfoRoutes); // Usando as rotas para a API


// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
