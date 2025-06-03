import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Search, Bell, CalendarClock } from 'lucide-react-native';
import { UpcomingBooking } from '@/components/home/UpcomingBooking';
import { CourtCard } from '@/components/courts/CourtCard';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hey, Alex!</Text>
            <Text style={styles.subtitle}>Ready to hit the courts?</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton}>
              <Search size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming bookings */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Bookings</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bookingsScroll}>
            <UpcomingBooking 
              courtName="Downtown Padel Club"
              courtType="padel"
              date="Today"
              time="18:00 - 19:30"
              image="https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <UpcomingBooking 
              courtName="Riverside Pickleball"
              courtType="pickleball"
              date="Tomorrow"
              time="10:00 - 11:30"
              image="https://images.pexels.com/photos/6765942/pexels-photo-6765942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </ScrollView>
        </View>

        {/* Court Filters */}
        <View style={styles.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity 
              style={[styles.filterTab, activeTab === 'all' && styles.activeFilterTab]}
              onPress={() => setActiveTab('all')}
            >
              <Text style={[styles.filterText, activeTab === 'all' && styles.activeFilterText]}>All Courts</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterTab, activeTab === 'padel' && styles.activeFilterTab]}
              onPress={() => setActiveTab('padel')}
            >
              <Text style={[styles.filterText, activeTab === 'padel' && styles.activeFilterText]}>Padel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterTab, activeTab === 'pickleball' && styles.activeFilterTab]}
              onPress={() => setActiveTab('pickleball')}
            >
              <Text style={[styles.filterText, activeTab === 'pickleball' && styles.activeFilterText]}>Pickleball</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterTab, activeTab === 'nearby' && styles.activeFilterTab]}
              onPress={() => setActiveTab('nearby')}
            >
              <Text style={[styles.filterText, activeTab === 'nearby' && styles.activeFilterText]}>Nearby</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Available Courts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Available Now</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.courtsGrid}>
            <CourtCard 
              name="Downtown Padel Club"
              type="padel"
              price={35}
              rating={4.8}
              distance="1.2 km"
              image="https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={3}
            />
            <CourtCard 
              name="Riverside Pickleball"
              type="pickleball"
              price={25}
              rating={4.5}
              distance="2.5 km"
              image="https://images.pexels.com/photos/6765942/pexels-photo-6765942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={5}
            />
            <CourtCard 
              name="City Padel Center"
              type="padel"
              price={40}
              rating={4.9}
              distance="3.8 km"
              image="https://images.pexels.com/photos/8224728/pexels-photo-8224728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={2}
            />
            <CourtCard 
              name="Beach Pickleball Courts"
              type="pickleball"
              price={20}
              rating={4.3}
              distance="5.1 km"
              image="https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={8}
            />
          </View>
        </View>
      </ScrollView>
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
  contentContainer: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  greeting: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#8F98A8',
  },
  headerActions: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#22293A',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  seeAll: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#32D1FF',
  },
  bookingsScroll: {
    marginLeft: -8,
  },
  filterContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#22293A',
  },
  activeFilterTab: {
    backgroundColor: 'rgba(22, 255, 145, 0.15)',
  },
  filterText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#8F98A8',
  },
  activeFilterText: {
    color: '#16FF91',
  },
  courtsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});