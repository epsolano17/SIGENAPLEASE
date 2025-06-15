import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface GeneratorFormProps {
  onGenerate?: (formData: {
    theme: string;
    format: "poem" | "essay";
    tone: string;
    style: string;
    wordCount: number;
  }) => void;
  isGenerating?: boolean;
}

const GeneratorForm = ({
  onGenerate = () => {},
  isGenerating = false,
}: GeneratorFormProps) => {
  const [theme, setTheme] = useState("");
  const [format, setFormat] = useState<"poem" | "essay">("poem");
  const [tone, setTone] = useState("casual");
  const [style, setStyle] = useState("modern");
  const [wordCount, setWordCount] = useState(250);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ theme, format, tone, style, wordCount });
  };

  const poemStyles = ["modern", "romantic", "haiku", "sonnet", "free verse"];
  const essayStyles = [
    "academic",
    "narrative",
    "descriptive",
    "persuasive",
    "expository",
  ];

  const styles = format === "poem" ? poemStyles : essayStyles;

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-lg font-medium">
              Theme or Topic
            </Label>
            <Input
              id="theme"
              placeholder="Enter your theme or topic here..."
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="h-12 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-lg font-medium">Format</Label>
            <RadioGroup
              value={format}
              onValueChange={(value) => setFormat(value as "poem" | "essay")}
              className="flex space-x-8"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poem" id="poem" />
                <Label htmlFor="poem" className="cursor-pointer">
                  Poem
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="essay" id="essay" />
                <Label htmlFor="essay" className="cursor-pointer">
                  Essay
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="tone" className="text-lg font-medium">
                Tone
              </Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger id="tone" className="h-12">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                  <SelectItem value="humorous">Humorous</SelectItem>
                  <SelectItem value="serious">Serious</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="style" className="text-lg font-medium">
                Style
              </Label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger id="style" className="h-12">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((styleOption) => (
                    <SelectItem key={styleOption} value={styleOption}>
                      {styleOption.charAt(0).toUpperCase() +
                        styleOption.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="wordCount" className="text-lg font-medium">
                Word Count
              </Label>
              <span className="text-sm font-medium">{wordCount} words</span>
            </div>
            <Slider
              id="wordCount"
              min={50}
              max={1000}
              step={50}
              value={[wordCount]}
              onValueChange={(value) => setWordCount(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>50</span>
              <span>1000</span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-lg font-medium transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            disabled={isGenerating || !theme.trim()}
          >
            {isGenerating ? (
              <>
                <span className="animate-pulse">Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate {format === "poem" ? "Poem" : "Essay"}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GeneratorForm;
