import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import { Container } from './styles';

const Task = props => {
  const { task, index } = props;

  const truncateString = (string, length = 100, ending = '...') => {
    if (string.length > length) {
      return string.substring(0, length - ending.length) + ending;
    }

    return string;
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {truncateString(task.content)}
        </Container>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
};

export default Task;
