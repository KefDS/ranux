import React from 'react';
import { string, arrayOf, shape, func } from 'prop-types';

export default class TagSelection extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(evt) {
    this.props.getSelectedTags(
      [...evt.target.options].reduce(
        (acc, option) => (option.selected ? [...acc, option.value] : acc),
        [],
      ),
    );
  }

  render() {
    const { tags, selectedTagsIds } = this.props;
    return (
      <select multiple onChange={ this.handleOnChange }>
        {tags.map(
          tag =>
            (selectedTagsIds.includes(tag.id)
              ? <option selected value={ tag.id }>{tag.title}</option>
              : <option value={ tag.id }>{tag.title}</option>),
        )}
      </select>
    );
  }
}

TagSelection.propTypes = {
  tags: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
    }),
  ),
  selectedTagsIds: arrayOf(string),
  getSelectedTags: func.isRequired,
};

TagSelection.defaultProps = {
  tags: [],
  selectedTagsIds: [],
};
