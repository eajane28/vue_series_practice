export default {
  template: `
    <li>
    <label class="p-2 flex justify-between items-center">
    {{assignments.title}}
    <input type="checkbox" v-model="assignments.complete" class="ml-3"/>
    </label>
    </li>
    `,
  props: {
    assignments: Object,
  },
};
