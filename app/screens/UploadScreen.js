import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import * as Progress  from "react-native-progress";
import LottieView from 'lottie-react-native';

import colors from '../config/colors';

function UploadScreen({ onDone, progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? 
                    <Progress.Bar color={colors.primary} progress={progress} width={200} />
                        : 
                    <LottieView 
                        onAnimationFinish={onDone}
                        style={styles.animation}
                        autoPlay
                        loop={false}
                        source={require('../assets/animations/done.json')} 
                    />
                }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    animation: {
        width: 150
    }
})

export default UploadScreen;