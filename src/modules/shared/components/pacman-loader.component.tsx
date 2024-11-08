// Componente traido de la libreria react-spinners de davidhu2000
import * as React from "react";
import { createAnimation } from "../../core/animations/animations";

function PacmanLoader({ loading = true, color = "#f7c600", ballColor = "#ffb897",  speedMultiplier = 1, size = 25, margin = 2, ...additionalprops }): JSX.Element | null {
  size = parseInt(size + "");
  margin = parseInt(margin + "");

  const pacman = [
    createAnimation("PacmanLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(-44deg)}", "pacman-1"),
    createAnimation("PacmanLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(44deg)}", "pacman-2"),
  ];

  const wrapper: React.CSSProperties = {
    display: "inherit",
    position: "relative",
    fontSize: 0,
    height: `${ size * 2 }px`,
    width: `${ size * 2 }px`,
  };

  const ball = createAnimation(
    "PacmanLoader",
    `0% {opacity: 0} 75% {opacity: 1} 100% {transform: translate(${ `${-4 * size}px` }, ${ `${-size / 4}px` })}`,
    "ball"
  );

  const ballStyle = (i: number): React.CSSProperties => ({
    width: `${ size / 3 }px`,
    height: `${ size  / 3 }px`,
    backgroundColor: ballColor,
    margin: `${ margin }px`,
    borderRadius: "100%",
    transform: `translate(0, ${ `${ -size / 4 }px` })`,
    position: "absolute",
    top: `${ size }px`,
    left: `${ size  * 4 }px`,
    animation: `${ ball } ${ 1 / speedMultiplier }s ${ i * 0.25 }s infinite linear`,
    animationFillMode: "both",
  });

  const s1 = `${ size }px solid transparent`;
  const s2 = `${ size }px solid ${ color }`;

  const pacmanStyle = (i: number): React.CSSProperties => ({
    width: 0,
    height: 0,
    borderRight: s1,
    borderTop: i === 0 ? s1 : s2,
    borderLeft: s2,
    borderBottom: i === 0 ? s2 : s1,
    borderRadius: `${size}px`,
    position: "absolute",
    animation: `${ pacman[i] } ${ 0.8 / speedMultiplier }s infinite ease-in-out`,
    animationFillMode: "both",
  });

  
  const pac = pacmanStyle(0);
  const man = pacmanStyle(1);

  const back = pacmanStyle(0);
  delete back.animation;
  back.transform = "rotate(90deg)";

  if (!loading) return null;

  return (
    <span style={ wrapper } { ...additionalprops }>
      <span style={ballStyle(2)} />
      <span style={ballStyle(3)} />
      <span style={ballStyle(4)} />
      <span style={ballStyle(5)} />
      <span style={back} />
      <span style={pac} />
      <span style={man} />
    </span>
  );
}

export default PacmanLoader;