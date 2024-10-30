import Assignment from "./Assignment.js";
import AssignmentTag from "./AssignmentTag.js";
import Panel from "./Panel.js";
export default {
  components: { Assignment, AssignmentTag, Panel },
  template: `
      <Panel v-if="assignments.length">
        <div class="flex justify-between items-start">
          <h2 class="font-bold mb-2">{{ title }}
            <span>({{ assignments.length }})</span>
          </h2>
          <button v-show="canToggle" @click="$emit('toggle')">&times</button>
        </div>
        <assignment-tag v-model="tagFilter" :tags="assignments.map(a => a.tag)"></assignment-tag>
        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
          <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignments="assignment"></assignment>
        </ul>
        <slot></slot>
        <template #footer>
          This is the footer
        </template>
      </Panel>
    `,
  props: {
    assignments: Array,
    title: String,
    canToggle: { type: Boolean, default: false },
  },
  data() {
    return {
      tagFilter: "all",
    };
  },
  computed: {
    filteredAssignments() {
      if (this.tagFilter === "all") {
        return this.assignments;
      }
      return this.assignments.filter((a) => a.tag === this.tagFilter);
    },
  },
};
