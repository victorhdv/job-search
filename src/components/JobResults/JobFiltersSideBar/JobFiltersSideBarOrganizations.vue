<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="item in UNIQUE_ORGANIZATIONS"
            :key="item"
            class="h-8 w-1/2"
          >
            <input
              :id="item"
              v-model="selectedOrganizations"
              :value="item"
              type="checkbox"
              class="mr-3"
              @:change="selectOrganization"
            />
            <label :for="item">{{ item }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import { mapState, mapActions } from "pinia";
import { useJobsStore, UNIQUE_ORGANIZATIONS } from "@/stores/jobs";
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from "@/stores/user";

export default {
  name: "JobFiltersSideBarOrganizations",
  components: { CollapsibleAccordion },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
    },
  },
};
</script>
