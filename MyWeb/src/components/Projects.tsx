import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Проект 1',
    description: 'Описание проекта 1',
    image: '/project1.jpg',
    link: '#'
  },
  {
    title: 'Проект 2',
    description: 'Описание проекта 2',
    image: '/project2.jpg',
    link: '#'
  },
  {
    title: 'Проект 3',
    description: 'Описание проекта 3',
    image: '/project3.jpg',
    link: '#'
  }
];

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Мои проекты
        </Typography>
        <Grid container spacing={4}>
          {projectData.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={project.link}>
                      Подробнее
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects; 