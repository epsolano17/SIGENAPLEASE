import { config, validateConfig } from "./envConfig";

interface GeminiRequest {
  contents: {
    parts: {
      text: string;
    }[];
  }[];
}

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export interface GenerateContentParams {
  prompt: string;
  format: "poem" | "essay";
  tone: string;
  style: string;
  wordCount: number;
}

export const generateContent = async (
  params: GenerateContentParams,
): Promise<string> => {
  try {
    validateConfig();

    const { prompt, format, tone, style, wordCount } = params;

    // Create a detailed prompt for Gemini
    const detailedPrompt = `Generate a ${format} about "${prompt}" with the following specifications:
- Format: ${format}
- Tone: ${tone}
- Style: ${style}
- Target word count: approximately ${wordCount} words

Please create a well-structured ${format} that captures the essence of "${prompt}" while maintaining the ${tone} tone and ${style} style. ${format === "poem" ? "Use appropriate poetic devices and structure." : "Ensure proper essay structure with introduction, body, and conclusion."}`;

    const requestBody: GeminiRequest = {
      contents: [
        {
          parts: [
            {
              text: detailedPrompt,
            },
          ],
        },
      ],
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${config.geminiApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data: GeminiResponse = await response.json();

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No content generated by Gemini API");
    }

    const generatedText = data.candidates[0].content.parts[0].text;
    return generatedText;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};
