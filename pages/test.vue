<script setup lang="ts">
const client = useClient();
const createUser = async () => {
  console.log("creating user");
  const user = await client.mutation("user.createUser", {
    password: "potato",
    username: "PotatoHead",
  });
  console.log("user", user);
};

const getUsers = async () => {
  console.log("get users");
  const users = await client.query("user.getUsers");
  console.log("users", users);
};

// useAsyncData(async () => {
//   await getUsers();
// });
</script>
<template>
  <div>
    <h1>test</h1>
    <div>
      <button class="btn btn-accent" @click="createUser" type="button">
        create user
      </button>
      <button class="btn btn-accent" @click="getUsers" type="button">
        get users
      </button>
    </div>
  </div>
</template>
