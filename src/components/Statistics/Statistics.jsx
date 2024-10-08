import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  // Funcția pentru a genera o culoare aleatorie
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={styles.item} style={{ backgroundColor: getRandomColor() }}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string, // title is optional
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired, // id must be a string and is required
        label: PropTypes.string.isRequired, // label must be a string and is required
        percentage: PropTypes.number.isRequired, // percentage must be a number and is required
      })
    ).isRequired, // stats must be an array and is required
  };
  
  export default Statistics;