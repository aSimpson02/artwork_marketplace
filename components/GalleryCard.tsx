// components/GalleryCard.tsx
import React from "react";
import { View, Text, Image } from "react-native";

type GalleryCardProps = {
  id: string;
  title: string;
  image: string;
  artist?: string;
  date?: string;
};

export default function GalleryCard({
  title,
  image,
  artist,
  date,
}: GalleryCardProps) {
  return (
    <View className="bg-white dark:bg-[#111827] rounded-xl mb-4 overflow-hidden shadow-md">
      <Image
        source={{ uri: image }}
        className="w-full h-48"
        resizeMode="cover"
      />
      <View className="p-4">
        <Text className="text-lg font-bold text-black dark:text-white">
          {title}
        </Text>
        {artist && (
          <Text className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            by {artist}
          </Text>
        )}
        {date && (
          <Text className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            {date}
          </Text>
        )}
      </View>
    </View>
  );
}
