import { Pressable, Text, View } from "react-native";
import { useCountdown } from '../../hooks';
import styles from "./styles";
import Button from "../Button/Button";
import Card from "../Card/Card";

export default function CountdownCard() {
  const { timeLeft, isRunning, start, pause, reset } = useCountdown(60);

  return (
    <Card title="Countdown Timer">
      <Text style={styles.countdownText}>{timeLeft}</Text>
      <Text style={styles.countdownText}>{isRunning ? 'Running' : 'Paused'}</Text>
      <Button onPress={start} disabled={isRunning} title="Start" />
      <Button onPress={pause} disabled={!isRunning} title="Pause" />
      <Button onPress={reset} title="Reset" />
    </Card>
  );
}
