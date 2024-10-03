# Resume Viewer

This is a simple React application to view PDF resumes in multiple languages. You can dynamically switch between different languages and download the resume in your preferred language.

## Instructions to Fork and Run the Project

1. **Fork the Repository**:
   - First, fork this repository to your own GitHub account.

2. **Clone the Repository**:
   - Clone the forked repository to your local machine:
     ```bash
     git clone https://github.com/YOUR_USERNAME/resume.git
     cd resume
     ```

3. **Install Dependencies**:
   - Run the following command to install all required dependencies:
     ```bash
     npm install
     ```

4. **Modify the `languagesConfig` Object**:
   - Open `src/App.jsx` and modify the `languagesConfig` object to add or update languages. Here's an example of the configuration:
     ```javascript
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
         // Add new languages here...
     };
     ```

5. **Commit the Changes**:
   - After making changes, commit the updates to your forked repository:
     ```bash
     git add .
     git commit -m "feat: add new language"
     git push origin main
     ```

6. **Wait for GitHub Pages to Deploy**:
   - Once you push the changes, GitHub Pages will automatically deploy the new version. Wait a few minutes for the changes to reflect.

7. **View the Deployed App**:
   - Fire up a browser and go to `http://username.github.io/repository`. For example:
     ```
     https://YOUR_USERNAME.github.io/resume/
     ```

And you're done! Enjoy your multi-language resume viewer.