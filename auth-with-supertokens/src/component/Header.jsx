export default function Header(props) {
  const { onLogout } = props;
  return (
    <div className="header">
      <ul>
        <li>Home</li>
        <li className="logout" onClick={onLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
}
