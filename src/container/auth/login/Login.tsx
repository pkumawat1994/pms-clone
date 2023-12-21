import React from 'react';
import { LoginController } from './LoginController';
import ComponentIndex from '../../../components/ComponentIndex';
import "../Auth.css"
import { Link } from 'react-router-dom';


const Login: React.FC = () => {
  const { formik, handleClickShowPassword, showPassword } = LoginController()

  return (
    <>
      <ComponentIndex.Box className="form-container">
        <ComponentIndex.Box className="form-wrapper">
          <form onSubmit={formik.handleSubmit}>
            <ComponentIndex.Box className="form-heading">
              <h3>LOGIN</h3>
            </ComponentIndex.Box>
            <ComponentIndex.TextField
              fullWidth
              size='small'
              className='form-input'
              id="email"
              name="emp_email"
              label="Email"
              value={formik.values.emp_email}
              onChange={(e) => {
                const newValue = e.target.value.replace(/\s+/g, "");
                formik.setFieldValue("emp_email", newValue);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.emp_email && Boolean(formik.errors.emp_email)}
              helperText={formik.touched.emp_email && formik.errors.emp_email}
            />

            <ComponentIndex.TextField
              fullWidth
              size='small'
              className='form-input'
              id="password"
              type={showPassword ? "text" : "password"}
              name="emp_password"
              label="Password"
              value={formik.values.emp_password}
              onChange={(e) => {
                const newValue = e.target.value.replace(/\s/g, "");
                formik.setFieldValue("emp_password", newValue);
              }}
              inputProps={{
                maxLength: 40,
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.emp_password && Boolean(formik.errors.emp_password)}
              helperText={formik.touched.emp_password && formik.errors.emp_password}
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
            <ComponentIndex.Box className="remeber-box">
              <ComponentIndex.FormControlLabel control={<ComponentIndex.Checkbox />} label="Remember me" />
              <Link to="/forgot-password"><p>forgot password </p></Link>
            </ComponentIndex.Box>

            <ComponentIndex.Button color="primary" variant="contained" fullWidth type="submit">
              login
            </ComponentIndex.Button>
            <ComponentIndex.Box>


            </ComponentIndex.Box>
            <ComponentIndex.Typography>Not a member ?<ComponentIndex.Link to="/signup">SIGNUP</ComponentIndex.Link></ComponentIndex.Typography>


          </form>
        </ComponentIndex.Box>
      </ComponentIndex.Box>


    </>
  )
}

export default Login


