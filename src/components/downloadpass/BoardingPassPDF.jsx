import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    position: "relative",
  },
  leftSection: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    padding: 20,
    border: "2px dashed gray",
  },
  rightSection: {
    padding: 20,
    backgroundColor: "#b382e7",
    flexGrow: 0,
    flexShrink: 1,
    border: "2px dashed white",
    borderTop:0,
  },
  heading: {
    fontSize: 12,
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
  instructionNote: {
    fontSize: 8,
    color: "purple",
  },
  title: {
    fontSize: 10,
    marginBottom: 4,
    color: "purple",
    marginTop: 10,
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
        <Text style={styles.text}>Amount Paid: {flightDetails.price} INR</Text>
        <Text style={styles.text}>
          Departure Time: {flightDetails.departuretime}
        </Text>
        <Text style={styles.smallNote}>
          Gate closes 15 minutes before departure
        </Text>
        <Text style={styles.title}>Boarding Instructions:</Text>
        <Text style={styles.instructionNote}>
          • Complete your check-in online or at the airport counter/kiosk.
        </Text>
        <Text style={styles.instructionNote}>
          • Provide your booking reference or e-ticket number along with a valid
          ID.
        </Text>
        <Text style={styles.instructionNote}>
          • Choose whether to receive a digital boarding pass or a printed copy at the airport.
        </Text>
        <Text style={styles.instructionNote}>
          • Confirm your flight number, departure gate, boarding time, and seat
          assignment on the boarding pass.
        </Text>
        <Text style={styles.instructionNote}>
          • Keep your boarding pass and valid ID ready for security screening.
        </Text>
        <Text style={styles.instructionNote}>
          • Follow airport staff instructions and regulations.
        </Text>
        <Text style={styles.instructionNote}>
          • Check the airport display screens for any updates or gate changes.
        </Text>
        <Text style={styles.instructionNote}>
          • Arrive at the gate at least 30–45 minutes before departure.
        </Text>
        <Text style={styles.instructionNote}>
          • Scan your boarding pass at the gate before entering the aircraft.
        </Text>
        <Text style={styles.instructionNote}>
          • Stow your carry-on luggage as directed by the cabin crew.
        </Text>
        <Text style={styles.instructionNote}>
          • Retain it until the flight is complete; you may need it for transit
          checks, baggage claims, or future reference.
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
        <Text style={styles.text}>Amount Paid: {flightDetails.price} INR</Text>
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
