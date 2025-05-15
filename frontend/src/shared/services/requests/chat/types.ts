export interface IMessage {
  id: string;
  content: string;
  role: string;
};

export interface ISendMessage {
  message: string;
}