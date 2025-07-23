function Download() {
  const downloadLink = "https://drive.google.com/drive/folders/1FACQveXsRyXyQEBBldsm51jt62yb9opY?usp=sharing"; // Replace with actual link

  return (
    <div className="container">
      <h1>LumiSub</h1>
      <img src="/logo.png" alt="logo" className="logoImage"/>
      <p>Real-time speech translation with subtitles. Download the desktop app now!</p>
      <a className="download-button" href={downloadLink} download>
        ⬇ Download App (ZIP)
      </a>
    </div>
  );
}

export default Download;