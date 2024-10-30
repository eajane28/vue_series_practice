import AssignmentLists from "./AssignmentLists.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  components: { AssignmentLists, AssignmentCreate },
  template: `
  <section class="flex gap-16">
    <assignment-lists :assignments="filters.inProgress" title="In Progress">
    <div class="my-4">
      <assignment-create @add="add"></assignment-create>
    </div> 
    </assignment-lists>                
    <div v-if="showCompleted">
      <assignment-lists 
      :assignments="filters.completed"
      can-toggle
      title="Completed"
      @toggle="showCompleted = !showCompleted"
      ></assignment-lists>
    </div>

    </section>
    `,
  data() {
    return {
      assignments: [],
      newAssignment: "",
      showCompleted: true,
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((i) => !i.complete),
        completed: this.assignments.filter((i) => i.complete),
      };
    },
  },

  created() {
    fetch("http://localhost:3001/assigments")
      .then((response) => response.json())
      .then((data) => 
        (this.assignments = data)
    );
  },

  methods: {
    add(title) {
      this.assignments.push({
        id: this.assignments.length + 1,
        title: title,
        complete: false,
      });
    },
  },
};
