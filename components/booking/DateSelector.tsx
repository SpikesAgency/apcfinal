import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

type DateSelectorProps = {
  onSelectDate: (date: string) => void;
};

export function DateSelector({ onSelectDate }: DateSelectorProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  // Generate dates for the next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      id: i.toString(),
      day: date.toLocaleString('en-US', { weekday: 'short' }),
      date: date.getDate(),
      month: date.toLocaleString('en-US', { month: 'short' }),
      fullDate: date.toISOString().split('T')[0],
    };
  });

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Date</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.datesContainer}
      >
        {dates.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.dateItem,
              selectedDate === item.fullDate && styles.selectedDateItem,
            ]}
            onPress={() => handleSelectDate(item.fullDate)}
          >
            <Text 
              style={[
                styles.dayText,
                selectedDate === item.fullDate && styles.selectedText,
              ]}
            >
              {item.day}
            </Text>
            <Text 
              style={[
                styles.dateText,
                selectedDate === item.fullDate && styles.selectedText,
              ]}
            >
              {item.date}
            </Text>
            <Text 
              style={[
                styles.monthText,
                selectedDate === item.fullDate && styles.selectedText,
              ]}
            >
              {item.month}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedDate && styles.disabledButton,
          ]}
          onPress={() => selectedDate && onSelectDate(selectedDate)}
          disabled={!selectedDate}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
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
  datesContainer: {
    paddingVertical: 16,
  },
  dateItem: {
    width: 70,
    height: 90,
    backgroundColor: '#22293A',
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDateItem: {
    backgroundColor: '#16FF91',
  },
  dayText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#8F98A8',
    marginBottom: 4,
  },
  dateText: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  monthText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#8F98A8',
  },
  selectedText: {
    color: '#000000',
  },
  buttonContainer: {
    marginTop: 32,
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