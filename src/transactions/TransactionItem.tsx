import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SuccessButton, PendingButton } from '../components/Button'
import { colors } from '../theme/colors'
import testID from '../utils/testID'
import { Status, Transaction } from './types'

interface TransactionItemProps {
  item: Transaction
  navigation: any
}

const TransactionItem = (props: TransactionItemProps) => {
  const { beneficiaryName,
    senderBank,
    beneficiaryBank,
    amount,
    createdAt,
    status } = props.item
  const buttonText: string = status === Status.SUCCESS ? 'Berhasil' : 'Pengecekan'

  const onButtonPressed = () => {
    props.navigation.navigate('TransactionDetail', {...props.item} )
  }
  
  return (
    <View
      {...testID('transaction-item')}
      style={styles.container}>
      <View {...testID('sidebar')} style={status === Status.SUCCESS
        ? [styles.sideBar, styles.sideBarSuccess]
        : [styles.sideBar, styles.sideBarPending]}></View>
      <View style={styles.item}>
        <View style={styles.content}>
          <Text style={styles.bankName}>{`${senderBank} -> ${beneficiaryBank}`}</Text>
          <Text style={styles.otherInfo}>{beneficiaryName}</Text>
          <Text style={styles.otherInfo}>{`Rp.${amount} . ${createdAt}`}</Text>
        </View>
        {status === Status.SUCCESS
          ? <SuccessButton
            {...testID('success-button')}
            title={buttonText}
            onPress={onButtonPressed} />
          : <PendingButton
            {...testID('pending-button')}
            title={buttonText}
            onPress={onButtonPressed} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
    flexDirection: 'row',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,

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