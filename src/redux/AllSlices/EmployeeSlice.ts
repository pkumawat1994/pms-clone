
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { deleteEmployee } from "..";
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


   
  },
});

export default EmployeeSlice.reducer;
