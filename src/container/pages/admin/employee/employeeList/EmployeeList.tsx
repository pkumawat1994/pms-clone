import { DataGrid, GridColDef } from '@mui/x-data-grid';
import "./EmployeeList.css"
import { EmployeeListController } from './EmployeeListController';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/rootReducer';
import ComponentIndex from '../../../../../components/ComponentIndex';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const userToken = useSelector((state: RootState) => state);
    console.log(userToken,"staee")

    const { handleEdit, handleDelete, employeeData ,handleLogoutClick} = EmployeeListController();

    const dataWithSerialNumbers = employeeData?.map((employee:any, index) => ({
        ...employee,
        serialNumber: index + 1,
    }));

    const columns: GridColDef[] = [
        { field: 'serialNumber', headerName: 'ID', width: 70 },
        { field: 'emp_code', headerName: 'EMP CODE', width: 130 },
        { field: 'emp_name', headerName: 'EMP NAME', width: 150 },
        { field: 'emp_email', headerName: 'EMP EMAIL ', width: 150 },
        { field: 'emp_phoneNumber', headerName: 'EMP MOBILE  ', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (<>
                    {/* <ComponentIndex.Button onClick={() => handleEdit(params?.row)} color="success" variant="contained" fullWidth type="submit">
                        EDIT
                    </ComponentIndex.Button>&nbsp;&nbsp;&nbsp; */}
                    <ComponentIndex.Button onClick={() => handleDelete(params?.row?._id)} color="error" variant="contained" fullWidth type="submit">
                        DELETE
                    </ComponentIndex.Button>
                </>)
            }
        }
    ];

 
    const getRowId = (row: any) => row?._id;

    return (<>
         
     
      
        <ComponentIndex.Box className="back-btn"  >
                {/* <ComponentIndex.ArrowBackIcon  onClick={handleBack} /> */}
                    <Link to="/admin/dashboard/add-employee"><ComponentIndex.Button color="warning"  variant='contained'>ADD EMPLOYEE</ComponentIndex.Button></Link>
              
                    {/* <ComponentIndex.Button color="warning" onClick={handleLogoutClick} variant='contained'>LOGOUT</ComponentIndex.Button> */}

            </ComponentIndex.Box>
            <ComponentIndex.Box className="list-outer">
      
                <ComponentIndex.Box className="list-inner-main-wrapper">

                {employeeData?.length === 0 ? (
                        <p className='not-found'>No records found</p>
                    ) : (
                        <DataGrid
                            getRowId={getRowId}
                            rows={dataWithSerialNumbers}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 8 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                    )}
                    {/* {employeeData.length === 0 && <p>No records found</p>} */}
                </ComponentIndex.Box>
            </ComponentIndex.Box>

      

    </>
    )
}

export default EmployeeList