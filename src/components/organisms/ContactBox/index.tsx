import React from "react";
import styles from "./contactbox.module.css";

const ContactBox = () => {
  const telephone = Math.floor(Math.random() * 9000000000) + 1000000000;
  const email = `user${Math.floor(Math.random() * 10000)}@example.com`;

  return (
    <div className={styles.container}>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
        scelerisque enim. Donec mollis aliquam tellus, vel ullamcorper sapien
        ullamcorper eget. Integer sed purus vel lorem hendrerit sollicitudin
        vitae ut nunc. Suspendisse porttitor, elit ut malesuada sollicitudin,
        nibh nisl pellentesque lorem, eu sollicitudin nulla dui at dolor.
      </p>
      <div className={styles.contactDetails}>
        <p>Telephone: {telephone}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default ContactBox;