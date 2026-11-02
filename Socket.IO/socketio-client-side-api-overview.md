# Client-Side API Overview

The client-side Socket.IO API provides methods for:

-   `io()` --- Connects to the server
-   `socket.emit()` --- Sends an event to the server
-   `socket.on()` --- Listens for events from the server
-   `socket.disconnect()` --- Disconnects from the server

------------------------------------------------------------------------

## Socket.IO Events

Socket.IO uses an event-based architecture for communication. Here are
some key events:

### Built-in Events

-   `connect` --- Fired upon connection
-   `disconnect` --- Fired upon disconnection
-   `error` --- Fired upon an error
-   `reconnect` --- Fired upon successful reconnection
-   `reconnect_attempt` --- Fired upon a reconnection attempt
