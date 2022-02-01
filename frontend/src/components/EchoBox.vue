<template>
    <div class="echoBox">
        <div class="status">{{ connection == null ? "Not created" : connection.state }}</div>
        <form @submit="send">
            <input type="text" v-model="newMessage" />
        </form>
        <div class="messages">
            <div v-for="(message, index) in messages" :key="`message-${index}`" :class="message.direction">{{ message.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EchoBox",
    data: () => ({
        connection: null,
        newMessage: "",
        messages: [],
    }),
    methods: {
        send(ev) {
            ev.preventDefault();

            this.messages.push({ direction: "sent", text: this.newMessage });
            this.connection.invoke("echo", this.newMessage);

            this.newMessage = "";
        }
    },
    async mounted() {
        const signalR = require("@microsoft/signalr");
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5205/game")
            .build();

        this.connection.on("echo", data => this.messages.push({ direction: "received", text: data }))

        await this.connection.start();
    }
}
</script>

<style>
.sent {
    color: blue;
}
.received {
    color: green;
}
</style>