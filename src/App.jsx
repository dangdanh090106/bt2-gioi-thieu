
import './App.css'

function App() {
  const student = {
    name: 'Đặng Công Danh',
    className: '242101TH001',
    major: 'Công nghệ thông tin - Trí tuệ nhân tạo',
    school: 'Trường Đại học Bình Dương - Cà Mau',
    hobbies: ['Lập trình', 'Nghe nhạc', 'Chơi game'],
    github: 'https://github.com/'
  }

  return (
    <main className="container">
      <div className="profile-card">
        <div className="avatar">DD</div>

        <span className="tag">IT STUDENT • AI ENTHUSIAST</span>

        <h1>{student.name}</h1>
        <p className="subtitle">{student.major}</p>

        <div className="info">
          <p><strong>Trường:</strong> {student.school}</p>
          <p><strong>Lớp:</strong> {student.className}</p>
          <p><strong>Sở thích:</strong> {student.hobbies.join(', ')}</p>
        </div>

        <a
          href={student.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          Xem GitHub của tôi
        </a>

        <p className="footer">Built with React + Vite • BT2 COMP1305</p>
      </div>
    </main>
  )
}

export default App
