import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CourtCard } from '@/components/courts/CourtCard';

type CourtListProps = {
  onSelectCourt: (court: any) => void;
};

export function CourtList({ onSelectCourt }: CourtListProps) {
  const courts = [
    {
      id: '1',
      name: 'Downtown Padel Club',
      type: 'padel',
      price: 35,
      rating: 4.8,
      distance: '1.2 km',
      image: 'https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      availableSlots: 3,
    },
    {
      id: '2',
      name: 'Riverside Pickleball',
      type: 'pickleball',
      price: 25,
      rating: 4.5,
      distance: '2.5 km',
      image: 'https://images.pexels.com/photos/6765942/pexels-photo-6765942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      availableSlots: 5,
    },
    {
      id: '3',
      name: 'City Padel Center',
      type: 'padel',
      price: 40,
      rating: 4.9,
      distance: '3.8 km',
      image: 'https://images.pexels.com/photos/8224728/pexels-photo-8224728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      availableSlots: 2,
    },
    {
      id: '4',
      name: 'Beach Pickleball Courts',
      type: 'pickleball',
      price: 20,
      rating: 4.3,
      distance: '5.1 km',
      image: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      availableSlots: 8,
    },
    {
      id: '5',
      name: 'Urban Padel Arena',
      type: 'padel',
      price: 45,
      rating: 4.7,
      distance: '4.3 km',
      image: 'https://images.pexels.com/photos/13635523/pexels-photo-13635523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      availableSlots: 4,
    },
    {
      id: '6',
      name: 'Community Pickleball Park',
      type: 'pickleball',
      price: 15,
      rating: 4.0,
      distance: '1.8 km',
      image: 'https://images.pexels.com/photos/6765986/pexels-photo-6765986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      availableSlots: 10,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Court</Text>
      
      <FlatList
        data={courts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <CourtCard
            name={item.name}
            type={item.type as 'padel' | 'pickleball'}
            price={item.price}
            rating={item.rating}
            distance={item.distance}
            image={item.image}
            availableSlots={item.availableSlots}
            onPress={() => onSelectCourt(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 80,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});