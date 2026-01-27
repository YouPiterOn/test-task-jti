import { Text, View } from "react-native";
import styles from "./styles";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
}
