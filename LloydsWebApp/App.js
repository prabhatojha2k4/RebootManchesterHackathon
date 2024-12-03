import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  // Dummy data
  const customerName = "John Doe";
  const currentAccountBalance = "£2,450.75";
  const savingsAccountBalance = "£12,300.00";
  const recentTransactions = [
    { id: 1, description: "Starbucks Coffee", amount: "-£5.50", date: "03 Dec" },
    { id: 2, description: "Amazon Purchase", amount: "-£49.99", date: "02 Dec" },
    { id: 3, description: "Salary Credit", amount: "+£2,000.00", date: "01 Dec" },
  ];

  // Chatbot handler
  const handleChatbotPress = () => {
    alert("Connecting to our chatbot...");
  };

  return (
    <LinearGradient colors={['#007f3f', '#f8f9fa']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Lloyds Logo */}
        <Image source={require('./assets/download-2.png')} style={styles.logo} />

        {/* Welcome Section */}
        <Text style={styles.welcomeText}>Hello, {customerName}</Text>

        {/* Account Information */}
        <View style={styles.accountCard}>
          <Text style={styles.accountTitle}>Current Account</Text>
          <Text style={styles.balance}>{currentAccountBalance}</Text>
          <Text style={styles.savingsTitle}>Savings Balance</Text>
          <Text style={styles.balance}>{savingsAccountBalance}</Text>
        </View>

        {/* Recent Transactions */}
        <View style={styles.transactionCard}>
          <Text style={styles.cardTitle}>Recent Transactions</Text>
          {recentTransactions.map((transaction) => (
            <View style={styles.transaction} key={transaction.id}>
              <Text style={styles.transactionDesc}>{transaction.description}</Text>
              <Text style={styles.transactionAmount}>{transaction.amount}</Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
          ))}
        </View>

        {/* Chatbot Button */}
        <TouchableOpacity style={styles.chatButton} onPress={handleChatbotPress}>
          <Text style={styles.chatButtonText}>Chat with our Chatbot here</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation (Mock) */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Accounts</Text>
        <Text style={styles.navItem}>Help</Text>
      </View>

      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  accountCard: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  accountTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007f3f',
    marginBottom: 10,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  savingsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 5,
  },
  transactionCard: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007f3f',
    marginBottom: 15,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  transactionDesc: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#007f3f',
  },
  transactionDate: {
    fontSize: 14,
    color: '#999',
  },
  chatButton: {
    backgroundColor: '#007f3f',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  chatButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    backgroundColor: '#007f3f',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});