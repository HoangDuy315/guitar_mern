import "./Blog.css";
import avatar from "./avatar.jpg"

function Blog() {
  return (
    <div className="about">
      <div className="container1">
            <h1 className="title1">Member information</h1>
            <ul className="list-group">
                <li className="about-item">
                    <img className="about-avatar" src="https://upload-img-theta.vercel.app/hinhnen.jpg" alt="Avatar"/>
                    <h2 className="about-name">Bùi Đức Mạnh</h2>
                    <p className="about-desc">19521822</p>
                    <p className="about-role">Member</p>
                </li>
                <li className="about-item">
                    <img className="about-avatar-leader" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/70615256_2447394002164828_1028188705073922048_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=k05fwvwVxgYAX8nxBF9&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBMMRuvfwjSMI8OeUVNw9lV9FOk8o5GhjJc6ex71gU-sQ&oe=63CBC938" alt="Avatar"/>
                    <h2 className="about-name">Lường Tiến Thuận Hải</h2>
                    <p className="about-desc">19521462</p>
                    <p className="about-role-leader">Leader</p>
                </li>
                <li className="about-item">
                    <img className="about-avatar" src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.6435-9/192277015_2966801990254649_1743026157593445143_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=btsieHd6oNkAX80BUD2&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfBzSKt9pG5e51J9JxznANAdVeZvcWQBvHDMknbrgDczCQ&oe=63CB7D4F" alt="Avatar"/>
                    <h2 className="about-name">Nguyễn Hoàng Duy</h2>
                    <p className="about-desc">19521425</p>
                    <p className="about-role">Member</p>
                </li>
                <li className="about-item">
                    <img className="about-avatar" src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/273205795_3184501488497685_413369274076755631_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=jPX1cWAKGUwAX-4tw-R&tn=0XSJxjKQk1pklyR3&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfADzFzvuDf6Nt3Fyhjnm54V3Hit36hICfF2W2oNfaZJfg&oe=63A9A11B" alt="Avatar"/>
                    <h2 className="about-name">Nguyễn Hoàng long</h2>
                    <p className="about-desc">19521787</p>
                    <p className="about-role">Member</p>
                </li>

              </ul>
        </div>
    </div>
  );
}

export default Blog;
