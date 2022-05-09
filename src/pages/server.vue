<script lang="ts" setup>
import QrCodeVue from 'qrcode.vue'
import Peer from 'peerjs'

const connectionId = ref('')

const peer = new Peer(undefined, {
  debug: 2,
})

peer.on('open', (id) => {
  if (peer.id === null)
    peer.id = connectionId.value
  else
    connectionId.value = peer.id

  connectionId.value = id
})

peer.on('connection', (connection) => {
  console.log(connection)

  connection.on('data', (data) => {
    console.log('Data', data)
  })
})

peer.on('error', (err) => {
  console.log(err)
})
</script>
<template>
  <div>
    <QrCodeVue :value="connectionId" />
    <span>{{ connectionId }}</span>
  </div>
</template>
