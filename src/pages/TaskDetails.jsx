import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = useSelector((state) => 
    state.tasks.tasks.find((task) => task.id === Number(id))
  );

  if (!task) {
    return (
      <Box className="flex justify-center items-center min-h-screen bg-[#172842] text-white p-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Typography variant="h5" color="error" className="text-xl font-semibold">
          Task not found.
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/')} 
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Go Back to Tasks
        </Button>
      </Box>
    );
  }

  return (
    <Box className="min-h-screen flex justify-center items-center bg-[#172842] p-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Card className="max-w-2xl w-full bg-white shadow-xl rounded-lg">
        <CardContent className="p-6">
          <Typography variant="h4" className="text-3xl font-bold text-gray-800 mb-4">
            {task.title}
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-4" style={{ lineHeight: '1.6' }}>
            {task.description || 'No description provided.'}
          </Typography>
          <Typography variant="body2" className="text-sm text-gray-600 mb-2">
            Due Date: {task.dueDate || 'No due date'}
          </Typography>
          <Typography variant="body2" className="text-sm text-gray-600 mb-4">
            Status: 
            <span className={`font-semibold ${task.completed ? 'text-green-600' : 'text-yellow-600'}`}>
              {task.completed ? 'Completed' : 'Pending'}
            </span>
          </Typography>
        </CardContent>
        <Box className="mt-6 flex justify-end p-6">
          <Button 
            variant="outlined" 
            onClick={() => navigate('/')} 
            className="bg-blue-500 hover:bg-blue-600 hover:text-white text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Back to Tasks
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default TaskDetails;
