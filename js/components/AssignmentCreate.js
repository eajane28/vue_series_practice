export default {
  template: `
        <form @submit.prevent="add">
          <div class="border border-gray-600 text-black">
            <input type="text" class="p-2" v-model="newAssignment" placeholder="New Assignment......" />
            <button type="submit" class="bg-white p-2 border-l">Add</button>
          </div>
        </form>
    `,
  props: {
    assignments: Array,
  },
  data() {
    return {
      newAssignment: "",
    };
  },
  methods: {
    add() {
      this.$emit("add", this.newAssignment);

      this.newAssignment = "";
    },
  },
};
