import app from "./app"
import config from "./app/config"

// const port =5000

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
  })