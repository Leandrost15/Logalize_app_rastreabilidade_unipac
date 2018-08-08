import React, { Component } from 'react';
import {StyleSheet, Text, View, Alert } from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-google';
import {Actions} from 'react-native-router-flux'

export default class Barcode extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <BarcodeScanner
                    style={{ flex: 1 }}
                    onBarcodeRead={({ data, type }) => {
                        // handle your scanned barcodes here!
                        // as an example, we show an alert:
						window.barcode = data
						Actions.showdata()
                    }}
                />
            </View>
        );
    }
}