import React from 'react';
import ComponentIndex from '../../../../components/ComponentIndex';
import "../../../auth/Auth.css"
import { Link } from 'react-router-dom';
import { UserLoginController } from './UserLoginController';


const AdminLogin: React.FC = () => {
  const { formik, handleClickShowPassword, showPassword } = UserLoginController()

  return (
    <>
      <ComponentIndex.Box className="form-container">
        <ComponentIndex.Box className="form-wrapper">
          <form onSubmit={formik.handleSubmit}>
            <ComponentIndex.Box className="form-heading">
              <h3>USER LOGIN</h3>
            </ComponentIndex.Box>
            <ComponentIndex.TextField
              fullWidth
              size='small'
              className='form-input'
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={(e) => {
                const newValue = e.target.value.replace(/\s+/g, "");
                formik.setFieldValue("email", newValue);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <ComponentIndex.TextField
              fullWidth
              size='small'
              className='form-input'
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={(e) => {
                const newValue = e.target.value.replace(/\s/g, "");
                formik.setFieldValue("password", newValue);
              }}
              inputProps={{
                maxLength: 40,
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
              <Link to="/user-forgot-password"><p>forgot password </p></Link>
            </ComponentIndex.Box>



            <ComponentIndex.Box className="form-btn-wrap">
              <ComponentIndex.Button color="primary" variant="contained" className="form-btn" fullWidth type="submit">
                login
              </ComponentIndex.Button>
            </ComponentIndex.Box>

            <ComponentIndex.Box>
            </ComponentIndex.Box>
            {/* <ComponentIndex.Typography>Not a member ?<ComponentIndex.Link to="/signup">SIGNUP</ComponentIndex.Link></ComponentIndex.Typography> */}


          </form>
        </ComponentIndex.Box>
      </ComponentIndex.Box>


    </>
  )
}

export default AdminLogin


