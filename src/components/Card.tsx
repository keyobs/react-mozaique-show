import { CSSProperties } from 'react';

export const FrontCard = () => {
  const styles: Record<string, CSSProperties> = {
    container: {
      width: 220,
      height: 220,
      borderRadius: 10,
      backgroundColor: '#009ddd',
      boxShadow: 'rgb(0 0 0 / 13%) 0px 4px 31px',
    },
  };

  return (
    <div style={styles.container}>
      <div>Front Card</div>
      <div>bim</div>
    </div>
  );
};

export const BackCard = () => {
  const styles: Record<string, CSSProperties> = {
    container: {
      width: 'calc(220px - 40px)',
      height: 'calc(220px - 40px)',
      padding: 20,
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#02b6fe',
      boxShadow: 'rgb(0 0 0 / 13%) 0px 4px 31px',
    },
  };

  return (
    <div style={styles.container}>
      <div>Back Card</div>
      <div>hop hop</div>
    </div>
  );
};
