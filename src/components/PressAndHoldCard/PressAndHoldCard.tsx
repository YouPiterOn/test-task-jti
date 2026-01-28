import { Text } from "react-native";
import { Card } from "../Card";
import { useState } from "react";
import { usePressAndHold } from "../../hooks";
import styles from "./styles";
import { Button } from "../Button";

export default function PressAndHoldCard() {
  const [count, setCount] = useState(0);

  const { onPressIn, onPressOut, isHeld } = usePressAndHold(() => setCount(count + 1), 1000);

  return (
    <Card title="Press and Hold Counter">
      <Text style={styles.text}>{count}</Text>
      <Text style={styles.text}>{isHeld ? 'Held' : 'Not Held'}</Text>
      <Button title="Increment" onPressIn={onPressIn} onPressOut={onPressOut} />
    </Card>
  );
}
