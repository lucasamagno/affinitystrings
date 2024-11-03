<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const audio = ref(null)
const isPlaying = ref(false)
const progress = ref(0)
const currentTime = ref(0)
const duration = ref(0)

const togglePlayPause = () => {
    if (isPlaying.value) {
        audio.value.pause()
    } else {
        audio.value.play()
    }
    isPlaying.value = !isPlaying.value
}

const updateProgress = () => {
    currentTime.value = audio.value.currentTime
    duration.value = audio.value.duration
    progress.value = (currentTime.value / duration.value) * 100
}

const resetPlayer = () => {
    isPlaying.value = false
    currentTime.value = 0
    progress.value = 0
}

const seek = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const clickX = event.clientX - rect.left
    const newTime = (clickX / rect.width) * audio.value.duration
    audio.value.currentTime = newTime
}

onMounted(() => {
    audio.value.addEventListener('loadedmetadata', () => {
        duration.value = audio.value.duration
    })
})

onUnmounted(() => {
    audio.value.remoteEventListener('timeupdate', updateProgress)
})
</script>

<template>
    <div class="audio-player">
        <h3>{{ title }}</h3>
        <audio ref="audio" :src="src" @timeupdate="updateProgress" @ended="resetPlayer"></audio>
    </div>

    <button @click="togglePlayPause">
        {{ isPlaying ? 'Pause' : 'Play' }}
    </button>

    <div class="progress-bar" @click="seek">
        <div class="progress" :style="{ width: `${progress}%` }"></div>
    </div>

</template>

<style scoped>
.audio-player {
    display: flex;
    align-items: center;
    gap: 10px;
}

.progress-bar {
    width: 100%;
    height: 5px;
    background-color: #ccc;
    cursor: pointer;
    position: relative;
}

.progress {
    height: 100%;
    background-color: #007bff;
    transition: width 0.1s ease;
}
</style>
