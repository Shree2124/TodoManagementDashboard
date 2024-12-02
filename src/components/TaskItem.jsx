import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, markTaskCompleted } from "../redux/taskSlice";
import { Info as InfoIcon, Check as CheckIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Card, CardContent, Typography, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const handleViewDetails = () => {
    navigate(`/tasks/${task.id}`);
  };

  const handleMarkCompleted = () => {
    dispatch(markTaskCompleted(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setOpenModal(false); 
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Card
        sx={{
          marginBottom: 2,
          backgroundColor: task.completed ? "#2E7D32" : "#455368",
          color: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          fontFamily: "'Poppins', sans-serif",
        }}
        className="transition-transform transform"
      >
        <CardContent sx={{display: {
          lg: "flex",
          md: "block"
        },
        justifyContent: "space-between"
        }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textDecoration: task.completed ? "line-through" : "none",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {task.title}
          </Typography>

          <ButtonGroup
            sx={{
              gap: "1rem",
            }}
          >
            <Button
              variant="text"
              color="info"
              onClick={handleViewDetails}
              sx={{
                color: "white",
                textTransform: "none",
                fontFamily: "'Poppins', sans-serif",
              }}
              startIcon={<InfoIcon />}
            >
              Show Details
            </Button>
            {!task.completed && (
              <Button
                variant="contained"
                color="success"
                onClick={handleMarkCompleted}
                sx={{
                  textTransform: "none",
                  fontFamily: "'Poppins', sans-serif",
                }}
                startIcon={<CheckIcon />}
              >
                Mark as Completed
              </Button>
            )}
            <Button
              variant="outlined"
              color="error"
              onClick={handleOpenModal}
              className="hover:bg-red-500 hover:text-white"
              sx={{
                textTransform: "none",
                fontFamily: "'Poppins', sans-serif",
              }}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>


      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this task? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="secondary"
            variant="contained"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskItem;
