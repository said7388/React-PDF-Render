import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import ClientInfo from './ClientInfo';
import PDFHeader from './PDFHeader';
import PDFTable from './PDFTable';

Font.register({
  family: `"Tiro Bangla", sarif`,
  src: '@fontsource/tiro-bangla',
});

const styles = StyleSheet.create({
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    // fontFamily: `"Tiro Bangla", sarif`,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const PDFGenerate = () => {
  return (
    <Document>
      <Page size="A4" style={{ paddingVertical: 40 }} wrap>
        <PDFHeader />
        <ClientInfo />
        <PDFTable />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
      <Page size="A4" style={{ paddingVertical: 40 }} wrap>
        <View>
          <Text style={styles.text}>
            অহমর সোনার বাংলা আমি তোমায় ভালোবাসি জন্ম দিয়েছো মাগো তুমি তাই
            তোমায় ভালোবাসি
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerate;
