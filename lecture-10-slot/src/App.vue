<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals v-if="selectedComponent === 'course-goals'">
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template>
    </course-goals>

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('another-goals')">Course Goals</button>
    <!-- Using v-if -->
    <!-- <another-goals v-if="selectedComponent === 'another-goals'"></another-goals>
    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->

    <!-- Using Dynamic Component -->
    <!-- <component :is="selectedComponent"></component> -->

    <!-- Without destroy the component -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import AnotherGoals from "./components/AnotherGoals.vue";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    AnotherGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Fin Mavis",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponent: "active-goals",
    };
  },
  methods: {
    setSelectedComponent: function (cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
