import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { theme } from '../theme';

type Props = {
  title: string;
};

export function RecipeCard({ title }: Props) {
  return (
    <View style={styles.recipeCard}>
      <Text style={styles.recipeTitle}>{title}</Text>
      <View>
        <MaterialIcons name="more-vert" size={24} color={theme.textColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: theme.whiteColor,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  recipeTitle: {
    color: theme.textColor,
    fontSize: 16,
  },
});
