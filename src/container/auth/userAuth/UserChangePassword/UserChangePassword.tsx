import React from 'react'
import ComponentIndex from '../../../../components/ComponentIndex'
import { UserChangePasswordController } from './UserChangePasswordController'
import "../../../auth/Auth.css"


const UserChangePassword = () => {
    const { formik } = UserChangePasswordController()
    return (<>

        <ComponentIndex.Box className="change-password-main">
            <ComponentIndex.Box className="change-Password-form-wrapper">
                <div><h3>CHANGE PASSWORD </h3></div>
                <form onSubmit={formik.handleSubmit}>
                <ComponentIndex.TextField fullWidth
                size='small'
                    name="newPassword"
                    label="New Password"
                    value={formik.values.newPassword}
                    onChange={(e:any) => {
                        const newValue = e.target.value.replace(/\s/g, "");
                        formik.setFieldValue("newPassword", newValue);
                      }}
                      inputProps={{
                        maxLength: 20,
                      }}
                    onBlur={formik.handleBlur}
                    error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                    helperText={formik.touched.newPassword && formik.errors.newPassword}
                    />
                 &nbsp;
                <ComponentIndex.TextField
                fullWidth
                
                     name="oldPassword"
                size='small'
                     label="Old Password"
                     value={formik.values.oldPassword}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                     helperText={formik.touched.oldPassword && formik.errors.oldPassword}
                    />
                    <ComponentIndex.Grid item xs={12}>
                            <ComponentIndex.Box className="update-btn-wrapper">

                                <ComponentIndex.Box className="form-btn-wrap">
                                    <ComponentIndex.Button
                                        className="form-btn"
                                       
                                        color="primary"
                                        variant="contained"
                                        fullWidth
                                        type="submit"
                                    >
                                        SAVE 
                                    </ComponentIndex.Button>
                                </ComponentIndex.Box>
                            </ComponentIndex.Box>
                        </ComponentIndex.Grid>
</form>

                {/* <ComponentIndex.Button color="success" type="submit" className='inpt-btn' variant="contained" >Change Password</ComponentIndex.Button> */}
            </ComponentIndex.Box>
        </ComponentIndex.Box>
    </>

    )
}

export default UserChangePassword