import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
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
        href="./public/CV_English.pdf" // Link to your PDF file in the public folder
        download="ArturoVargasCuevas_CV_English.pdf" // Trigger download with a specific file name
        sx={{ mt: 2 }}
      >
        Descargar CV en Inglés
      </Button>
    </Container>
  );
}

export default App;
