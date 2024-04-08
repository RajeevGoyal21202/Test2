import React from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import {useNavigate} from "react-router-dom"
const ExamCard = ({exam}) => {
    const navigate = useNavigate()
    console.log(exam._id) 

const handleAdd = ()=>{
    
    navigate("/addQuestion")

}
const handleView = ()=>{

    

    navigate("/viewQues")
    
}


  return (
    
        <Card  sx={{width:"300px",height:"300px",border:"1px solid black"}}>
            <CardContent>
                <Stack gap="20px">

                <Stack direction={"row"}>
                <Typography  fontSize={"15"} fontWeight={"600"}>Quiz Name: </Typography>
                <Typography fontSize={"15"}>{exam.name}</Typography>
                </Stack>
                <Stack direction={"row"}>
                <Typography  fontSize={"15"} fontWeight={"600"}>Category: </Typography>
                <Typography>{exam.category}</Typography>
                </Stack>
                <Stack direction={"row"}>
                <Typography  fontSize={"15"} fontWeight={"600"}>Duration :   </Typography>
                <Typography>{exam.duration} minutes</Typography>
                </Stack>
                <Stack direction={"row"}>
                <Typography  fontSize={"15"} fontWeight={"600"}>Total Marks: </Typography>
                <Typography>{exam.totalMarks}</Typography>
                </Stack>
                <Stack direction={"row"}>
                <Typography  fontSize={"15"} fontWeight={"600"}>Passing Marks: </Typography>
                <Typography>{exam.passingMarks}</Typography>
                </Stack>
                </Stack>
                <Stack direction={"row"}>

                <Button variant='contained' sx={{m:2}} onClick={handleAdd}>Add Ques</Button>
                <Button variant='contained' sx={{m:2}} onClick={handleView}>View Ques</Button>
                </Stack>
                
                
                
            </CardContent>
        </Card>
      
    
  )
}

export default ExamCard
