function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f7fb",
      fontFamily: "Arial, sans-serif",
      padding: "50px"
    }}>
      
      <div style={{
        maxWidth: "1000px",
        margin: "auto",
        textAlign: "center"
      }}>

        <h1 style={{
          fontSize: "42px",
          marginBottom: "10px"
        }}>
          DevOps CI/CD Pipeline
        </h1>

        <p style={{
          fontSize: "20px",
          color: "#555",
          marginBottom: "40px"
        }}>
          End-to-End Automation using Git
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "50px"
        }}>

          <div className="step">
            <h2>Git</h2>
            <p>Source Code</p>
          </div>

          <span>→</span>

          <div className="step">
            <h2>GitHub</h2>
            <p>Repository</p>
          </div>

          <span>→</span>

          <div className="step">
            <h2>Actions</h2>
            <p>CI Build</p>
          </div>

          <span>→</span>

          <div className="step">
            <h2>Slack</h2>
            <p>Notification</p>
          </div>

          <span>→</span>

          <div className="step">
            <h2>Vercel</h2>
            <p>Deployment</p>
          </div>

        </div>

        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
        }}>
          <h2>Pipeline Status</h2>

          <p style={{
            fontSize: "18px",
            color: "green",
            fontWeight: "bold"
          }}>
            ✓ Build Successful
          </p>

          <p style={{
            fontSize: "18px",
            color: "green",
            fontWeight: "bold"
          }}>
            ✓ Automated Deployment Ready
          </p>

          <p style={{
            fontSize: "18px",
            color: "green",
            fontWeight: "bold"
          }}>
            ✓ ChatOps Notifications Enabled
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
