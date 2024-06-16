<template>
  <div class="container">
    <SearchUser />

    <div class="users">
      <UserItem v-for="({name}, index) in users" :key="index" :name="name" />
    </div>
  </div>
</template>

<script setup>
import UserItem from '@/components/list-users/user-item.vue'
import SearchUser from '@/components/list-users/search-user.vue'
import { ref } from 'vue'

const users = ref([
  {
    name: "John 0"
  },
  {
    name: "Jane 1"
  },
  {
    name: "Jane 2"
  },
  {
    name: "Jane 1"
  },
  {
    name: "Jane 2"
  },
  {
    name: "Jane 1"
  },
  {
    name: "Jane 2"
  },
  {
    name: "Jane 1"
  },
  {
    name: "Jane 2"
  },
  {
    name: "Jane 1"
  },
  {
    name: "Jane 2"
  },
  {
    name: "Jane 1"
  },
  {
    name: "Jane 2"
  },
  {
    name: "Jane 1"
  },
  {
    name: "Jane 2"
  }
])
</script>

<style scoped lang="scss">
.container {
  width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .users {
    width: 100%;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 25px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
}

@media screen and (max-width: 1000px) {
  .container {
    width: 100%;

    .vote-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
@media screen and (max-width: 800px) {
  .container {
    .users {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    .users {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 400px) {
  .container {
    .users {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
