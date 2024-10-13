import React from 'react';
import { servicios } from '../data/servicioData';
import { Link } from 'react-router-dom';

export const Servicio = () => {
  console.log(servicios);

  // Estilos de las cards
  const styles = {
    container: {
      padding: '130px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '100px',
      flexWrap: 'wrap', // Permite que las tarjetas se envuelvan en múltiples filas
    },
    card: {
      width: '450px',
      height: '430px',
      perspective: '1000px', // Perspectiva para el efecto 3D
      margin: '90px', // Espaciado entre tarjetas
    },
    cardInner: {
      width: '130%',
      height: '100%',
      position: 'relative',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.999s',
    },
    cardFront: {
      backgroundColor: ' #2c6b6b', // Color de fondo frontal
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '10px solid  #2c6b6b',
      borderRadius: '10px',
      fontSize: '40px',
      backfaceVisibility: 'hidden',
      position: 'absolute',
      width: '100%',
      height: '100%',
      transform: 'rotateY(0deg)',
    },
    cardBack: {
      backgroundColor: '#Dcf2f2', // Color de fondo trasero
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '10px solid #Dcf2f2',
      borderRadius: '10px',
      fontSize: '24px',
      backfaceVisibility: 'hidden',
      position: 'absolute',
      width: '100%',
      height: '100%',
      transform: 'rotateY(180deg)',
    },
    link: {
      marginTop: '20px',
      display: 'inline-block',
      fontSize: '30px',
      color: '#fff', // Color del enlace
      textDecoration: 'none',
      border: '1px solid #fff',
      padding: '10px 15px',
      borderRadius: '8px',
      backgroundColor: '#2c6b6b', // Fondo del enlace igual al fondo frontal
      transition: 'background-color 0.3s ease',
    },
    cardHover: {
      backgroundColor: '#2c6b6b',
    },
  };

  return (
    <div style={styles.container}>
      {servicios.map(({ url, id, nombre }) => (
        <div
          key={id}
          style={styles.card}
          onMouseEnter={(e) => {
            const cardInner = e.currentTarget.querySelector('.card-inner');
            cardInner.style.transform = 'rotateY(180deg)';
          }}
          onMouseLeave={(e) => {
            const cardInner = e.currentTarget.querySelector('.card-inner');
            cardInner.style.transform = 'rotateY(0deg)';
          }}
        >
          <div className="card-inner" style={styles.cardInner}>
            <div className="card-front" style={styles.cardFront}>
              <span>{nombre}</span>
            </div>
            <div className="card-back" style={styles.cardBack}>
              <Link to={url} style={styles.link}>
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

