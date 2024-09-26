import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const handleDownload = () => {
    if (window.gtag) {
      console.log('Google Analytics event triggered');
      window.gtag('event', 'download', {
        event_category: 'Resume',
        event_label: 'CV_English.pdf',
        value: 1,
      });
    } else {
      console.log('Google Analytics not loaded');
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Arturo Vargas Cuevas
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="/resume/CV_English.pdf"
        download="ArturoVargasCuevas_CV_English.pdf"
        onClick={handleDownload} // Call handleDownload on click
        sx={{ mt: 2 }}
      >
        Descargar CV en Inglés
      </Button>
    </Container>
  );
}

export default App;
