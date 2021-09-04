import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components/Button";
import { colors, content, heading1, heading2, title } from "../theme";
import testID from "../utils/testID";
import { Transaction } from "./types";

type RouteParam = {
  params: Transaction
}

interface TransactionDetailProps {
  route: RouteParam
}

const TransactionDetail = (props: TransactionDetailProps) => {
  const { params } = props.route
  if (params === null || Object.keys(params).length === 0) {
    return <Text>No data</Text>
  }
  const { id,
    senderBank,
    beneficiaryBank,
    beneficiaryName,
    accountNumber,
    amount,
    remark,
    uniqueCode,
    createdAt } = params

  return (
    <View {...testID('transaction-detail-view')} style={styles.root}>
      <View >
        <View style={styles.idRow}>
          <Text style={heading2 as any}>{`ID TRANSAKSI: #${id}`}</Text>
        </View>
        <View style={styles.detailTransactionRow}>
          <Text style={heading2 as any}>{`DETAIL TRANSAKSI`}</Text>
          <PrimaryButton
            title={'Tutup'}
            onPress={() => console.log('pressed')}
          />
        </View>
        <View style={styles.row}>
          <Text style={heading1 as any}>{`${senderBank} -> ${beneficiaryBank}`}</Text>
        </View>
        <View style={styles.detailContainer}>
          <View>
            <Text style={[{ marginBottom: 10 }, title as any]}>{beneficiaryName}</Text>
            <Text style={content as any}>{accountNumber}</Text>
          </View>
          <View>
            <Text style={[{ marginBottom: 10 }, title as any]}>{'NOMINAL'}</Text>
            <Text style={content as any}>{amount}</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View>
            <Text style={[{ marginBottom: 10 }, title as any]}>{'BERITA TRANSFER'}</Text>
            <Text style={content as any}>{remark}</Text>
          </View>
          <View>
            <Text style={[{ marginBottom: 10 }, title as any]}>{'KODE UNIK'}</Text>
            <Text style={content as any}>{uniqueCode}</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View>
            <Text style={[{ marginBottom: 10 }, title as any]}>{'WAKTU DIBUAT'}</Text>
            <Text style={content as any}>{createdAt}</Text>
          </View>
        </View>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
  idRow: {
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  detailTransactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.GRAY,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  row: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 60,
    marginVertical: 10
  }
});

export default TransactionDetail