
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { EmployeeChangePassword, addTask, deleteEmployee, deleteTask, updateTask } from "..";
import { rejectedPayload } from "../IRedux";

const EmployeeSlice= createSlice({
  name: "Employee",
  initialState: {
    isAuthenticated: false,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
   
    builder.addCase(deleteEmployee.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(deleteEmployee.fulfilled, (state, action) => {
        console.log(action, "5678");
        toast.success(action?.payload?.data?.message);
        state.loading = false;
      });
      builder.addCase(deleteEmployee.rejected, (state, action) => {
        console.log(action?.payload);
        const payload = action?.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
        state.loading = false;
      });


      //ADD_TASK------
      builder.addCase(addTask.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(addTask.fulfilled, (state, action) => {
      
        console.log("redu-addtask",action)
        state.loading = false;
        toast.success(action?.payload?.data?.message);
      });
      builder.addCase(addTask.rejected, (state, action) => {
        console.log("redu-addtask-err",action)

        state.loading = false;
        const payload = action.payload as rejectedPayload | undefined;
        const errorMessage = payload?.message;
        toast.error(errorMessage);
      });


      //deleteTask-------

      builder.addCase(deleteTask.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(deleteTask.fulfilled, (state, action) => {
      
        console.log("redu-ji",action)
        state.loading = false;
        toast.success(action?.payload?.data?.message);
      });
      builder.addCase(deleteTask.rejected, (state, action) => {
        console.log("redu-addtask-err",action)

        state.loading = false;
        const payload = action.payload as rejectedPayload | undefined;
        const errorMessage = payload?.message;
        toast.error(errorMessage);
      });


      //updateTask---------

      builder.addCase(updateTask.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(updateTask.fulfilled, (state, action) => {
      
        console.log("redu-addtask",action)
        state.loading = false;
        toast.success(action?.payload?.data?.message);
      });
      builder.addCase(updateTask.rejected, (state, action) => {
        console.log("redu-addtask-err",action)

        state.loading = false;
        const payload = action.payload as rejectedPayload | undefined;
        const errorMessage = payload?.message;
        toast.error(errorMessage);
      });

    //EmployeeChangePassword-----------------

    builder.addCase(EmployeeChangePassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(EmployeeChangePassword.fulfilled, (state, action) => {
    
      console.log("redu-employeecahngepassword",action)
      state.loading = false;
      toast.success(action?.payload?.data?.message);
    });
    builder.addCase(EmployeeChangePassword.rejected, (state, action) => {
      console.log("redu-addtask-err",action)

      state.loading = false;
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
    });
  
  },
});

export default EmployeeSlice.reducer;
