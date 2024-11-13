const express = require('express');
const app = express();
const experienceRoutes = require('./routes/experienceRoutes'); 
const bodyParser = require('body-parser');
const personalInfoRoutes = require('./routes/personalInfoRoutes');

app.use(express.json());


app.use('/api', experienceRoutes);
app.use('/api', personalInfoRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
