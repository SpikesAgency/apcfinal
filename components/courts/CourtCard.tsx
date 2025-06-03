import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MapPin, Star } from 'lucide-react-native';

type CourtCardProps = {
  name: string;
  type: 'padel' | 'pickleball';
  price: number;
  rating: number;
  distance: string;
  image: string;
  availableSlots: number;
  onPress?: () => void;
};

export function CourtCard({
  name,
  type,
  price,
  rating,
  distance,
  image,
  availableSlots,
  onPress,
}: CourtCardProps) {
  const typeColor = type === 'padel' ? '#16FF91' : '#32D1FF';
  const typeText = type === 'padel' ? 'Padel' : 'Pickleball';

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      
      <View style={[styles.typeBadge, { backgroundColor: `${typeColor}20` }]}>
        <Text style={[styles.typeText, { color: typeColor }]}>{typeText}</Text>
      </View>
      
      {availableSlots > 0 && (
        <View style={styles.availableBadge}>
          <Text style={styles.availableText}>{availableSlots} slots available</Text>
        </View>
      )}
      
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        
        <View style={styles.infoRow}>
          <View style={styles.ratingContainer}>
            <Star size={14} color="#FFD700" fill="#FFD700" />
            <Text style={styles.rating}>{rating}</Text>
          </View>
          
          <View style={styles.distanceContainer}>
            <MapPin size={14} color="#8F98A8" />
            <Text style={styles.distance}>{distance}</Text>
          </View>
        </View>
        
        <View style={styles.priceRow}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.priceUnit}>/hour</Text>
          
          <TouchableOpacity 
            style={[styles.bookButton, { backgroundColor: typeColor }]}
            onPress={onPress}
          >
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    borderRadius: 16,
    backgroundColor: '#22293A',
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  typeBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  typeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  availableBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  availableText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#FFFFFF',
  },
  contentContainer: {
    padding: 12,
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  rating: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#8F98A8',
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  priceUnit: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#8F98A8',
    marginLeft: 2,
    flex: 1,
  },
  bookButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#000000',
  },
});