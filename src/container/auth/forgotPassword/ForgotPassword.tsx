import React from 'react'
import ComponentIndex from '../../../components/ComponentIndex'
import { ForgotPasswordController } from './ForgotPasswordController'

const ForgotPassword = () => {
    const { formik } = ForgotPasswordController()
    return (<><ComponentIndex.Box className="forgot-pass-box">

        <ComponentIndex.Box className="forgot-form">
            <h1>Forgot password</h1>
            <form onSubmit={formik.handleSubmit}>

                <ComponentIndex.TextField
                    fullWidth
                    size="small"
                    className='form-input'
                    id="email"
                    name="emp_email"
                    label="Email"
                    value={formik.values.emp_email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.emp_email && Boolean(formik.errors.emp_email)}
                    helperText={formik.touched.emp_email && formik.errors.emp_email}
                />

                <ComponentIndex.Button color="success" type="submit" className='send-otp' variant="contained" >Send Otp</ComponentIndex.Button>
            </form>
        </ComponentIndex.Box>


    </ComponentIndex.Box>

    </>)
}

export default ForgotPassword