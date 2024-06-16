<template>
	<div class="menu-wrapper">
		<button class="open-menu-button" @click="openMenu">
			 {{ $t('createVotePage.addParticipants') }}
		</button>

		<div v-if="isMenuOpen" class="overlay" @click="closeMenu">
			<div class="menu" @click.stop>
				<div class="menu-content">
					<div class="input-container">
						<input
							v-model="inputText"
							type="text"
							placeholder="Введите почту здесь"
							@keyup.enter="addUser"
						/>
						<button class="add-user-button" @click="addUser">
							<span class="mdi mdi-plus"></span>
						</button>
					</div>

					<div class="user-list">
						<div v-for="(user, index) in users" :key="index" class="user-card">
							<p>{{ user }}</p>
							<button class="remove-button" @click="removeUser(index)">
								Удалить
							</button>
						</div>
					</div>
				</div>

				<button class="done-button" @click="submit">Готово</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const isMenuOpen = ref(false)
const inputText = ref('')
const users = ref([])
const isSmallScreen = ref(window.innerWidth <= 600)

function openMenu() {
	isMenuOpen.value = true
}

function closeMenu() {
	isMenuOpen.value = false
}

function addUser() {
	if (validateEmail(inputText.value)) {
		users.value.push(inputText.value)
		inputText.value = ''
	} else {
		alert('Пожалуйста, введите корректный адрес электронной почты.')
	}
}

function removeUser(index) {
	users.value.splice(index, 1)
}

function submit() {
	store.commit('createVoteModule/setAttachedUsers', { users: users.value })
	closeMenu()
}

function validateEmail(email) {
	const re =
		/^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i
	return re.test(String(email).toLowerCase())
}

function handleResize() {
	isSmallScreen.value = window.innerWidth <= 600
}

onMounted(() => {
	window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.menu-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}

.open-menu-button {
	padding: 12px 0;
	width: 100%;
	background-color: var(--neutral-color);
	color: var(--black-color);
	box-shadow: 0 4px 6px var(--shadow-color);
	border: none;
	border-radius: 12px;
	cursor: pointer;
}

.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}

.menu {
	background: white;
	width: 600px;
	max-width: 100%;
	height: 800px;
	max-height: 100%;
	box-shadow: 0 2px 10px var(--shadow-color);
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
	overflow: hidden;
	border-radius: 12px;
}

.menu-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: calc(100% - 60px);
	overflow-y: auto;
}

.input-container {
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;
	position: relative;
}

input {
	flex: 1;
	padding: 10px;
	font-size: 16px;
	border-radius: 20px;
	border: 2px solid var(--additional-color__30);
	box-sizing: border-box;
}

.add-user-button {
	padding: 0;
	background-color: var(--accent-color);
	color: white;
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	font-size: 24px;
	line-height: 36px;
	margin-left: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	.mdi {
		color: var(--main-color);
	}
}

.user-list {
	width: 100%;
	max-height: calc(100% - 80px);
	overflow-y: auto;
	padding: 10px 0;
	box-sizing: border-box;
}

.user-card {
	background: var(--neutral-color);
	border-radius: 20px;
	padding: 10px;
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - 20px);
	box-sizing: border-box;
}

.remove-button {
	background-color: #dc3545;
	color: white;
	border: none;
	border-radius: 20px;
	padding: 8px 12px;
	cursor: pointer;
}

.done-button {
	padding: 10px 40px;
	background-color: var(--accent-color);
	box-shadow: 0 2px 10px var(--shadow-color);
	color: var(--main-color);
	border: none;
	border-radius: 5px;
	cursor: pointer;
	position: absolute;
	bottom: 32px;
	left: 50%;
	transform: translateX(-50%);
}

@media (max-width: 600px) {
	.menu {
		width: 100%;
		height: 100%;
	}

	.done-button {
		position: static;
		margin-top: auto;
		margin-bottom: 10px;
		transform: none;
		bottom: auto;
	}

	.close-menu-button {
		display: block;
	}
}
</style>
