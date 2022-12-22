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
                    <img className="about-avatar" src={avatar} alt="Avatar"/>
                    <h2 className="about-name">Lường Tiến Thuận Hải</h2>
                    <p className="about-desc">19521462</p>
                    <p className="about-role">Leader</p>
                </li>
                <li className="about-item">
                    <img className="about-avatar" src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.6435-9/192277015_2966801990254649_1743026157593445143_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=btsieHd6oNkAX80BUD2&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfBzSKt9pG5e51J9JxznANAdVeZvcWQBvHDMknbrgDczCQ&oe=63CB7D4F" alt="Avatar"/>
                    <h2 className="about-name">Nguyễn Hoàng Duy</h2>
                    <p className="about-desc">19521425</p>
                    <p className="about-role">Member</p>
                </li>
                <li className="about-item">
                    <img className="about-avatar" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/274179162_3199216190359548_4336456839941786998_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=njN5MYDmvOQAX8Qfyo2&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDvF2hqVIECFLbH-5XCkbBF_iPT9f20v9-D0w01PxX4uA&oe=63AA0D1E" alt="Avatar"/>
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
