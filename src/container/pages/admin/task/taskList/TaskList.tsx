import React from 'react'
import { TaskListController } from './TaskListController';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ComponentIndex from '../../../../../components/ComponentIndex';

const TaskList = () => {
    const { handleEdit, handleDelete, taskData, handleLogoutClick } = TaskListController();

    const dataWithSerialNumbers = taskData?.map((task: {}, index: number) => ({
        ...task,
        serialNumber: index + 1,
    }));

    const columns: GridColDef[] = [
        { field: 'serialNumber', headerName: 'ID', width: 70 },
        { field: 'emp_code', headerName: 'TASK CODE', width: 130 },
        { field: 'emp_name', headerName: 'TASK NAME', width: 150 },
        // { field: 'emp_email', headerName: 'EMP EMAIL ', width: 150 },
        // { field: 'emp_mobile', headerName: 'EMP MOBILE  ', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (<>
                    <ComponentIndex.Button onClick={() => handleEdit(params?.row)} color="success" variant="contained" fullWidth type="submit">
                        EDIT
                    </ComponentIndex.Button>&nbsp;&nbsp;&nbsp;
                    <ComponentIndex.Button onClick={() => handleDelete(params.row._id)} color="error" variant="contained" fullWidth type="submit">
                        DELETE
                    </ComponentIndex.Button>
                </>)
            }
        }
    ];
    const getRowId = (row: any) => row?._id;

    return (
        <>
            <ComponentIndex.Box className="back-btn"  >
                {/* <ComponentIndex.ArrowBackIcon  onClick={handleBack} /> */}
                <ComponentIndex.Link to="/admin/dashboard/add-task"><ComponentIndex.Button color="warning" variant='contained'>ADD TASK</ComponentIndex.Button></ComponentIndex.Link>

                {/* <ComponentIndex.Button color="warning" onClick={handleLogoutClick} variant='contained'>LOGOUT</ComponentIndex.Button> */}

            </ComponentIndex.Box>
            <ComponentIndex.Box className="list-outer">

                <ComponentIndex.Box className="list-inner-main-wrapper">

                    {taskData?.length === 0 ? (
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

export default TaskList