<template>
  <base-card>
    <base-button
      @click="setSelectedTab('resource-list')"
      :mode="resourceListButtonMode"
      >Resorce List</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResourceButtonMode"
      >Add Resouce</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import ResourceList from "./ResourceList.vue";
import AddResource from "./AddResource.vue";
export default {
  components: { ResourceList, AddResource },
  data() {
    return {
      selectedTab: "resource-list",
      resources: [
        {
          id: "1",
          title: "Official Guide",
          description: "The official vuejs documentation",
          link: "https://vuejs.org",
        },
        {
          id: "2",
          title: "Google",
          description: "Learn to google",
          link: "https://google.com",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      deleteResource: this.handleDelete,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link: url,
      };
      this.resources.unshift(newResource);
      this.setSelectedTab("resource-list");
    },
    handleDelete: function (id) {
      const index = this.resources.findIndex((resource) => resource.id === id);
      this.resources.splice(index, 1);
    },
  },
  computed: {
    resourceListButtonMode() {
      return this.selectedTab === "resource-list" ? null : "flat";
    },
    addResourceButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
};
</script>
