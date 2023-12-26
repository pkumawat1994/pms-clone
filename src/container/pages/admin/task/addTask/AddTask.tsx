import React from 'react'
import ComponentIndex from '../../../../../components/ComponentIndex';
import { AddTaskController } from './AddTaskController';

const AddTask = () => {
  const { formik, data, showPassword, handleClickShowPassword, handleClickConfirmShowPassword, showConfirm_Password } = AddTaskController()

  return (
    <>
     <ComponentIndex.Box className="register_box">
            <ComponentIndex.Box className="form-heading">
                            <h3 style={{textAlign:"center"}}>{data?.state?.data ? "UPDATE TASK" : "ADD Task"}</h3>
                        </ComponentIndex.Box>
                        <form onSubmit={formik.handleSubmit}>
                <ComponentIndex.Grid container spacing={2}>

                  {/* Title------- */}

                    <ComponentIndex.Grid item xs={6}>
                        <ComponentIndex.TextField
                            fullWidth
                            size="small"
                            className="form-input"
                            id="title"
                            inputProps={{
                                maxLength: 20,
                            }}
                            name="title"
                            label="Title"
                            value={formik.values.title}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const newValue = e.target.value.replace(/[^A-Za-z]/g, "");
                                formik.setFieldValue("title", newValue);
                            }}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                    </ComponentIndex.Grid>

                    {/* Description------ */}

                    <ComponentIndex.Grid item xs={6}>
                        <ComponentIndex.TextField
                            fullWidth
                            size="small"
                            inputMode="numeric"
                            className="form-input"
                            id="description"
                            name="description"
                            label="Description"
                            inputProps={{
                                maxLength: 40,
                            }}
                            value={formik.values.description}
                            onChange={(e) => {
                                const target = e.target;
                                const newValue = e.target.value.replace(/[^A-Za-z]/g, "");
                                formik.setFieldValue("description", newValue);
                            }}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.description && Boolean(formik.errors.description)
                            }
                            helperText={formik.touched.description && formik.errors.description}
                        />

                    </ComponentIndex.Grid>

                    {/* Assignee------  */}

                    <ComponentIndex.Grid item xs={6}>

                    <ComponentIndex.FormControl fullWidth size="small">
        <ComponentIndex.InputLabel id="assignee">Assignee</ComponentIndex.InputLabel>
        <ComponentIndex.Select
          labelId="assignee"
          name="assignee"
          value={formik.values.assignee}
          label="Assignee"
          onChange={formik.handleChange}
        >
          <ComponentIndex.MenuItem value={"Parmanand"}>Parmanand</ComponentIndex.MenuItem>
          <ComponentIndex.MenuItem value={"Nirmal"}>Nirmal</ComponentIndex.MenuItem>
          <ComponentIndex.MenuItem value={"Abhay"}>Abhay</ComponentIndex.MenuItem>
          <ComponentIndex.MenuItem value={"Jatin"}>Jatin</ComponentIndex.MenuItem>
        </ComponentIndex.Select>
        <ComponentIndex.FormHelperText sx={{ color: 'red' }}>
                                {formik.touched.assignee && formik.errors.assignee}
                            </ComponentIndex.FormHelperText>
      </ComponentIndex.FormControl>

                    </ComponentIndex.Grid>

                    {/* Task Duration---- */}

                    <ComponentIndex.Grid item xs={6}>

 <ComponentIndex.TextField
                            fullWidth
                            size="small"
                            type="number"
                            className="form-input"
                            id="taskDuration"
                            name="taskDuration"
                            label="Task-Duration(Hours)"
                            value={formik.values.taskDuration}
                            onChange={(e) => {
                                const newValue = e.target.value.replace(/\s/g, ""); // Remove spaces from the input value
                                formik.setFieldValue("taskDuration", newValue);
                            }}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.taskDuration && Boolean(formik.errors.taskDuration)
                            }
                            helperText={formik.touched.taskDuration && formik.errors.taskDuration}
                        />

                        {/* <ComponentIndex.FormControl sx={{ minWidth: 525 }}>
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
                        </ComponentIndex.FormControl> */}
                    </ComponentIndex.Grid>

                    {/* AssignDate---- */}

                    <ComponentIndex.Grid item xs={6}>
                        <ComponentIndex.TextField
                            fullWidth
                            size="small"
                            className="form-input"
                            id="assignDate"
                            name="assignDate"
                            type="date"
                            value={formik.values.assignDate}
                            onChange={formik.handleChange}
                            // onChange={(e) => {
                            //   const newValue = e.target.value.replace(/\s/g, "");
                            //   formik.setFieldValue("assignDate", newValue);
                            // }}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.assignDate &&
                                Boolean(formik.errors.assignDate)
                            }
                            helperText={
                                formik.touched.assignDate &&
                                formik.errors.assignDate
                            }
                        />

                    </ComponentIndex.Grid>

                    {/* Due-Date-----  */}

                    <ComponentIndex.Grid item xs={6}>
                        <ComponentIndex.TextField
                            fullWidth
                            size="small"
                            className="form-input"
                            id="dueDate"
                            name="dueDate"
                           
                            type="date"
                            value={formik.values.dueDate}
                            onChange={formik.handleChange}
                            // onChange={(e) => {
                            //   const newValue = e.target.value.replace(/\s/g, "");
                            //   formik.setFieldValue("dueDate", newValue);
                            // }}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.dueDate &&
                                Boolean(formik.errors.dueDate)
                            }
                            helperText={
                                formik.touched.dueDate &&
                                formik.errors.dueDate
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
                                {data?.state?.data ? "UPDATE TASK" : "ADD TASK"}
                            </ComponentIndex.Button>
                        </ComponentIndex.Box>
                    </ComponentIndex.Grid>


                </ComponentIndex.Grid>
                </form>
            </ComponentIndex.Box>
    </>
  )
}

export default AddTask