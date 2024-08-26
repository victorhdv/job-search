<template>
  <li class="mb-7">
    <div
      class="mx-auto block rounded-3xl border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2 pb-2 pt-5">
        <h2 class="mb-2 text-2xl">
          Regional Delivery Head, Data Analytics, Google Cloud Consulting
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>Google</span>
          </div>

          <div>
            <span>Singapore; Tokyo, Japan</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="px-8 py-4">
        <div>
          <h3 class="mb-2 mt-1">Minimum qualifications</h3>
          <div>
            <ul class="list-disc pl-8">
              <li>Bachelor's degree or equivalent practical experience.</li>
              <li>
                15 years of experience in consulting, IT services, or program
                and project management as a service delivery leader.
              </li>
              <li>
                Experience in cloud migration, cloud integration or any
                cloud-native, or cloud-based applications development.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="mb-4 mt-6 flex w-32 items-center justify-center rounded border border-solid border-brand-gray-1 px-4 py-2 hover:cursor-pointer hover:bg-blue-50"
        >
          <router-link :to="jobPageLink" class="text-brand-blue-1"
            >Learn more</router-link
          >
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {
    jobPageLink() {
      return `/jobs/resulst/${this.job.id}`;
    },
  },
};
</script>
