

const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
     
      <a className="icon" style={styles.icon} href="http://linkedin.com/in/brijesh-chauhan-733319197">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Brijesh Kumar Chauhan' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://github.com/brijeshchauhan12">
      <i className="fa-brands fa-github" aria-hidden="true" title="Brijesh Kumar Chauhan' GitHub Profile"></i>
    </a>
      
    </div>
  );
};

export default SocialIcons;
