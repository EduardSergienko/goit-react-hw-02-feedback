import PropTypes from 'prop-types';

import { SectionTitle, SectionWrap } from './section.styled';

export function Section({ title, children }) {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
