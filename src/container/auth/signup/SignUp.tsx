import React from 'react';
import { SignupController } from './SignupController';
import ComponentIndex from '../../../components/ComponentIndex';
import "./../Auth.css"
import { Link } from 'react-router-dom';
const Signup: React.FC = () => {
  const { formik, data, showPassword, handleClickShowPassword,handleClickConfirmShowPassword,showConfirm_Password } = SignupController()
  return (
    <>
      <ComponentIndex.Box className="form-container">
        <ComponentIndex.Box className="form-wrapper">
          <form onSubmit={formik.handleSubmit}>
            {/* {console.log(formik.errors,"hello")} */}
            <ComponentIndex.Box className="form-heading">

              <h3>{data?.state?.data ? "UPDATE EMPLOYEE " : "REGISTER FORM"} </h3>

            </ComponentIndex.Box>
            <ComponentIndex.TextField
              fullWidth
              size='small'
              className='form-input'
              id="emp_name"
              inputProps={{
                maxLength: 20,
              }}
              name="emp_name"
              label="Name"
              value={formik.values.emp_name}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^A-Za-z]/g, ""); 
                formik.setFieldValue("emp_name", newValue);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.emp_name && Boolean(formik.errors.emp_name)}
              helperText={formik.touched.emp_name && formik.errors.emp_name}
            />

            <ComponentIndex.TextField
              fullWidth
              size='small'
              inputMode='numeric'
              className='form-input'
              id="emp_mobile"
              name="emp_mobile"
              label="Mobile"
              inputProps={{
                maxLength: 10,
              }}
              value={formik.values.emp_mobile}
              onChange={(e) => {
                const target = e.target as HTMLInputElement; 
                const newValue = target.value.replace(/\D+/g, "");
                formik.setFieldValue("emp_mobile", newValue);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.emp_mobile && Boolean(formik.errors.emp_mobile)}
              helperText={formik.touched.emp_mobile && formik.errors.emp_mobile}
            />
            <ComponentIndex.TextField
              fullWidth
              size='small'
              className='form-input'
              id="emp_email"
              name="emp_email"
              label="Email"
              value={formik.values.emp_email}
              onChange={(e) => {
                const newValue = e.target.value.replace(/\s/g, ""); // Remove spaces from the input value
                formik.setFieldValue("emp_email", newValue);
              }}

              
              onBlur={formik.handleBlur}
              error={formik.touched.emp_email && Boolean(formik.errors.emp_email)}
              helperText={formik.touched.emp_email && formik.errors.emp_email}
            />

            {data?.state?.data ? "" :
             <ComponentIndex.TextField
              fullWidth
              size='small'
              className='form-input'
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
              error={formik.touched.emp_password && Boolean(formik.errors.emp_password)}
              helperText={formik.touched.emp_password && formik.errors.emp_password}
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
                      {showPassword ? <ComponentIndex.VisibilityOff /> : <ComponentIndex.Visibility />}
                    </ComponentIndex.IconButton>
                  </ComponentIndex.InputAdornment>
                ),
              }}
            />
            }


            {/* confirm */}
            {data?.state?.data ? "" :
             <ComponentIndex.TextField
              fullWidth
              size='small'
              className='form-input'
              id="confirm_password"
              name="confirm_password"
              label="Confirm Password"
              type={showConfirm_Password ? "text" : "password"}
              value={formik.values.confirm_password}
              inputProps={{
                maxLength: 20,
              }}
              onChange={(e) => {
                const newValue = e.target.value.replace(/\s/g, "");
                formik.setFieldValue("confirm_password", newValue);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
              helperText={formik.touched.confirm_password && formik.errors.confirm_password}
              InputProps={{
                endAdornment: (
                  <ComponentIndex.InputAdornment position="end">
                    <ComponentIndex.IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickConfirmShowPassword}
                      edge="end"
                    >
                      {showConfirm_Password ? <ComponentIndex.VisibilityOff /> : <ComponentIndex.Visibility />}
                    </ComponentIndex.IconButton>
                  </ComponentIndex.InputAdornment>
                ),
              }}
            />
            }

            <ComponentIndex.Box className="signup-btn">

              <ComponentIndex.Button value={data?.state?.data ? "update" : "signup"} color="primary" variant="contained" fullWidth type="submit">
                {data?.state?.data ? "UPDATE" : "SIGNUP"}
              </ComponentIndex.Button>
            </ComponentIndex.Box>
            
            {data?.state?.data ? "" : <><ComponentIndex.Box className="para"> <ComponentIndex.Typography>Already Have Account?</ComponentIndex.Typography> <Link to="/"> LOGIN</Link></ComponentIndex.Box></>}

          </form>
        </ComponentIndex.Box>
      </ComponentIndex.Box></>)
}
export default Signup





