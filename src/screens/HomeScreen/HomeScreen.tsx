import { View } from "react-native";
import { CountdownCard } from '../../components/CountdownCard';
import { DebounceCard } from "../../components/DebounceCard";

export default function HomeScreen() {
  return (
    <View style={{ padding: 10, gap: 10 }}>
      <CountdownCard />
      <DebounceCard />
    </View>
  );
}
