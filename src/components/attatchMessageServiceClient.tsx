import React from 'react';
import { MessageServiceClient } from '../proto/MessageService_pb_service';

export type MessageServiceClientAttached = {
  client: MessageServiceClient;
};

const client = new MessageServiceClient(`https://34.84.218.136`);

const attachMessageServiceClient = <P extends {}>(
  WrappedComponent: React.ComponentType<P & MessageServiceClientAttached>
) =>
  class MessageServiceAttached extends React.Component<P> {
    render() {
      return <WrappedComponent {...this.props} client={client} />;
    }
  };

export default attachMessageServiceClient;
