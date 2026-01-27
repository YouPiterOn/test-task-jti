import { Pressable, Text } from "react-native";
import styles from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function Button({ title, onPress, disabled = false }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={disabled} >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
