import React, { useState } from 'react';
import Column from '../column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import initialData from '../../assets/initial-data';

import { Container } from './styles';

const Board = () => {
  const [dndData, setdndData] = useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(dndData.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...dndData,
        columnOrder: newColumnOrder,
      };
      setdndData(newState);
      return;
    }

    const start = dndData.columns[source.droppableId];
    const finish = dndData.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...dndData,
        columns: {
          ...dndData.columns,
          [newColumn.id]: newColumn,
        },
      };

      setdndData(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...dndData,
      columns: {
        ...dndData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setdndData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {provided => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {dndData.columnOrder.map((columnId, index) => {
              const column = dndData.columns[columnId];
              const tasks = column.taskIds.map(taskId => dndData.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks} index={index} />;
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

Board.propTypes = {};

export default Board;
