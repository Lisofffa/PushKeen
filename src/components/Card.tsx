"use client";

import React, { FC, useState } from "react";
import styles from "./Card.module.scss";
import { ICard } from "@/interfaces";
import cn from "classnames";

interface IPropsCard {
  card: ICard;
}

const Card: FC<IPropsCard> = ({ card }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      role="button"
      onClick={handleClick}
      className={cn(styles.wrapper, isActive && styles["wrapper--active"])}
    >
      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.text}>{card.text}</p>
    </li>
  );
};

export default Card;
