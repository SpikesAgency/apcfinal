import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, Calendar, Clock } from 'lucide-react-native';
import { CourtList } from '@/components/booking/CourtList';
import { DateSelector } from '@/components/booking/DateSelector';
import { TimeSelector } from '@/components/booking/TimeSelector';

export default function BookScreen() {
  const [activeStep, setActiveStep] = useState('court');
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const renderStepContent = () => {
    switch (activeStep) {
      case 'court':
        return <CourtList onSelectCourt={(court) => {
          setSelectedCourt(court);
          setActiveStep('date');
        }} />;
      case 'date':
        return <DateSelector onSelectDate={(date) => {
          setSelectedDate(date);
          setActiveStep('time');
        }} />;
      case 'time':
        return <TimeSelector onSelectTime={(time) => {
          setSelectedTime(time);
          // Navigate to payment or confirmation screen
        }} />;
      default:
        return <CourtList onSelectCourt={(court) => {
          setSelectedCourt(court);
          setActiveStep('date');
        }} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Book a Court</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Search size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Booking Steps */}
        <View style={styles.stepperContainer}>
          <TouchableOpacity 
            style={[styles.stepButton, activeStep === 'court' && styles.activeStep]}
            onPress={() => setActiveStep('court')}
          >
            <MapPin size={20} color={activeStep === 'court' ? '#16FF91' : '#8F98A8'} />
            <Text style={[styles.stepText, activeStep === 'court' && styles.activeStepText]}>Court</Text>
          </TouchableOpacity>
          
          <View style={styles.stepLine} />
          
          <TouchableOpacity 
            style={[styles.stepButton, activeStep === 'date' && styles.activeStep]}
            onPress={() => selectedCourt && setActiveStep('date')}
            disabled={!selectedCourt}
          >
            <Calendar size={20} color={activeStep === 'date' ? '#16FF91' : '#8F98A8'} />
            <Text style={[styles.stepText, activeStep === 'date' && styles.activeStepText]}>Date</Text>
          </TouchableOpacity>
          
          <View style={styles.stepLine} />
          
          <TouchableOpacity 
            style={[styles.stepButton, activeStep === 'time' && styles.activeStep]}
            onPress={() => selectedDate && setActiveStep('time')}
            disabled={!selectedDate}
          >
            <Clock size={20} color={activeStep === 'time' ? '#16FF91' : '#8F98A8'} />
            <Text style={[styles.stepText, activeStep === 'time' && styles.activeStepText]}>Time</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          {renderStepContent()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#111827',
  },
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#22293A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#181A20',
  },
  stepButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  activeStep: {
    backgroundColor: 'rgba(22, 255, 145, 0.15)',
  },
  stepText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#8F98A8',
    marginLeft: 8,
  },
  activeStepText: {
    color: '#16FF91',
  },
  stepLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#212A37',
    marginHorizontal: 8,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
});