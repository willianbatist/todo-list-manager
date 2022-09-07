export interface Props {
  id: number,
  task: string,
  status: string,
  Url: string,
}

export interface PropsHeader {
  change(value: string): any;
  click(states: object): any;
  task: string;
}

export interface AuthContextData {
  writtenTask: string;
  setWrittenTask: any;
}

export interface ITask {
  id?: string;
  task: string;
  status: string;
}