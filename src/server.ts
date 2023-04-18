import app from "./app";

const SERVICE_PORT = 3000 || process.env.PORT;

app.listen(SERVICE_PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${SERVICE_PORT}`);
});