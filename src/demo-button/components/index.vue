<template>
  <div>
    <!-- <button class="demo-button">
      <slot />
    </button> -->
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'demo-button',

  props: {
    // color: String,
    // type: {
    //   type: String,
    //   default: 'primary',
    // },
  },
};
</script>

<style lang="less">
.demo-button {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
