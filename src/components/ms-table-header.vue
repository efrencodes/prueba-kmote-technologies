<template>
  <div class="ms-table-header">
    <div class="ms-table__title q-ml-md">
      <h1>
        <span><q-icon
          v-if="icon"
          :name="icon"
          color="primary"
          size="20px"
        /></span>{{ title }}
      </h1>
    </div>
    <q-space />
  </div>
</template>

<script>
/**
*
* MsTableHeader Component
*
* @author emartinez <efren.martinez@marciano.com.mx>
* @copyright 2020, Marciano Studio S.C.
*/
export default {
  name: "MsTableHeader",
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.ms-table-header {
  align-items: center;
  display: flex;
  height: 70px;
  padding: 0 20px;
  width: 100%;
  border-bottom: 1px solid rgb(71 84 109 / 0.2);
  .ms-table__title {
    h1 {
      color: $color-text-primary;
      font-size: 18px;
      font-weight: $regular;
      line-height: 24px;
      i {
        margin-right: 10px;
        margin-top: -5px;
      }
      img {
        color: white;
        height: 20px;
        margin-right: 10px;
        margin-top: -5px;
        width: 20px;
      }
    }
  }
}
</style>
