import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Share2, Heart, Trash2 } from "lucide-react-native";

type MiniGalleryCardProps = {
  id: string;
  title: string;
  image: string;
  onDelete: (id: string) => void;
};

export default function MiniGalleryCard({
  id,
  title,
  image,
  onDelete,
}: MiniGalleryCardProps) {
  const handleDelete = () => {
    Alert.alert("Delete Gallery", "Are you sure you want to delete this?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => onDelete(id) },
    ]);
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title,
        url: image,
      });
    } catch (error) {
      console.log("Share error:", error);
    }
  };

  return (
    <LinearGradient
      colors={["#111827", "#1f2937"]}
      className="rounded-xl w-[48%] mb-4 overflow-hidden"
    >
      <Image
        source={{ uri: image }}
        className="w-full h-32 rounded-t-xl"
        resizeMode="cover"
      />
      <View className="p-2">
        <Text className="text-white font-semibold mb-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row justify-between">
          <Pressable onPress={handleShare}>
            <Share2 size={18} color="white" />
          </Pressable>
          <Pressable>
            <Heart size={18} color="white" />
          </Pressable>
          <Pressable onPress={handleDelete}>
            <Trash2 size={18} color="white" />
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}
