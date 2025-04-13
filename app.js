// App.js
import './style.css';

function App() {
  return (
    <div className="resume">
      <h1>Lakshmi Sahithi P</h1>
      <p>2nd Year B.Tech, Information & Technology</p>
      <p>BVRIT Hyderabad College of Engineering for Women</p>
      <p>Phone: +91 – 9100180208 | Email: 23wh1a1239@bvrithyderabad.edu.in</p>
      <p>Address: Hyderabad</p>

      <h2>Education</h2>
      <ul>
        <li><strong>2023–2027:</strong> B.Tech, IT – BVRIT for Women – CGPA: 8.58/10</li>
        <li><strong>2023:</strong> 12th – State Board – 97.6%</li>
        <li><strong>2021:</strong> 10th – CBSE – 94%</li>
      </ul>

      <h2>Internships & Trainings</h2>
      <ul>
        <li>
          <strong>Jul’24 – Data Science Intern, LnT (Epic 3 Pvt Ltd.), Chennai:</strong>
          <br />Developed an incident severity classifier using ML on AMTL Toll Plaza accident data.
          <br />Applied CRISP-DM; built API-connected frontend using a Random Forest model.
        </li>
        <li>
          <strong>Dec’24 – Google Gen AI Virtual Internship:</strong>
          <br />Hands-on with Gen AI tools and models (PaLM 2), prompt engineering, ethical AI, and responsible practices.
        </li>
      </ul>

      <h2>Academic Projects</h2>
      <p>
        <strong>MLOps – B.Tech Project (Apr’25):</strong>
        <br />Built a web scraping pipeline using SeleniumBase to collect and analyze ML course data from Udemy.
        <br />Trained regression/classification models to predict course price and success metrics.
        <br />Visualized data via GColab using heat maps and regression analysis.
      </p>

      <h2>Technical Skills</h2>
      <ul>
        <li><strong>Languages:</strong> C, Python (Basics), Java</li>
        <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript, MySQL</li>
      </ul>

      <h2>Certificates</h2>
      <ul>
        <li>Semiconductor Fabrication – Purdue University</li>
        <li>Energy Literacy – Energy Swaraj Foundation</li>
        <li>Failathon, IITH BVR SCIENT Entrepreneurship</li>
        <li>MS Excel – EDUCBA</li>
        <li>Julia – Infosys</li>
        <li>Python (Basic) – HackerRank</li>
        <li>Demux Hackathon</li>
        <li>Power BI & Data Visualization</li>
        <li>Innovation Day</li>
      </ul>

      <h2>Paper Presentations</h2>
      <ul>
        <li>Infinite Insights: Ramanujan's Mathematical Odyssey in the 21st Century</li>
        <li>Effects of Pharma Industries on Groundwater</li>
      </ul>

      <h2>Hobbies</h2>
      <p>Reading novels, numismatics, singing, dancing</p>
    </div>
  );
}

export default App;