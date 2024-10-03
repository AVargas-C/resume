import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Box, Typography, IconButton, ThemeProvider, useMediaQuery } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { Icon } from '@iconify/react';
import theme from './theme'; // Import the theme

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
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const currentLanguageData = languagesConfig[selectedLanguage];

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
    };

    // Media query to check for smartphone size
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <div>
                {isMobile ? (
                    <>
                        {/* First topbar: Name and Title */}
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '8px 16px',
                                backgroundColor: theme.palette.background.default,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                position: 'fixed',
                                top: 0,
                                zIndex: 1000,
                            }}
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h1" sx={{ fontSize: '20px', margin: 0 }}>
                                    {currentLanguageData.name}
                                </Typography>
                                <Typography variant="h2" sx={{ fontSize: '16px', margin: 0 }}>
                                    {currentLanguageData.title}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Second topbar: Language buttons and Download icon */}
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
                                top: '56px',
                                zIndex: 1000,
                            }}
                        >
                            {/* Language Flags */}
                            <Box sx={{ display: 'flex', gap: '8px' }}>
                                {Object.keys(languagesConfig).map((lang) => (
                                    <IconButton
                                        key={lang}
                                        onClick={() => handleLanguageChange(lang)}
                                        sx={{
                                            border: selectedLanguage === lang ? '2px solid blue' : 'none',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <Icon icon={languagesConfig[lang].icon} width="32" />
                                    </IconButton>
                                ))}
                            </Box>

                            {/* Download Button */}
                            <Box>
                                <IconButton
                                    color="secondary"
                                    href={currentLanguageData.pdfPath}
                                    download={currentLanguageData.downloadFileName}
                                >
                                    <DownloadIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </>
                ) : (
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
                        {/* Language Flags */}
                        <Box sx={{ display: 'flex', gap: '8px' }}>
                            {Object.keys(languagesConfig).map((lang) => (
                                <IconButton
                                    key={lang}
                                    onClick={() => handleLanguageChange(lang)}
                                    sx={{
                                        border: selectedLanguage === lang ? '2px solid blue' : 'none',
                                        borderRadius: '50%',
                                    }}
                                >
                                        <Icon icon={languagesConfig[lang].icon} width="32" />
                                    </IconButton>
                                ))}
                        </Box>

                        {/* Name and Title */}
                        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                            <Typography variant="h1" sx={{ fontSize: '24px', margin: 0 }}>
                                {currentLanguageData.name}
                            </Typography>
                            <Typography variant="h2" sx={{ fontSize: '18px', margin: 0 }}>
                                {currentLanguageData.title}
                            </Typography>
                        </Box>

                        {/* Download Button */}
                        <Box sx={{ marginLeft: 'auto', paddingRight: '16px' }}>
                            <IconButton
                                color="secondary"
                                href={currentLanguageData.pdfPath}
                                download={currentLanguageData.downloadFileName}
                            >
                                <DownloadIcon />
                            </IconButton>
                        </Box>
                    </Box>
                )}

                {/* PDF Viewer with margin-top for mobile */}
                <Box sx={{ paddingTop: isMobile ? '112px' : '80px' }}> {/* Adjust padding for mobile */}
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