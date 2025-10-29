import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Привет, я
          </Typography>
          <Typography variant="h2" component="h2" color="primary" gutterBottom>
            Веб-разработчик
          </Typography>
          <Typography variant="h5" component="p" color="textSecondary">
            Я создаю современные веб-приложения с использованием
            передовых технологий
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Hero; 