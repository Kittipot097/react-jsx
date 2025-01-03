import "./App.css";

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function IntroSection() {
  const articleStyles = {
    container: "article",
    title: "article-title",
    body: "article-body",
    link: "article-link"
  }

  return (
    <div className={articleStyles}>
      <h3 className={articleStyles.title}>TechUp Thailand</h3>
      <p className={articleStyles.body}>เตรียมพบกับหลักสูตรปั้นคุณเป็น Software Developer ภายใน 4 เดือน</p>
      <a  className={articleStyles.link}href="https://www.techupth.com/" target="blank">
        techupth.com
      </a>
      {/* ให้แสดงวันเวลาด้วย Function `getCurrentDateTime` ที่กำหนดไว้ให้ */}
    </div>
  );
}

function LoginForm() {
  return (
    <div class="login-container">
      <form class="login-form">
        <div className="bootcamp-start-time">วันเวลาเริ่มหลักสูตร คือ {getCurrentDateTime()} </div>
        <h2>Login</h2>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <IntroSection />
      <LoginForm />
    </div>
  );
}

export default App;
