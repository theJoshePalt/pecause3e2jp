import CustomText from "@/components/ui/CustomText";
import "../Global.css";
import { View } from "react-native";
export default function Index() {
  return (
    <View className="bg-[#004719] w-screen h-screen">
      <CustomText variant="large" dark={false}>
        CAUSE
      </CustomText>
    </View>
  );
}
