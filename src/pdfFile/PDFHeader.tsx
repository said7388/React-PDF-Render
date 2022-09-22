import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#0D83DD',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRight: {
    display: 'flex',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLogo: {
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
  },
  headerText: {
    fontSize: 12,
    textAlign: 'right',
    color: 'white',
    paddingBottom: '7px',
  },
});

const PDFHeader = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerLogo} fixed>
        INVOICE
      </Text>
      <View style={styles.headerRight}>
        <View>
          <Text style={styles.headerText} fixed>
            +880234567
          </Text>
          <Text style={styles.headerText} fixed>
            abusaid@gmail.com
          </Text>
          <Text style={styles.headerText} fixed>
            abusaid@gmail.com
          </Text>
        </View>
        <View>
          <Text style={styles.headerText} fixed>
            Your Address
          </Text>
          <Text style={styles.headerText} fixed>
            city , country name
          </Text>
          <Text style={styles.headerText} fixed>
            zip code here
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PDFHeader;
