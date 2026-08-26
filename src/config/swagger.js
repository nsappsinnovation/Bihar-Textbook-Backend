import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BTBP Backend API",
      version: "1.0.0",
      description:
        "Bihar Text Book Publication Corporation (BSTBPC) Admin Panel Backend API Documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Development Server",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "token",
        },
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
