import { StyleSheet, Text, View } from '@react-pdf/renderer';

export default function PDFTable() {
  return (
    <View style={styles.orderTable}>
      <View style={styles.tbody}>
        <View style={styles.tr}>
          <Text style={[styles.td, { width: 50, textAlign: 'center' }]}>#</Text>
          <Text style={[styles.td, { flex: 1 }]}>Name</Text>
          <Text style={[styles.td, { width: 75, textAlign: 'center' }]}>
            Quantity
          </Text>
          <Text style={[styles.td, { flex: 1, textAlign: 'center' }]}>
            Variations
          </Text>
          <Text style={[styles.td, { width: 100, textAlign: 'right' }]}>
            Total
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderTable: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  thead: {
    width: '100%',
    backgroundColor: '#F3F4F6',
    display: 'flex',
    flexDirection: 'row',
  },

  th: {
    fontSize: 11,
    // fontFamily: "Lato Bold",
    color: '#374151',
    padding: '12pt 16pt',
    borderRightWidth: 1,
    borderRightColor: '#ffffff',
    borderRightStyle: 'solid',
  },

  tbody: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  tr: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },

  td: {
    fontSize: 11,
    color: '#0D83DD',
    padding: '12pt 16pt',
    borderTopWidth: 1,
    borderTopColor: '#0D83DD',
    borderTopStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#ffffff',
    borderRightStyle: 'solid',
  },

  singleBorder: {
    width: '50%',
    display: 'flex',
    marginLeft: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    borderTopStyle: 'solid',
    marginBottom: 2,
  },

  totalCountWrapper: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    borderTopStyle: 'solid',
  },

  totalCountRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  totalCountCell: {
    fontSize: 11,
    color: '#6B7280',
    padding: '8pt 16pt 2pt',
  },
});
