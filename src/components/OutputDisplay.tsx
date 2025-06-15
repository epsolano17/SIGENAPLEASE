import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Download, Share2, RefreshCw, Edit2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface OutputDisplayProps {
  content?: string;
  isLoading?: boolean;
  format?: "poem" | "essay";
  onEdit?: (content: string) => void;
  onRegenerate?: () => void;
}

const OutputDisplay = ({
  content = "Your generated content will appear here. Select your preferences and click 'Generate' to create your poem or essay.",
  isLoading = false,
  format = "poem",
  onEdit = () => {},
  onRegenerate = () => {},
}: OutputDisplayProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleEditToggle = () => {
    if (isEditing) {
      onEdit(editedContent);
    }
    setIsEditing(!isEditing);
  };

  const handleDownload = (fileType: "txt" | "pdf") => {
    // Placeholder for download functionality
    if (fileType === "txt") {
      const element = document.createElement("a");
      const file = new Blob([content], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `inspirai-${format}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } else {
      // PDF download would require a PDF generation library
      console.log("PDF download functionality would be implemented here");
    }
  };

  const handleShare = () => {
    // Placeholder for share functionality
    if (navigator.share) {
      navigator
        .share({
          title: `InspiroAI ${format.charAt(0).toUpperCase() + format.slice(1)}`,
          text: content,
        })
        .catch(console.error);
    } else {
      // Fallback for browsers that don't support the Web Share API
      console.log("Share functionality would be implemented here");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-background p-4 rounded-lg">
      <Card className="w-full overflow-hidden">
        <Tabs defaultValue={format} className="w-full">
          <div className="flex justify-between items-center p-4 border-b">
            <TabsList>
              <TabsTrigger value="poem">Poem</TabsTrigger>
              <TabsTrigger value="essay">Essay</TabsTrigger>
            </TabsList>
            <div className="flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleEditToggle}
                      disabled={isLoading}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {isEditing ? "Save edits" : "Edit content"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={onRegenerate}
                      disabled={isLoading}
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Regenerate content</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <DropdownMenu>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          disabled={isLoading}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent>Download options</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleDownload("txt")}>
                    Download as TXT
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDownload("pdf")}>
                    Download as PDF
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleShare}
                      disabled={isLoading}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Share content</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <CardContent className="p-6">
            <TabsContent value="poem" className="mt-0">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-6 w-3/5" />
                  <Skeleton className="h-6 w-2/5" />
                </div>
              ) : isEditing ? (
                <Textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="min-h-[300px] font-serif"
                />
              ) : (
                <div className="whitespace-pre-wrap font-serif leading-relaxed">
                  {content}
                </div>
              )}
            </TabsContent>

            <TabsContent value="essay" className="mt-0">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-5/6" />
                </div>
              ) : isEditing ? (
                <Textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="min-h-[300px]"
                />
              ) : (
                <div className="prose max-w-none">{content}</div>
              )}
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default OutputDisplay;
