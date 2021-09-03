import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SuccessButton, PendingButton } from '../components/Button'
import { colors } from '../theme/colors'
import { Transaction } from './types'

interface TransactionItemProps {
  item: Transaction
}

const TransactionItem = (props: TransactionItemProps) => {
  const { beneficiaryName,
    senderBank,
    beneficiaryBank,
    amount,
    createdAt,
    status } = props.item
  const buttonText: string = status === "SUCCESS" ? 'Berhasil' : 'Pengecekan'
  return (
    <View style={styles.container}>
      <View style={status === "SUCCESS"
        ? [styles.sideBar, styles.sideBarSuccess]
        : [styles.sideBar, styles.sideBarPending]}></View>
      <View style={styles.item}>
        <View style={styles.content}>
          <Text style={styles.bankName}>{`${senderBank} -> ${beneficiaryBank}`}</Text>
          <Text style={styles.otherInfo}>{beneficiaryName}</Text>
          <Text style={styles.otherInfo}>{`Rp.${amount} . ${createdAt}`}</Text>
        </View>
        {status === "SUCCESS"
          ? <SuccessButton title={buttonText} />
          : <PendingButton title={buttonText} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  sideBar: {
    flex: 0.02,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  sideBarSuccess: {
    backgroundColor: colors.SUCCESS
  },
  sideBarPending: {
    backgroundColor: colors.PENDING
  },
  item: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row'
  },
  bankName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  otherInfo: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  content: {
    flex: 1
  }
})

export default TransactionItem