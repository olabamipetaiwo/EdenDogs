<template>
  <component
    class="btn font-medium flex items-center justify-center cursor-pointer border focus:outline-none"
    :is="buttonType"
    :href="href"
    :type="type"
    :class="[btnClasses, customClass]"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "teal",
    },
    size: {
      type: String,
      default: "md", //sm, md, lg
    },
    customClass: {
      required: false,
      type: String,
      default: "",
    },
    outline: Boolean,
    round: Boolean,
  },
  computed: {
    colorClasses() {
      const color = this.color;
      const baseClasses = `bg-${color}-600 text-${color}-100 border-${color}-600 hover:bg-${color}-700 hover:border-${color}-700 hover:text-white`;
      const outlineClasses = `border-${color}-600 bg-white text-${color}-600 hover:bg-${color}-600 hover:border-${color}-600 hover:text-white`;
      return this.outline ? outlineClasses : baseClasses;
    },
    sizeClasses() {
      const sizeMappings = {
        sm: "h-8 text-sm px-4",
        md: "h-10 text-md  px-6",
        lg: "h-12 text-lg px-12",
      };

      return sizeMappings[this.size] || sizeMappings.md;
    },
    btnClasses() {
      const borderRadiusClasses = this.round ? "rounded-full" : "rounded";
      return `${this.colorClasses} ${this.sizeClasses} ${borderRadiusClasses}`;
    },
    buttonType() {
      return "button";
    },
  },
};
</script>
