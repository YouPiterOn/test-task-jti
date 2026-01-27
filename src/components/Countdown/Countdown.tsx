import { Pressable, Text, View } from "react-native";
import { useCountdown } from '../../hooks';
import styles from "./styles";
import Button from "../Button/Button";

export default function Countdown() {
  const { timeLeft, isRunning, start, pause, reset } = useCountdown(60);

  return (
    <View style={styles.container}>
      <Text style={styles.countdownText}>{timeLeft}</Text>
      <Text style={styles.countdownText}>{isRunning ? 'Running' : 'Paused'}</Text>
      <Button onPress={start} disabled={isRunning} title="Start" />
      <Button onPress={pause} disabled={!isRunning} title="Pause" />
      <Button onPress={reset} title="Reset" />
    </View>
  );
}
