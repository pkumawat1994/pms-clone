import React, { useState } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { OtpVerifyController } from './OtpVerifyController';
import ComponentIndex from '../../../../components/ComponentIndex';

const OtpVerify = () => {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (newValue: string) => {
    const sanitizedValue = newValue.replace(/[^0-9]/g, '');
    setValue(sanitizedValue);
  }

  const { handleOtpSubmit } = OtpVerifyController();

  const validateOtp = (otp: string): boolean => {
    // Perform your OTP validation logic here
    // For example, check if the OTP is exactly 4 digits
    const isValid = /^\d{4}$/.test(otp);
    return isValid;
  }

  const handleSubmit = () => {
    setError(null); // Reset error state
    if (validateOtp(value)) {
      // If validation passes, submit the OTP
      handleOtpSubmit(value);
    } else {
      setError('Please enter a 4-digit OTP.');
    }
  }

  return (
    <>
      <ComponentIndex.Box className="forgot-pass-box">
        <ComponentIndex.Box className="forgot-form">
          <h2>OTP Verification</h2>
          <MuiOtpInput
            value={value}
            onChange={handleChange}
            length={4}
            autoFocus
          />
          {error && <p className="error-message">{error}</p>}
          <ComponentIndex.Button
            color="success"
            onClick={handleSubmit}
            className='send-otp'
            variant="contained"
          >
            Verify OTP
          </ComponentIndex.Button>
        </ComponentIndex.Box>
      </ComponentIndex.Box>
    </>
  );
}

export default OtpVerify;
