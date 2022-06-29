import PropTypes from 'prop-types';
import { OprionList, Optionbtn } from './feedbackOptions.styled';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <OprionList>
      {options.map(option => {
        return (
          <li key={option}>
            <Optionbtn onClick={() => onLeaveFeedback(option)}>
              {option}
            </Optionbtn>
          </li>
        );
      })}
    </OprionList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
