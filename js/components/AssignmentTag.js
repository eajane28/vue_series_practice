export default {
  template: `
        <div class="flex gap-2">
            <button 
            @click="$emit('update:modelValue', tag)"
            v-for="tag in allTags" 
            class="border rounded p-1 text-xs"
            :class= "{
            'border-blue-500 text-blue-500' : tag === modelValue
            }"
            > {{ tag }}</button>
        </div>
    `,

  props: {
    tags: Array,
    modelVaue: String,
  },

  computed: {
    allTags() {
      return ["all", ...new Set(this.tags)];
    },
  },
};
