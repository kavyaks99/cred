import styles from "./navbar.module.scss";
import CredIcon from "@/assets/icons/cred";
import Toggle from "@/assets/icons/toggle";
function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navbar_container}>
          <li className={styles.cred_logo}>
            <CredIcon />
          </li>
          <li>
            <button className={styles.btn_toggle}>
              <Toggle />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
