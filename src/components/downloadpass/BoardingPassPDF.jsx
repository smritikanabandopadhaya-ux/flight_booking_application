import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";


const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    position: "relative",
  },
  leftSection: {
    flex: 2,
    padding: 20,
    borderRight: "2px dashed gray",
    marginBottom: 0
  },
  rightSection: {
    flex: 1,
    padding: 20,
    backgroundColor: "#b382e7",
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#65339b",
    color: "#fff",
    padding: 6,
    borderRadius: 4,
    marginBottom: 10,
  },
  rightHeading: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#65339b",
    padding: 6,
    borderRadius: 4,
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    marginBottom: 4,
  },
  smallNote: {
    fontSize: 10,
    color: "red",
    marginTop: 10,
  },
  seat: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
});

const BoardingPassPDF = ({ flightDetails, boardingDetails, seat }) => (
  <Document>
    <Page size="A5" style={styles.page}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <Text style={styles.heading}>{flightDetails.airline} Airline</Text>
        <Text style={styles.text}>Passenger: {boardingDetails.name}</Text>
        <Text style={styles.text}>Flight: {flightDetails.flightNumber}</Text>
        <Text style={styles.text}>Flying From: {flightDetails.origin}</Text>
        <Text style={styles.text}>Flying To: {flightDetails.destination}</Text>
        <Text style={styles.text}>Departure Date: {flightDetails.date}</Text>
        <Text style={styles.text}>
          Departure Time: {flightDetails.departuretime}
        </Text>
        <Text style={styles.smallNote}>
          Gate closes 15 minutes before departure
        </Text>
      </View>
      {/* Right Section */}
      <View style={styles.rightSection}>
        <Text style={styles.rightHeading}>BOARDING PASS</Text>
        <Text style={styles.text}>Passenger: {boardingDetails.name}</Text>
        <Text style={styles.text}>From: {flightDetails.origin}</Text>
        <Text style={styles.text}>To: {flightDetails.destination}</Text>
        <Text style={styles.text}>Flight: {flightDetails.flightNumber}</Text>
        <Text style={styles.text}>Terminal: {flightDetails.terminal}</Text>
        <Text style={styles.text}>Gate: {flightDetails.gate}</Text>
        <Text style={styles.text}>Date: {flightDetails.date}</Text>
        <Text style={styles.text}>
          Boarding Time: {flightDetails.boardingtime}
        </Text>
        <Text style={styles.text}>
          Luggage Weight: {boardingDetails.luggage} KG
        </Text>
        <Text style={styles.text}>Meal: {boardingDetails.food}</Text>
        <Text style={styles.seat}>SEAT: {seat}</Text>
      </View>
    </Page>
  </Document>
);

export default BoardingPassPDF;