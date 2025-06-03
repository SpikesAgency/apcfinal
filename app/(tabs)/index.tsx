import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Search, Bell, Trophy, GraduationCap } from 'lucide-react-native';
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
              courtName="Downtown Padel Club - Court 2"
              courtType="padel"
              date="Today"
              time="18:00 - 19:30"
              image="https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <UpcomingBooking 
              courtName="Riverside Pickleball - Court 1"
              courtType="pickleball"
              date="Tomorrow"
              time="10:00 - 11:30"
              image="https://images.pexels.com/photos/6765942/pexels-photo-6765942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </ScrollView>
        </View>

        {/* Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.servicesGrid}>
            <TouchableOpacity style={styles.serviceCard}>
              <View style={[styles.serviceIcon, { backgroundColor: 'rgba(22, 255, 145, 0.15)' }]}>
                <Trophy size={24} color="#16FF91" />
              </View>
              <Text style={styles.serviceTitle}>Tournaments</Text>
              <Text style={styles.serviceDescription}>Join competitive matches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceCard}>
              <View style={[styles.serviceIcon, { backgroundColor: 'rgba(50, 209, 255, 0.15)' }]}>
                <GraduationCap size={24} color="#32D1FF" />
              </View>
              <Text style={styles.serviceTitle}>Lessons</Text>
              <Text style={styles.serviceDescription}>Learn from pros</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming Tournaments */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Tournaments</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tournamentCard}>
            <Image 
              source={{ uri: "https://images.pexels.com/photos/8224728/pexels-photo-8224728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }}
              style={styles.tournamentImage}
            />
            <View style={styles.tournamentInfo}>
              <Text style={styles.tournamentTitle}>Spring Padel Championship</Text>
              <Text style={styles.tournamentDate}>March 15-17, 2024</Text>
              <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register Now</Text>
              </TouchableOpacity>
            </View>
          </View>
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
              style={[styles.filterTab, activeTab === 'lessons' && styles.activeFilterTab]}
              onPress={() => setActiveTab('lessons')}
            >
              <Text style={[styles.filterText, activeTab === 'lessons' && styles.activeFilterText]}>Lessons</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Available Courts & Lessons */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Available Now</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.courtsGrid}>
            <CourtCard 
              name="Padel Court 1"
              type="padel"
              price={35}
              rating={4.8}
              distance="1.2 km"
              image="https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={3}
            />
            <CourtCard 
              name="Pickleball Court 1"
              type="pickleball"
              price={25}
              rating={4.5}
              distance="2.5 km"
              image="https://images.pexels.com/photos/6765942/pexels-photo-6765942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={5}
            />
            <CourtCard 
              name="Padel Court 2"
              type="padel"
              price={40}
              rating={4.9}
              distance="3.8 km"
              image="https://images.pexels.com/photos/8224728/pexels-photo-8224728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={2}
            />
            <CourtCard 
              name="Pickleball Court 2"
              type="pickleball"
              price={20}
              rating={4.3}
              distance="5.1 km"
              image="https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={8}
            />
            <CourtCard 
              name="Padel Court 3"
              type="padel"
              price={45}
              rating={4.7}
              distance="4.3 km"
              image="https://images.pexels.com/photos/13635523/pexels-photo-13635523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={4}
            />
            <CourtCard 
              name="Padel Court 4"
              type="padel"
              price={35}
              rating={4.6}
              distance="1.8 km"
              image="https://images.pexels.com/photos/6765986/pexels-photo-6765986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              availableSlots={6}
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
  servicesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#22293A',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  serviceDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#8F98A8',
    textAlign: 'center',
  },
  tournamentCard: {
    backgroundColor: '#22293A',
    borderRadius: 16,
    overflow: 'hidden',
  },
  tournamentImage: {
    width: '100%',
    height: 160,
  },
  tournamentInfo: {
    padding: 16,
  },
  tournamentTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  tournamentDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#8F98A8',
    marginBottom: 12,
  },
  registerButton: {
    backgroundColor: '#16FF91',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  registerButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#000000',
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