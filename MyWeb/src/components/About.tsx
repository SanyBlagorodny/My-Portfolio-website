import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Обо мне
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Мой путь
              </Typography>
              <Typography>
                Я - веб-разработчик с страстью к созданию красивых и функциональных веб-приложений.
                Мой опыт включает работу с современными технологиями и фреймворками.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Технологии
              </Typography>
              <Typography>
                В своей работе я использую React, TypeScript, Node.js и другие современные
                инструменты для создания качественных веб-приложений.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About; 