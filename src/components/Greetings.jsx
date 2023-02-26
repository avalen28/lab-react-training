const Greetings = (props) => {
  const { children, lang } = props;
  const checkLanguage = () => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return "Don't know your language";
    }
  };
  return (
    <div className="card">
      {checkLanguage()} {children}
    </div>
  );
};
export default Greetings;
