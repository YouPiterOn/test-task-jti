import { Text } from "react-native";
import { Card } from "../Card";
import { useState } from "react";
import { useDebounce } from "../../hooks";
import { Button } from "../Button";
import styles from "./styles";

export default function DebounceCard() {
  const [count, setCount] = useState(0);

  const debouncedCount = useDebounce(() => setCount(count + 1), 2000);

  return (
    <Card title="Debounce Counter">
      <Text style={styles.text}>{count}</Text>
      <Button title="Increment" onPress={debouncedCount} />
    </Card>
  );
}
