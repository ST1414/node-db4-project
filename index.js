// 4.2.4 DATA MODELING - PROJECT
// Thu. Dec. 9, 2021

const server = require('./api/server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`\n*** SERVER IS LISTENING ON PORT ${PORT} ***`)
})