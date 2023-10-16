# Gen Z Translation App API

This repository contains a Node.js server that provides two API endpoints to interact with the OpenAI GPT-4 model. These endpoints allow for translating phrases between different generations, specifically from "Generation Z" (Gen Z) to "Baby Boomer" (Boomer), and vice versa. The server is built using the Express framework and utilizes the OpenAI API.

## Built With

[![Node][Node.js]][Node-url]
[![Express][Express.js]][Express-url]
[![OpenAI][OpenAI]][OpenAI-url]

## Getting Started

Follow these instructions to set up and run the Gen Z Translation App on your local machine.

### Prerequisites

Make sure you have the following software installed on your system:

1. Node.js and npm installed on your system.
1. An OpenAI API key, which can be obtained from the OpenAI platform. You should have your API key saved in a .env file at the root of the project.

### Installation

*This application is a full-stack application and you will also need the corresponding front-end located here: [gen-z-front-end](https://github.com/arpatterson31/gen-z-front-end)*

1. Clone the repo

   ```sh
   git clone https://github.com/arpatterson31/gen-z-translate-api.git
   ```

2. Install NPM packages

   ```sh
   cd gen-z-translate-api
   npm install
   ```

3. Run the server

   ```sh
   npm start
   ```

  By default, the server will run on port 3002, but you can specify a different port by modifying the PORT variable in the `.env` file or directly in the code.

### Configuration

Make sure to create a `.env` file in the root of the project and add your OpenAI API key as follows:

```sh
   OPENAI_API_KEY=your_openai_api_key_here
```

## Endpoints

### GenZToBoomer Translation

- Endpoint: `POST /genZToBoomer`
- Description: This endpoint takes a phrase or word commonly used by Gen Z and translates it into terms or phrases that a person in the Boomer age range might understand.
- Request Body:
  - `userInput` (string): The Gen Z phrase to be translated.
- Response: The server responds with the translated phrase.

### BoomerToGenZ Translation

- Endpoint: `POST /boomerToGenZ`
- Description: This endpoint takes a phrase or word that a Boomer would understand and translates it so that a person in the Gen Z age range can understand it.
- Request Body:
  - `userInput` (string): The Boomer phrase to be translated.
- Response: The server responds with the translated phrase.

### Error Handling

The server includes basic error handling. If an error occurs, the server will respond with a 500 Internal Server Error along with an error message.

### Additional Notes

- The server uses the OpenAI GPT-4 model for text generation and translation. Make sure to have a valid API key from OpenAI.
- You can customize the translation model, temperature, max tokens, and other parameters used in the OpenAI requests by modifying the corresponding values in the endpoint handler functions.
- For production use, consider deploying the server on a production-ready environment and securing it properly.

## Acknowledgments

- [Img Shields](https://shields.io)

[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[OpenAI]: https://img.shields.io/badge/OpenAI-00B2FF?style=for-the-badge
[OpenAI-url]: https://openai.com/
