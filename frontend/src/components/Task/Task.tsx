import React from 'react';

interface Props {
  id: number,
  task: string,
  status: string,
}

const Task: React.FC<Props> = ({ task, status }: Props) => {
  return(
    <div>
      <p>{ task }</p>
      <p>{ status }</p>
    </div>
  )
}

export default Task;