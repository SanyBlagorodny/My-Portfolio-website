import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';

const AnimatedPaper = styled(motion(Paper))({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
  }
});

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'GraphQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Material-UI',
  'Redux',
  'Jest'
];

const experience = [
  {
    year: '2022 - Настоящее время',
    position: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    description: 'Разработка сложных веб-приложений с использованием React и TypeScript'
  },
  {
    year: '2020 - 2022',
    position: 'Frontend Developer',
    company: 'Digital Solutions LLC',
    description: 'Создание пользовательских интерфейсов и интеграция с бэкенд-сервисами'
  },
  {
    year: '2018 - 2020',
    position: 'Junior Web Developer',
    company: 'WebStart Agency',
    description: 'Верстка и разработка компонентов для клиентских проектов'
  }
];

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          textAlign="center"
          sx={{ 
            mb: 6,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2, #2196f3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Обо мне
        </Typography>
        
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <AnimatedPaper 
              elevation={3} 
              sx={{ 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Box display="flex" alignItems="center" mb={3}>
                <Avatar 
                  alt="Profile Photo" 
                  src="/images/profile.jpg" 
                  sx={{ width: 80, height: 80, mr: 3 }}
                />
                <Box>
                  <Typography variant="h5" component="h3" fontWeight={600}>
                    Александр Селиверстов
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Frontend Developer
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="body1" paragraph>
                Я - фронтенд разработчик с более чем 5-летним опытом создания современных веб-приложений.
                Специализируюсь на React-экосистеме и TypeScript.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Моя цель - создавать не только функциональные, но и визуально привлекательные интерфейсы,
                которые обеспечивают безупречный пользовательский опыт.
              </Typography>
              
              <Box mt="auto">
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Ключевые навыки:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {skills.map((skill, idx) => (
                    <Chip 
                      key={skill + idx} 
                      label={skill} 
                      color="primary"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Box>
            </AnimatedPaper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <AnimatedPaper 
              elevation={3} 
              sx={{ p: 3, height: '100%' }}
              whileHover={{ scale: 1.02 }}
            >
              <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                Опыт работы
              </Typography>
              
              <Timeline position="alternate" sx={{ mt: 0 }}>
                {experience.map((exp, index) => (
                  <TimelineItem key={exp.company + exp.year}>
                    <TimelineOppositeContent color="text.secondary">
                      {exp.year}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      {index < experience.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {exp.position}
                        </Typography>
                        <Typography variant="subtitle2" color="primary">
                          {exp.company}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {exp.description}
                        </Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </AnimatedPaper>
          </Grid>
        </Grid>
        
        <Box mt={6}>
          <AnimatedPaper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
              Образование
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} key="university">
                <Box display="flex" alignItems="center">
                  <Avatar 
                    alt="University Logo" 
                    src="/images/university-logo.png" 
                    sx={{ width: 60, height: 60, mr: 3 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Московский Технический Университет
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Компьютерные науки, 2013-2017
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6} key="course">
                <Box display="flex" alignItems="center">
                  <Avatar 
                    alt="Course Logo" 
                    src="/images/course-logo.png" 
                    sx={{ width: 60, height: 60, mr: 3 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Advanced React (Udemy)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Сертификат, 2020
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </AnimatedPaper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About;