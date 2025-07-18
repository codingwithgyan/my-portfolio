import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import './WorkExperience.scss';
import { WORK_EXPERIENCE } from '../constants';

function InterviewVectorStepIcon(props) {
  return (
    <div className={props?.className}>
        <img src="/images/interviewvector.png" alt="InterviewVector Logo" className="interview-vector-logo" />
    </div>
  );
}


const WorkExperience = () => {
  return (
    <Box className="work-experience-main-container">
      <Box className="box-wrapper experience-wrapper">
        <Typography className="header-text">Experience</Typography>
        <Box className="experience-content-wrapper" mt="20px" ml="20px">
        
        {/* 1st Company - Interviewvector */}
          <Box className="experience-item">
             <Stepper  orientation="vertical">
                {WORK_EXPERIENCE?.map((companyDetail) => (
                <Step key={companyDetail?.label}>
                    <StepLabel StepIconComponent={InterviewVectorStepIcon}>
                        <Typography className="company-name">{companyDetail?.label}</Typography>
                        <Box display="flex" flexDirection="column">
                            <Typography className="job-title">{companyDetail.position}</Typography>
                            <Typography className="duration">{companyDetail.duration}</Typography>
                        </Box>
                    </StepLabel>
                    <StepContent>
                      
                        <Box className="experience-item-details">
                            <Box className="company-work-description-wrapper">
                                {
                                    companyDetail?.workDescription?.length > 0 && (
                                    <ul>
                                        {
                                            companyDetail?.workDescription?.map((item, index) => (
                                                <li key={index}>
                                                    <Typography className="work-description">{item}</Typography>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    )
                                }
                            </Box>
                        </Box>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
          </Box>

        {/* 2nd Company - Upcoming */}

        </Box>
      </Box>
    </Box>  
  )
};

export default WorkExperience;
