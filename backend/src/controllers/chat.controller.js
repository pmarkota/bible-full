import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class ChatController {
  async sendMessage(req, res) {
    try {
      console.log("Received chat request from user:", req.user?.id);
      console.log("Request body:", req.body);

      const { message } = req.body;
      if (!message) {
        console.error("No message provided in request");
        return res.status(400).json({ error: "Message is required" });
      }

      // Create system message for biblical context
      const systemMessage = {
        role: "system",
        content:
          "You are a knowledgeable biblical advisor. Your responses should be based on biblical teachings and principles. Provide guidance with wisdom, compassion, and scriptural references when appropriate.",
      };

      console.log("Sending request to OpenAI...");
      // Get completion from OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [systemMessage, { role: "user", content: message }],
        temperature: 0.7,
        max_tokens: 500,
      });

      const response = completion.choices[0].message.content;
      console.log("Received response from OpenAI");

      return res.status(200).json({ response });
    } catch (error) {
      console.error("Chat error:", error);
      console.error("Error details:", error.message);
      console.error("Error stack:", error.stack);
      return res.status(500).json({ error: error.message });
    }
  }
}
