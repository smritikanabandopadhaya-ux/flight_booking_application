import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import background from "../../assets/background_cover_image.jpeg";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  leftSection: {
    flex: 2,
    padding: 20,
    borderRight: "2px dashed gray",
  },
  rightSection: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9fafb",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#65339b",
    color: "#fff",
    padding: 6,
    borderRadius: 4,
  },
  text: {
    fontSize: 12,
    marginBottom: 4,
  },
  smallNote: {
    fontSize: 10,
    color: "red",
    marginTop: 10,
  },
  seat: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});

const BoardingPassPDF = ({ flightDetails, boardingDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src={background} style={styles.background} />

      {/* Left Section */}
      <View style={styles.leftSection}>
        <Text style={styles.heading}>{flightDetails.airline} Airline</Text>

        <Text style={styles.text}>Passenger: {boardingDetails.name}</Text>
        <Text style={styles.text}>Flight: {flightDetails.flightNumber}</Text>
        <Text style={styles.text}>From: {flightDetails.origin}</Text>
        <Text style={styles.text}>To: {flightDetails.destination}</Text>
        <Text style={styles.text}>Departure Date: {flightDetails.date}</Text>
        <Text style={styles.text}>Departure Time: {flightDetails.departuretime}</Text>

        <Text style={styles.smallNote}>
          Gate closes 15 minutes before departure
        </Text>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        <Text style={styles.heading}>BOARDING PASS</Text>
        <Text style={styles.text}>Passenger: {boardingDetails.name}</Text>
        <Text style={styles.text}>From: {flightDetails.origin}</Text>
        <Text style={styles.text}>To: {flightDetails.destination}</Text>
        <Text style={styles.text}>Flight: {flightDetails.flightNumber}</Text>
        <Text style={styles.text}>Gate: {boardingDetails.gate || "N/A"}</Text>
        <Text style={styles.text}>Date: {flightDetails.date}</Text>
        <Text style={styles.seat}>SEAT {boardingDetails.seat}</Text>
      </View>
    </Page>
  </Document>
);

export default BoardingPassPDF;