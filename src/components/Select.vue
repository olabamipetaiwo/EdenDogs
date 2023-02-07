<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div
      v-if="selected"
      class="selected"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ this.capitalize(selected) }}
    </div>
    <div v-else class="selected" :class="{ open: open }" @click="open = !open">
      Select an option
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ this.capitalize(option) }}
      </div>
    </div>
  </div>
</template>

<script>
import { capitalize } from "vue";

export default {
  name: "CustomSelct",
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default ? this.default : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
  methods: {
    capitalize,
  },
};
</script>

<style lang="scss" scoped>
$green: #03a84e;
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #f9fafb;
  border-radius: 6px;
  border: 1px solid $green;
  color: $green;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid $green;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: $green transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  position: absolute;
  background-color: #f3f5f6;
  left: 0;
  right: 0;
  z-index: 1;
  height: 200px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: none;
    border-radius: 6px;
  }
}

.custom-select .items div {
  color: #353f50;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: $green;
  color: #fff;
}

.selectHide {
  display: none;
}
</style>
