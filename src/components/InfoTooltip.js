import successIcon from '../images/success-icon.svg';
import unsuccessIcon from '../images/unsuccess-icon.svg';

const InfoTooltip = ({ isOpen, onClose, isSuccess }) => {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={onClose} />
        <img
          src={isSuccess ? successIcon : unsuccessIcon}
          alt={
            isSuccess ? 'Регистрация прошла успешно' : 'Ошибка регистрации'
          }
          className="popup__signup-icon"
        />
        <h3 className="popup__signup-title">
          {isSuccess
            ? 'Вы зарегистрированы!'
            : 'Ошибка! Попробуйте ещё раз.'}
        </h3>
      </div>
    </div>
  );
};

export default InfoTooltip;