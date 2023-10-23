import axios from 'axios';

const API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci/completions';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const MAX_TOKENS = 2048;

const countTokens = (text) => {
  return text.split(/\s+/).length;
};

export const getResponseFromGPT3 = async (messages, inputText) => {
  try {
    let fullConversation = messages.map(msg => `${msg.sender === 'user' ? 'User:' : 'Bot:'} ${msg.content}`).join('\n');
    fullConversation += `\nUser: ${inputText}`;

    while (countTokens(fullConversation) > MAX_TOKENS) {
      let firstNewlineIndex = fullConversation.indexOf('\n');
      if (firstNewlineIndex !== -1) {
        fullConversation = fullConversation.substring(firstNewlineIndex + 1);
      } else {
        console.error("A single message is too long and exceeds the token limit.");
        return "Error: Message too long.";
      }
    }

    const response = await axios.post(
      API_ENDPOINT,
      {
        prompt: fullConversation,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching data from GPT-3:", error);
    return "Error fetching response.";
  }
};
