import React from 'react'
import ComponentIndex from '../../../components/ComponentIndex'
import { ChangePasswordController } from './ChangePasswordController'
import "../Auth.css";

const ChangePassword = () => {
    const { formik } = ChangePasswordController()
    return (<>

        <ComponentIndex.Box className="change-password-main">
            <ComponentIndex.Box className="change-Password-form-wrapper">
                <div><h3>Change Password</h3></div>
                <ComponentIndex.TextField fullWidth
                    name="newPassword"
                    label="New Password"
                    value={formik.values.newPassword}
                    onChange={(e) => {
                        const newValue = e.target.value.replace(/\s/g, "");
                        formik.setFieldValue("newPassword", newValue);
                      }}
                      inputProps={{
                        maxLength: 20,
                      }}
                    onBlur={formik.handleBlur}
                    error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                    helperText={formik.touched.newPassword && formik.errors.newPassword}
                    className='inpt' />
                <ComponentIndex.TextField
                     name="oldPassword"
                     label="New Password"
                     value={formik.values.oldPassword}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                     helperText={formik.touched.oldPassword && formik.errors.oldPassword}
                    className='inpt' />
                <ComponentIndex.Button color="success" type="submit" className='inpt-btn' variant="contained" >Change Password</ComponentIndex.Button>
            </ComponentIndex.Box>
        </ComponentIndex.Box>
    </>

    )
}

export default ChangePassword