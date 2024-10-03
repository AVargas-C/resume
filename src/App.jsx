import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Box, Typography, IconButton, ThemeProvider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { Icon } from '@iconify/react';
import theme from './theme';

// Configuration object for languages
const languagesConfig = {
    en: {
        name: 'Arturo Vargas Cuevas',
        title: 'Electronics Engineer',
        downloadFileName: 'ArturoVargasCuevas_en.pdf',
        pdfPath: '/resume/CV_English.pdf',
        icon: 'twemoji:flag-for-united-states',
    },
    es: {
        name: 'Arturo Vargas Cuevas',
        title: 'Ingeniero en Electrónica',
        downloadFileName: 'ArturoVargasCuevas_es.pdf',
        pdfPath: '/resume/CV_Spanish.pdf',
        icon: 'twemoji:flag-for-mexico',
    },
    de: {
        name: 'Arturo Vargas Cuevas',
        title: 'Elektronikingenieur',
        downloadFileName: 'ArturoVargasCuevas_de.pdf',
        pdfPath: '/resume/CV_German.pdf',
        icon: 'twemoji:flag-for-germany',
    },
};







const App = () => {
    // State to handle the current language, default to English (en)
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const currentLanguageData = languagesConfig[selectedLanguage];
    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                {/* Topbar */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 16px',
                        backgroundColor: theme.palette.background.default,
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                        position: 'fixed',
                        top: 0,
                        zIndex: 1000,
                        boxSizing: 'border-box',
                    }}
                >
                    {/* Left corner - Language flags */}
                    <Box sx={{ display: 'flex', gap: '8px' }}>
                        {Object.keys(languagesConfig).map((lang) => (
                            <IconButton
                                key={lang}
                                onClick={() => handleLanguageChange(lang)}
                                sx={{
                                    border: selectedLanguage === lang ? '2px solid #1976d2' : 'none',
                                    backgroundColor: selectedLanguage === lang ? '#e3f2fd' : 'transparent',
                                    borderRadius: '50%',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <Icon icon={languagesConfig[lang].icon} width="32" />
                            </IconButton>
                        ))}
                    </Box>

                    {/* Center - Name and title */}
                    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <Typography variant="h1" sx={{ fontSize: '24px', margin: 0 }}>
                            {currentLanguageData.name}
                        </Typography>
                        <Typography variant="h2" sx={{ fontSize: '18px', margin: 0 }}>
                            {currentLanguageData.title}
                        </Typography>
                    </Box>

                    {/* Right corner - Download icon */}
                    <Box sx={{ marginLeft: 'auto' }}>
                        <IconButton
                            color="secondary"
                            href={currentLanguageData.pdfPath}
                            download={currentLanguageData.downloadFileName}
                        >
                            <DownloadIcon />
                        </IconButton>
                    </Box>
                </Box>

                {/* PDF Viewer */}
                <Box sx={{ paddingTop: '80px' }}> {/* Add padding to account for the fixed topbar */}
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                height: '750px',
                                width: '100%',
                                maxWidth: '800px',
                                margin: 'auto',
                            }}
                        >
                            <Viewer fileUrl={currentLanguageData.pdfPath} />
                        </div>
                    </Worker>
                </Box>
            </div>
        </ThemeProvider>
    );
};

export default App;