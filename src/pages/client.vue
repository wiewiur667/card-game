<script lang="ts" setup>
import Peer from 'peerjs'
import QrScanner from 'qr-scanner'

const connectionId = ref('')
const scanner: HTMLVideoElement = ref(null)

let conn: Peer.DataConnection | undefined

const peer = new Peer(undefined, {
  debug: 2,
})

onMounted(async() => {
  console.log('qr', scanner)
  if (scanner.value) {
    console.log('qrScanner')
    const qrScanner = new QrScanner(scanner.value as HTMLVideoElement, (result: any) => console.log(result))
    qrScanner.start()

    try {
      const stream = await navigator.mediaDevices.getUserMedia(({
        audio: false,
        video: true,
      }))
      // const videoTracks = stream.getVideoTracks()
      // const track = videoTracks[0]
      // scanner.srcObject = stream
    }
    catch (e) {
      console.log(e)
    }
  }
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

function join(connectionId: string) {
  if (conn)
    conn.close()

  conn = peer.connect(connectionId, { reliable: true })

  conn.on('open', () => {
    if (conn)
      console.log('Connection opened, connected to:', conn.peer)
  })
}

function sendMessage() {
  conn?.send('Hello world')
}
</script>
<template>
  <div>
    <input v-model="connectionId" class="p-1 border rounded-md m-3" type="text" @keyup.enter="join(connectionId)">
    <button class="p-2 px-5 bg-blue-400 m-3 rounded-md" @click="sendMessage">
      send
    </button>
    <video ref="scanner" autoplay />
  </div>
</template>
