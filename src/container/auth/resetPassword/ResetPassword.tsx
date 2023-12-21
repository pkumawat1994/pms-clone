import React from 'react'
import ComponentIndex from '../../../components/ComponentIndex'
import { ResetPasswordController } from './ResetPasswordController'


const ResetPassword = () => {
    const { formik ,handleClickShowPassword,handleClickShowCPassword,showPassword,showCPassword} = ResetPasswordController()
    return (
        <>{console.log(formik.errors, "formik-error")}
            <ComponentIndex.Box className="forgot-pass-box">
                <ComponentIndex.Box className="forgot-form">
                    <h1>Reset Password</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <ComponentIndex.Box className="form-input">
                            <ComponentIndex.TextField
                                fullWidth
                                size='small'
                                className='form-field'
                                name="newPassword"
                                type={showPassword ? "text" : "password"}
                                label="New Password"
                                value={formik.values.newPassword}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/\s/g, "");
                                    formik.setFieldValue("newPassword", newValue);
                                  }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                                helperText={formik.touched.newPassword && formik.errors.newPassword}
                                InputProps={{
                                    endAdornment: (
                                      <ComponentIndex.InputAdornment position="end">
                                        <ComponentIndex.IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          edge="end"
                                        >
                                          {showPassword ? <ComponentIndex.VisibilityOff /> : <ComponentIndex.Visibility />}
                                        </ComponentIndex.IconButton>
                                      </ComponentIndex.InputAdornment>
                                    ),
                                  }}
                            />
                        </ComponentIndex.Box>
                        <ComponentIndex.Box className="form-input">
                            <ComponentIndex.TextField
                                fullWidth
                                size='small'
                                className='form-field'
                                name="confirmPassword"
                                label="Confirm Password"
                                value={formik.values.confirmPassword}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/\s/g, "");
                                    formik.setFieldValue("confirmPassword", newValue);
                                  }}
                                onBlur={formik.handleBlur}
                                type={showCPassword ? "text" : "password"}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                InputProps={{
                                    endAdornment: (
                                      <ComponentIndex.InputAdornment position="end">
                                        <ComponentIndex.IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowCPassword}
                                          edge="end"
                                        >
                                          {showCPassword ? <ComponentIndex.VisibilityOff /> : <ComponentIndex.Visibility />}
                                        </ComponentIndex.IconButton>
                                      </ComponentIndex.InputAdornment>
                                    ),
                                  }}
                            />

                        </ComponentIndex.Box>



                        <ComponentIndex.Button color="success" type="submit" className='send-otp' variant="contained" >Reset</ComponentIndex.Button>
                    </form>
                </ComponentIndex.Box>
            </ComponentIndex.Box>
        </>

    )
}

export default ResetPassword