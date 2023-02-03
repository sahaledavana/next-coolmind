//carousels/Bootstrap.js
import { useState } from "react";
import { items } from "../public/Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import styles from "../styles/Bootstrap.module.css";
import styles from "../node_modules/bootstrap/dist/css/bootstrap.css";
import CarsolStyle from "../styles/carsol.module.css";
import Image from "next/image";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <Image className = {CarsolStyle.carsol} src={item.imageUrl}  width={800} height={100} />
          <Carousel.Caption className={styles.caption}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
           </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}