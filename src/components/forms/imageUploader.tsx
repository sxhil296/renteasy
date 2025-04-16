"use client";

import { useState, useRef, type ChangeEvent, type DragEvent } from "react";
import { X, Upload, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  maxImages?: number;
  onImagesChange?: (files: File[]) => void;
}

export function ImageUploader({
  maxImages = 3,
  onImagesChange,
}: ImageUploaderProps) {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    addFiles(selectedFiles);

    // Reset the file input value so the same file can be uploaded again if removed
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const addFiles = (selectedFiles: File[]) => {
    // Filter out non-image files
    const imageFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    // Only add files up to the maximum limit
    const newImages = [...images];
    const newPreviews = [...previews];

    for (const file of imageFiles) {
      if (newImages.length >= maxImages) break;

      newImages.push(file);
      const previewUrl = URL.createObjectURL(file);
      newPreviews.push(previewUrl);
    }

    setImages(newImages);
    setPreviews(newPreviews);

    if (onImagesChange) {
      onImagesChange(newImages);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    const newPreviews = [...previews];

    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newPreviews[index]);

    newImages.splice(index, 1);
    newPreviews.splice(index, 1);

    setImages(newImages);
    setPreviews(newPreviews);

    if (onImagesChange) {
      onImagesChange(newImages);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full space-y-4">
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-gray-300 hover:border-primary",
          images.length >= maxImages && "opacity-50 cursor-not-allowed"
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => images.length < maxImages && openFileDialog()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          className="hidden"
          disabled={images.length >= maxImages}
        />

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="p-3 bg-primary/10 rounded-full">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">
              {isDragging ? "Drop images here" : "Drag and drop images here"}
            </p>
            <p className="text-xs text-muted-foreground">or click to browse</p>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {images.length} of {maxImages} images uploaded
          </p>
        </div>
      </div>

      {previews.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {previews.map((preview, index) => (
            <div
              key={index}
              className="relative group aspect-square rounded-lg overflow-hidden border"
            >
              <img
                src={preview || "/placeholder.svg"}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(index);
                  }}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          {/* Empty slots */}
          {Array.from({ length: Math.max(0, maxImages - previews.length) }).map(
            (_, index) => (
              <div
                key={`empty-${index}`}
                className="aspect-square rounded-lg border border-dashed flex items-center justify-center bg-muted/50"
                onClick={openFileDialog}
              >
                <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
