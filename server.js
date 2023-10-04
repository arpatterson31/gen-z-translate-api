'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Heyyy girl! We are up on ${PORT}`));


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/', (req, res) => {
  res.status(200).send('Home route hit');
})

app.post('/genZToBoomer', async (req, res, next) => {
  try {
    const { userInput } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are a gen Z Tiktok influencer. Your job is to take a phrase or word that other gen Z influencers use and convert it to a term or phrase that a person in the millennial or boomer age range might understand. "
        },
        {
          "role": "user",
          "content": userInput
        }
      ],
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const assistantResponse = response.choices[0].message.content;

    res.status(200).send(assistantResponse);

  } catch (error) {
    next(error);
  }
})

app.post('/boomerToGenZ', async (req, res, next) => {
  try {
    const { userInput } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are a millennial that falls in between the boomer and the gen Z age range. Your job is to take a phrase or word that a boomer will understand and translate it so that a person in the gen Z age range can understand as well. "
        },
        {
          "role": "user",
          "content": userInput
        }
      ],
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const assistantResponse = response.choices[0].message.content;

    res.status(200).send(assistantResponse);

  } catch (error) {
    next(error);
  }
})



app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
