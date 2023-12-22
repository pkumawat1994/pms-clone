import React from 'react';
import { SignupController } from './SignupController';

import "./Signup.css"
import { Link } from 'react-router-dom';
import ComponentIndex from '../../../../../components/ComponentIndex';

const Signup: React.FC = () => {
    const { formik, data, showPassword, handleClickShowPassword, handleClickConfirmShowPassword, showConfirm_Password } = SignupController()
    return (
        <>
            <ComponentIndex.Box className="register_box">

            <ComponentIndex.Box className="form-heading">
                            <h3 style={{textAlign:"center"}}>{data?.state?.data ? "UPDATE USER" : "REGISTER"}</h3>
                        </ComponentIndex.Box>
                        <form onSubmit={formik.handleSubmit}>
                <ComponentIndex.Grid container spacing={2}>
                    <ComponentIndex.Grid item xs={12}>
                        <ComponentIndex.TextField
                            fullWidth
                            size="small"
                            className="form-input"
                            id="emp_name"
                            inputProps={{
                                maxLength: 20,
                            }}
                            name="emp_name"
                            label="Name"
                            value={formik.values.emp_name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const newValue = e.target.value.replace(/[^A-Za-z]/g, "");
                                formik.setFieldValue("emp_name", newValue);
                            }}
                            onBlur={formik.handleBlur}
                            error={formik.touched.emp_name && Boolean(formik.errors.emp_name)}
                            helperText={formik.touched.emp_name && formik.errors.emp_name}
                        />
                    </ComponentIndex.Grid>
                    <ComponentIndex.Grid item xs={6}>
                        <ComponentIndex.TextField
                            fullWidth
                            size="small"
                            inputMode="numeric"
                            className="form-input"
                            id="emp_mobile"
                            name="emp_phoneNumber"
                            label="Mobile"
                            inputProps={{
                                maxLength: 10,
                            }}
                            value={formik.values.emp_phoneNumber}
                            onChange={(e) => {
                                const target = e.target;
                                const newValue = target.value.replace(/\D+/g, "");
                                formik.setFieldValue("emp_phoneNumber", newValue);
                            }}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.emp_phoneNumber && Boolean(formik.errors.emp_phoneNumber)
                            }
                            helperText={formik.touched.emp_phoneNumber && formik.errors.emp_phoneNumber}
                        />

                    </ComponentIndex.Grid>
                    <ComponentIndex.Grid item xs={6}>
                        <ComponentIndex.TextField
                            fullWidth
                            size="small"
                            className="form-input"
                            id="emp_email"
                            name="emp_email"
                            label="Email"
                            value={formik.values.emp_email}
                            onChange={(e) => {
                                const newValue = e.target.value.replace(/\s/g, ""); // Remove spaces from the input value
                                formik.setFieldValue("emp_email", newValue);
                            }}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.emp_email && Boolean(formik.errors.emp_email)
                            }
                            helperText={formik.touched.emp_email && formik.errors.emp_email}
                        />

                    </ComponentIndex.Grid>

                    <ComponentIndex.Grid item xs={6}>
                        {data?.state?.data ? (
                            ""
                        ) : (
                            <ComponentIndex.TextField
                                fullWidth
                                size="small"
                                className="form-input"
                                id="emp_password"
                                name="emp_password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                value={formik.values.emp_password}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/\s/g, "");
                                    formik.setFieldValue("emp_password", newValue);
                                }}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.emp_password &&
                                    Boolean(formik.errors.emp_password)
                                }
                                helperText={
                                    formik.touched.emp_password && formik.errors.emp_password
                                }
                                inputProps={{
                                    maxLength: 20,
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <ComponentIndex.InputAdornment position="end">
                                            <ComponentIndex.IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <ComponentIndex.VisibilityOff />
                                                ) : (
                                                    <ComponentIndex.Visibility />
                                                )}
                                            </ComponentIndex.IconButton>
                                        </ComponentIndex.InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    </ComponentIndex.Grid>
                    <ComponentIndex.Grid item xs={6}>
                        {data?.state?.data ? (
                            ""
                        ) : (
                            <ComponentIndex.TextField
                                fullWidth
                                size="small"
                                className="form-input"
                                id="confirm_password"
                                name="confirm_Password"
                                label="Confirm Password"
                                type={showConfirm_Password ? "text" : "password"}
                                value={formik.values.confirm_Password}
                                inputProps={{
                                    maxLength: 20,
                                }}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/\s/g, "");
                                    formik.setFieldValue("confirm_Password", newValue);
                                }}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.confirm_Password &&
                                    Boolean(formik.errors.confirm_Password)
                                }
                                helperText={
                                    formik.touched.confirm_Password &&
                                    formik.errors.confirm_Password
                                }
                                InputProps={{
                                    endAdornment: (
                                        <ComponentIndex.InputAdornment position="end">
                                            <ComponentIndex.IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickConfirmShowPassword}
                                                edge="end"
                                            >
                                                {showConfirm_Password ? (
                                                    <ComponentIndex.VisibilityOff />
                                                ) : (
                                                    <ComponentIndex.Visibility />
                                                )}
                                            </ComponentIndex.IconButton>
                                        </ComponentIndex.InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    </ComponentIndex.Grid>


                    <ComponentIndex.Grid item xs={6}>
                        <ComponentIndex.FormControl sx={{ minWidth: 525 }}>
                            <ComponentIndex.InputLabel id="demo-simple-select-helper-label">
                                Role
                            </ComponentIndex.InputLabel>
                            <ComponentIndex.Select
                                size="small"
                                className="form-input"
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={formik.values.emp_role}
                                label="Role"
                                name="emp_role"
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.emp_role && Boolean(formik.errors.emp_role)
                                }
                            //   helperText={
                            //     formik.touched.emp_role && formik.errors.emp_role
                            //   }
                            >
                                <ComponentIndex.MenuItem value="">
                                    <em>None</em>
                                </ComponentIndex.MenuItem>
                                <ComponentIndex.MenuItem value={"management"}>
                                    Management
                                </ComponentIndex.MenuItem>
                                <ComponentIndex.MenuItem value={"admin"}>
                                    Admin
                                </ComponentIndex.MenuItem>
                                <ComponentIndex.MenuItem value={"team-lead"}>
                                    Team-Lead
                                </ComponentIndex.MenuItem>
                            </ComponentIndex.Select>
                            <ComponentIndex.FormHelperText sx={{ color: 'red' }}>
                                {formik.touched.emp_role && formik.errors.emp_role}
                            </ComponentIndex.FormHelperText>
                        </ComponentIndex.FormControl>
                    </ComponentIndex.Grid>
                    <ComponentIndex.Grid item xs={6}>

                        <ComponentIndex.TextField
                            fullWidth
                            size="small"
                            className="form-input"
                            id="emp_dateofbirth"
                            name="emp_dateofbirth"
                            type="date"
                            value={formik.values.emp_dateofbirth}
                            onChange={formik.handleChange}
                            // onChange={(e) => {
                            //   const newValue = e.target.value.replace(/\s/g, "");
                            //   formik.setFieldValue("emp_dateofbirth", newValue);
                            // }}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.emp_dateofbirth &&
                                Boolean(formik.errors.emp_dateofbirth)
                            }
                            helperText={
                                formik.touched.emp_dateofbirth &&
                                formik.errors.emp_dateofbirth
                            }
                        />

                    </ComponentIndex.Grid>

                    <ComponentIndex.Grid item xs={12}>

                    <ComponentIndex.Box className="form-btn-wrap">
                            <ComponentIndex.Button
                                className="form-btn"
                                value={data?.state?.data ? "update" : "signup"}
                                color="primary"
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                {data?.state?.data ? "UPDATE" : "REGISTER EMPLOYEE"}
                            </ComponentIndex.Button>
                        </ComponentIndex.Box>
                    </ComponentIndex.Grid>

                </ComponentIndex.Grid>
                </form>
            </ComponentIndex.Box>

           
        </>
    )
}
export default Signup





