import { Text } from "react-native";
import { useCountdown } from '../../hooks';
import styles from "./styles";
import { Button } from "../Button";
import { Card } from "../Card";

export default function CountdownCard() {
  const { timeLeft, isRunning, start, pause, reset } = useCountdown(60);

  return (
    <Card title="Countdown Timer">
      <Text style={styles.text}>{timeLeft}</Text>
      <Text style={styles.text}>{isRunning ? 'Running' : 'Paused'}</Text>
      {isRunning ? (
        <Button onPress={pause} disabled={!isRunning} title="Pause" />
      ) : (
        <Button onPress={start} disabled={isRunning} title="Start" />
      )}
      <Button onPress={reset} title="Reset" />
    </Card>
  );
}
