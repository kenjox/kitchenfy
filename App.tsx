import { FlatList, StyleSheet, TextInput, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecipeCard } from './components/RecipeCard';
import { theme } from './theme';

const dummyData = [
  { id: '1', title: 'Spaghetti Carbonara' },
  { id: '2', title: 'Chicken Alfredo' },
  { id: '3', title: 'Beef Stroganoff' },
  { id: '4', title: 'Vegetable Stir Fry' },
  { id: '5', title: 'Shrimp Scampi' },
];

export default function App() {
  const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 50;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingTop: STATUS_BAR_HEIGHT }}
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard title={item.title} />}
        ListHeaderComponent={
          <TextInput
            style={styles.textInput}
            placeholder="E.g Coffee"
            returnKeyType="done"
            autoCorrect={false}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4F4',
  },
  textInput: {
    borderWidth: 2,
    padding: 12,
    fontSize: 18,
    borderRadius: 50,
    marginHorizontal: 20,
    paddingTop: 12,
    backgroundColor: theme.whiteColor,
  },
});
