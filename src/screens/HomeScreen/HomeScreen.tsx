import { Text, View } from "react-native";
import { CountdownCard } from '../../components/CountdownCard';
import { DebounceCard } from "../../components/DebounceCard";
import { PressAndHoldCard } from "../../components/PressAndHoldCard";
import styles from "./styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hooks Demo</Text>
      <CountdownCard />
      <DebounceCard />
      <PressAndHoldCard />
    </View>
  );
}
