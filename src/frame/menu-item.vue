<template>
    <el-submenu :index="index" v-if="hasChildren">
      <template slot="title">
        <i :class="iconCls" v-if="hasIcon"></i>
        <span slot="title">{{title}}</span>
      </template>
      <naf-menu-item v-for="(item, idx) in children" :key="idx" :index="index+'-'+idx" 
        :title="item.title" :children="item.children" :options="item.options">
      </naf-menu-item>
    </el-submenu>
    <el-menu-item :index="index" @click="menuClick" v-else><i :class="iconCls"></i>
      <span slot="title" v-if="title.length<10 && !hasTooltip">{{title}}</span>
      <el-tooltip slot="title"  v-else :content="hasTooltip?options.tooltip:title" placement="top" effect="light">
        <span>{{ title.length>9 ? (title.substr(0,9)+'...') : title }}</span>
      </el-tooltip>
    </el-menu-item>
</template>
<script>
export default {
  name: 'naf-menu-item',
  props: {
    title: String,
    index: String,
    options: Object,
    children: Array,
  },
  methods: {
    menuClick() {
      console.log('click menu item....');
      if (this.options.url) {
        window.open(this.options.url, this.options.target);
      } else if (this.options.path) {
        this.$router.push(this.options.path);
      }
    },
  },
  computed: {
    hasChildren() {
      return this.children && this.children.length > 0;
    },
    hasIcon() {
      return this.options.icon && this.options.icon.length > 0;
    },
    hasTooltip() {
      return this.options.tooltip && this.options.tooltip.length > 0;
    },
    iconCls() {
      if (this.options.icon && !(this.options.icon.indexOf('el-') === 0)) {
        return `naf-icons naf-icon-${this.options.icon}`;
      }
      return this.options.icon;
    },
  },
};
</script>
