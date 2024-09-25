<template>
  <collapsible-accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="item in UNIQUE_JOB_TYPES" :key="item" class="h-8 w-1/2">
            <input
              :id="item"
              v-model="selectedJobTypes"
              :value="item"
              type="checkbox"
              class="mr-3"
              @:change="selectJobTypes"
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
import { useJobsStore, UNIQUE_JOB_TYPES } from "@/stores/jobs";
import { useUserStore, ADD_SELECTED_JOB_TYPES } from "@/stores/user";

export default {
  name: "JobFiltersSideBarJobTypes",
  components: { CollapsibleAccordion },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
    selectJobTypes() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
    },
  },
};
</script>
