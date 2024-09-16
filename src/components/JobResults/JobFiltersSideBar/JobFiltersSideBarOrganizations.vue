<template>
  <collapsible-accordion header=" teste de header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2">
            <input id="1" type="checkbox" class="mr-3" />
            <label for="1">teste</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="2" type="checkbox" class="mr-3" />
            <label for="2">teste</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="3" type="checkbox" class="mr-3" />
            <label for="3">teste</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="4" type="checkbox" class="mr-3" />
            <label for="4">teste</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>
<script>
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import { mapState } from "pinia";
import { useJobsStore, UNIQUE_ORGANIZATIONS } from "@/stores/jobs";

export default {
  name: "JobFiltersSideBarOrganizations",
  components: { CollapsibleAccordion },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
  },
};
</script>
