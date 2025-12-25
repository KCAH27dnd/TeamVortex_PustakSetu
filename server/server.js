import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("🚀 Server file loaded");

dotenv.config();

if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY not found in .env");
  process.exit(1);
}

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("VORTEX AI Server is running 🚀");
});

// ✅ AI IMAGE ANALYSIS ROUTE
app.post("/analyze-book", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent([
  {
    text: "Identify the book title, subject, and condition from this image."
  },
  {
    inlineData: {
      mimeType: req.file.mimetype,
      data: req.file.buffer.toString("base64")
    }
  }
]);


    const text = result.response.text();

    res.json({
      success: true,
      result: text
    });

  } catch (error) {
    console.error("❌ AI ERROR:", error);
    res.status(500).json({ success: false, error: "AI failed" });
  }
});

const PORT = process.env.PORT || 5000;
console.log("🔑 API KEY FOUND:", !!process.env.GEMINI_API_KEY);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

