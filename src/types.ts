export type Message = {
  id: number;
  text: string;
  canDelete: boolean;
  btcAmount?: number;
  messageContent?: string | MessageContent[];
  messageType: string;
}

export type MessageContent = {
  source: string;
  amount: number;
}

export type State = {
  rate: number;
  messages: Message[];
}

export type ListItem = {
  id: number;
  text: string;
  canDelete: boolean;
  btcAmount?: number;
  messageContent?: string | MessageContent[];
  messageType: string;
  rate: number;
}
