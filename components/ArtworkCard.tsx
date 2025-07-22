import { View, Text, TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';

type ArtworkCardProps = {
  title: string;
  artist: string;
  course: string;
  price: string;
  category: string;
  likes: number;
  onPress?: () => void;
};

export default function ArtworkCard({
  title,
  artist,
  course,
  price,
  category,
  likes,
  onPress,
}: ArtworkCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white dark:bg-black rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 w-[48%] mb-4"
    >
      <View className="h-32 bg-gray-200 dark:bg-gray-800 items-center justify-center">
        <Text className="text-xs text-gray-400">Image</Text>
      </View>

      <View className="p-3">
        <Text className="font-semibold text-black dark:text-white">{title}</Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">{`by ${artist}`}</Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">{course}</Text>

        <View className="flex-row justify-between items-center mt-2">
          <Text className="font-bold text-black dark:text-white">{price}</Text>
          <View className="flex-row items-center space-x-1">
            <Heart size={16} color="gray" />
            <Text className="text-xs text-gray-600 dark:text-gray-400">{likes}</Text>
          </View>
        </View>

        <View className="mt-2 self-start px-2 py-1 border border-gray-400 dark:border-gray-600 rounded-full">
          <Text className="text-xs text-gray-700 dark:text-gray-300">{category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
