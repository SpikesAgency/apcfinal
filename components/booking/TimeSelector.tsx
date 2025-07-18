import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

type TimeSelectorProps = {
  onSelectTime: (time: string) => void;
};

export function TimeSelector({ onSelectTime }: TimeSelectorProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Generate time slots from 8 AM to 10 PM with 1-hour intervals
  const timeSlots = Array.from({ length: 15 }, (_, i) => {
    const hour = i + 8;
    const startTime = `${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    const endTime = `${(hour + 1) % 12 || 12}:00 ${(hour + 1) < 12 ? 'AM' : 'PM'}`;
    return {
      id: i.toString(),
      time: `${startTime} - ${endTime}`,
      available: Math.random() > 0.3, // Randomly set availability (70% available)
    };
  });

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Time</Text>
      
      <ScrollView 
        style={styles.timeSlotsContainer}
        contentContainerStyle={styles.timeSlotsContent}
        showsVerticalScrollIndicator={false}
      >
        {timeSlots.map((slot) => (
          <TouchableOpacity
            key={slot.id}
            style={[
              styles.timeSlot,
              !slot.available && styles.unavailableTimeSlot,
              selectedTime === slot.time && slot.available && styles.selectedTimeSlot,
            ]}
            onPress={() => slot.available && handleSelectTime(slot.time)}
            disabled={!slot.available}
          >
            <Text 
              style={[
                styles.timeText,
                !slot.available && styles.unavailableTimeText,
                selectedTime === slot.time && slot.available && styles.selectedTimeText,
              ]}
            >
              {slot.time}
            </Text>
            
            <View 
              style={[
                styles.statusIndicator,
                slot.available ? styles.availableIndicator : styles.unavailableIndicator,
                selectedTime === slot.time && slot.available && styles.selectedIndicator,
              ]}
            >
              <Text 
                style={[
                  styles.statusText,
                  selectedTime === slot.time && slot.available && styles.selectedStatusText,
                ]}
              >
                {slot.available ? 'Available' : 'Booked'}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedTime && styles.disabledButton,
          ]}
          onPress={() => selectedTime && onSelectTime(selectedTime)}
          disabled={!selectedTime}
        >
          <Text style={styles.continueButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
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
  timeSlotsContainer: {
    flex: 1,
  },
  timeSlotsContent: {
    paddingBottom: 16,
  },
  timeSlot: {
    flexDirection: 'row',
    backgroundColor: '#22293A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  unavailableTimeSlot: {
    opacity: 0.5,
  },
  selectedTimeSlot: {
    backgroundColor: 'rgba(22, 255, 145, 0.15)',
    borderWidth: 1,
    borderColor: '#16FF91',
  },
  timeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  unavailableTimeText: {
    color: '#8F98A8',
  },
  selectedTimeText: {
    color: '#16FF91',
  },
  statusIndicator: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  availableIndicator: {
    backgroundColor: 'rgba(22, 255, 145, 0.15)',
  },
  unavailableIndicator: {
    backgroundColor: 'rgba(255, 90, 90, 0.15)',
  },
  selectedIndicator: {
    backgroundColor: 'rgba(22, 255, 145, 0.3)',
  },
  statusText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#16FF91',
  },
  selectedStatusText: {
    color: '#16FF91',
  },
  buttonContainer: {
    marginTop: 16,
  },
  continueButton: {
    backgroundColor: '#16FF91',
    borderRadius: 12,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#22293A',
  },
  continueButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#000000',
  },
});