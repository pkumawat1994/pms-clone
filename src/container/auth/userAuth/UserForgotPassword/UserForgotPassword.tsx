import React from 'react'
import ComponentIndex from '../../../../components/ComponentIndex'
import { UserForgotPasswordController } from './UserForgotPasswordController' 

const UserForgotPassword = () => {
    const { formik } = UserForgotPasswordController()
    return (<><ComponentIndex.Box className="forgot-pass-box">

        <ComponentIndex.Box className="forgot-form">
            <h1>Employee Forgot password</h1>
            <form onSubmit={formik.handleSubmit}>

                <ComponentIndex.TextField
                    fullWidth
                    size="small"
                    className='form-input'
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
<ComponentIndex.Box className="form-btn-wrap">


<ComponentIndex.Button color="success" className="form-btn" type="submit"  variant="contained" >Send Otp</ComponentIndex.Button>


</ComponentIndex.Box>
            </form>
        </ComponentIndex.Box>


    </ComponentIndex.Box>

    </>)
}

export default UserForgotPassword