import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { Button, Divider, Typography, Box, Paper } from '@mui/material';

const TaskDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="bg-[#172842] min-h-screen p-6 flex items-center justify-center">
      <Paper
        elevation={4}
        className="max-w-4xl w-full bg-[#3f4e64] rounded-lg p-6"
        sx={{backgroundColor: "#3f4e64", boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)' }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" color="white" fontWeight="bold">
            Task Management Dashboard
          </Typography>
          <Typography variant="subtitle1" color="#BCC5D3">
            Organize your tasks efficiently and stay on top of your schedule.
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mb={3}>
          <Button
            variant="contained"
            color={showForm ? 'error' : 'primary'}
            onClick={toggleForm}
            sx={{
              backgroundColor: showForm ? '#FF5252' : '#42A5F5',
              '&:hover': {
                backgroundColor: showForm ? '#FF1744' : '#2196F3',
              },
              textTransform: 'capitalize',
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '8px',
            }}
          >
            {showForm ? 'Cancel' : 'Add Task'}
          </Button>
        </Box>

        {showForm && (
          <Box mb={4}>
            <TaskForm />
          </Box>
        )}

        <Divider sx={{ backgroundColor: '#BCC5D3', marginY: 3 }} />
        <TaskList />
      </Paper>
    </div>
  );
};

export default TaskDashboard;
