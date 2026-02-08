import express from "express"

// import routes
import MovieRoutes from './Routes/movieRoutes.js'

const app = express();
const PORT = 5001;

app.use('/movies', MovieRoutes);

app.listen(PORT, () =>
{
  console.log(`Server running on PORT ${PORT}`);
})