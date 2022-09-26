export interface MessageAction {
  text?: string;
  handler: Function;
}
export interface Message {
  duration?: number;
  text?: string;
  action?: MessageAction;
  timeoutID?: any;
}

export const useNotifcationStore = defineStore("notificationStore", () => {
  const messages = ref<Message[]>([]);
  const defaultAction: MessageAction = {
    text: "",
    handler: (message: Message) => {
      clearTimeout(message.timeoutID);
    },
  };
  const addMessage = (message: Message) => {
    const defaultMessage = { duration: 4000, action: defaultAction };
    message = { ...defaultMessage, ...message };
    message.timeoutID = setTimeout(() => {
      messages.value.splice(
        messages.value.findIndex((m) => m.timeoutID === message.timeoutID),
        1
      );
    }, message.duration);
    messages.value.push(message);
  };

  return {
    messages,
    addMessage,
    defaultAction,
  };
});
