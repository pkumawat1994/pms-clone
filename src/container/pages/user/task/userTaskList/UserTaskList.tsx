import React from 'react'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ComponentIndex from '../../../../../components/ComponentIndex';
import { UserTaskListController } from './UserTaskListController';

const UserTaskList = () => {
    const { handleEdit, handleDelete,handledTaskDetail, taskData, handleLogoutClick } = UserTaskListController();

    const dataWithSerialNumbers = taskData?.map((task: {}, index: number) => ({
        ...task,
        serialNumber: index + 1,
    }));
    console.log("taskData",taskData)

    const columns: GridColDef[] = [
        { field: 'serialNumber', headerName: 'ID', width: 70 },
        { field: 'taskCode', headerName: 'TASK CODE', width: 130 },
        { field: 'title', headerName: 'TASK NAME', width: 150 },
        { field: 'status', headerName: 'TASK STATUS', width: 150 },
        // { field: 'assignedBy.name', headerName: 'ASSIGN BY', width: 150 },
        {
            field: 'assignedBy',
            headerName: 'Assigned By',
            width: 150,
            renderCell: (params) =>
              {console.log("pat",params)
                return(<>

<span>{params.row.assignedBy && params.row.assignedBy.name}</span>

            </>)} 
         
          },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 350,
            renderCell: (params) => {
                return (<>
                    {/* <ComponentIndex.Button onClick={() => handleEdit(params?.row)} color="success" variant="contained" fullWidth type="submit">
                        EDIT
                    </ComponentIndex.Button>&nbsp;&nbsp;&nbsp;
                    <ComponentIndex.Button onClick={() => handleDelete(params?.id)} color="error" variant="contained" fullWidth type="submit">
                       <ComponentIndex.DeleteIcon/>
                    </ComponentIndex.Button>&nbsp;&nbsp;&nbsp; */}
                    <ComponentIndex.Button onClick={() => handledTaskDetail(params.row)} color="warning" variant="contained" fullWidth type="submit">
                    <ComponentIndex.RemoveRedEyeIcon/>&nbsp;&nbsp;VIEW TASK
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
                {/* <ComponentIndex.Link to="/admin/dashboard/add-task"><ComponentIndex.Button color="warning" variant='contained'>ADD TASK</ComponentIndex.Button></ComponentIndex.Link> */}

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

export default UserTaskList