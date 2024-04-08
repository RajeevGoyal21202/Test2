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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const QuestionCard = () => {
  return (
    <div>
      <Stack sx={{ m: 5 }}>

        <Card sx={{ width: "100%", height: "230px", border: "1px solid black" }}>
          <CardContent>
            <Stack >
              <Typography></Typography>
            </Stack>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Number off primitive data types in Java are?  </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="other2" control={<Radio />} label="2" />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      </Stack>

    </div>
  )
}

export default QuestionCard
