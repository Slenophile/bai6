import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^(\+84|0)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    return phoneRegex.test(number);
  };

  const onContinuePress = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam!');
      return;
    }
    setError('');
    Alert.alert('Thông báo', `Số điện thoại bạn nhập: ${phoneNumber}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Đăng nhập</Text>

        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          placeholder="Nhập số điện thoại của bạn"
          placeholderTextColor="#ccc"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => {
            setPhoneNumber(text);
            setError('');
          }}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={onContinuePress}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 8,
    fontSize: 14,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 16,
  },
  button: {
    height: 48,
    backgroundColor: '#007AFF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;