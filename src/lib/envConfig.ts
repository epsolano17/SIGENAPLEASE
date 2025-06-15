export const config = {
  geminiApiKey:
    import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY,
};

export const validateConfig = () => {
  if (!config.geminiApiKey) {
    throw new Error("GEMINI_API_KEY is required but not provided");
  }
};
