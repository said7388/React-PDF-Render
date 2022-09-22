import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  clientInfo: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '24px 0px',
  },
  invoiceAddress: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  invoiceHeader: {
    fontSize: 12,
    textAlign: 'left',
    color: 'gray',
    paddingBottom: '7px',
  },
  invoiceHeaderRight: {
    fontSize: 12,
    textAlign: 'right',
    color: 'gray',
    paddingBottom: '7px',
  },
  invoiceText: {
    fontSize: 12,
    textAlign: 'left',
    color: 'black',
    paddingBottom: '5px',
  },
  alignEnd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  invoiceAmount: {
    fontSize: 24,
    color: '#0D83DD',
  },
});

const ClientInfo = () => {
  return (
    <View style={styles.clientInfo}>
      <View style={styles.invoiceAddress}>
        <View>
          <Text style={styles.invoiceHeader} fixed>
            Billed To
          </Text>
          <Text style={styles.invoiceText} fixed>
            client name
          </Text>
          <Text style={styles.invoiceText} fixed>
            1, client Address
          </Text>
          <Text style={styles.invoiceText} fixed>
            city, Country
          </Text>
          <Text style={styles.invoiceText} fixed>
            Zip Code
          </Text>
        </View>
        <View style={styles.alignEnd}>
          <View>
            <Text style={styles.invoiceHeader} fixed>
              Invoice number
            </Text>
            <Text style={styles.invoiceText} fixed>
              009834456
            </Text>
          </View>
          <View>
            <Text style={styles.invoiceHeader} fixed>
              Date of Issue
            </Text>
            <Text style={styles.invoiceText} fixed>
              25/10/2022
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.invoiceHeaderRight} fixed>
          Invoice Total
        </Text>
        <Text style={styles.invoiceAmount} fixed>
          $4520.00
        </Text>
      </View>
    </View>
  );
};

export default ClientInfo;
