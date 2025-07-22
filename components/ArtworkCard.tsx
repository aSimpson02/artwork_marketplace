import React from "react";
import { View, Text, Image } from "react-native";

type ArtworkCardProps = {
  title: string;
  image?: string;
  price?: string;
  course?: string;
  category?: string;
  likes?: number;
};

export default function ArtworkCard({
  title,
  image,
  price,
  course,
  category,
  likes,
}: ArtworkCardProps) {
  return (
    <View className="bg-white dark:bg-zinc-900 rounded-xl p-4 mb-4 shadow-md">
      {image && (
        <Image
          source={{ uri: image }}
          className="w-full h-40 rounded-md mb-2"
          resizeMode="cover"
        />
      )}
      <Text className="text-lg font-semibold text-black dark:text-white">{title}</Text>
      {course && <Text className="text-sm text-gray-600 dark:text-gray-400">{course}</Text>}
      {price && <Text className="text-sm text-green-600 dark:text-green-400">{price}</Text>}
      {category && <Text className="text-sm text-gray-500 dark:text-gray-300">{category}</Text>}
      {likes !== undefined && (
        <Text className="text-sm text-gray-400 dark:text-gray-500">Likes: {likes}</Text>
      )}
    </View>
  );
}
