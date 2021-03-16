const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
    './src/routes/professional/professional.js',
    './src/routes/professionalType/professionalType.js'
];

swaggerAutogen(outputFile, endpointsFiles)
