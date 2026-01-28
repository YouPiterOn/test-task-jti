import { Pressable, Text } from "react-native";
import styles from "./styles";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  disabled?: boolean;
}

export default function Button({ title, onPress, onPressIn, onPressOut, disabled = false }: ButtonProps) {
  return (
    <Pressable style={({ pressed }) => [
      styles.button,
      pressed && styles.buttonPressed,
      disabled && styles.buttonDisabled
    ]} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} disabled={disabled} >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
