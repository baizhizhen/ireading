<template>
  <div class="layout">
    <Menu mode="horizontal" theme="primary" active-name="1">
      <div class="layout-logo">
        <Icon type="ios-lightbulb-outline" size="25"></Icon>
        <span>IReading</span>
      </div>
      <div class="layout-nav">
        <MenuItem name="1">
        <Icon type="compose"></Icon>
        基础数据
        </MenuItem>
        <router-link to="/plan">
        <MenuItem name="2">
        <Icon type="flag"></Icon>
        计划
        </MenuItem>
        </router-link>
        <MenuItem name="3">
        <Icon type="compass"></Icon>
        跟踪
        </MenuItem>
        <MenuItem name="4">
        <Icon type="stats-bars"></Icon>
        统计
        </MenuItem>
      </div>
    </Menu>
    <div class="layout-content">
      <Row>
        <Col :span="5" v-show="isShowLeftNavBar">
        <Menu active-name="1-2" width="auto" :open-names="['1']">
          <MenuItem name="4">
          <Icon type="ios-cloud-outline"></Icon>
          书库
          </MenuItem>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-folder-outline"></Icon>
              书架
            </template>
            <router-link to="/book-classification">
              <MenuItem name="1-1">分类</MenuItem>
            </router-link>
            <router-link to="/book-list">
              <MenuItem name="1-2">图书</MenuItem>
            </router-link>
          </Submenu>
        </Menu>
        </Col>
        <Col :span="spanRight">
        <div class="layout-breadcrumb">
          <Button type="text" @click="toggleClick">
            <Icon type="navicon" size="25"></Icon>
          </Button>
          <Breadcrumb>
            <BreadcrumbItem href="#">Home</BreadcrumbItem>
            <BreadcrumbItem href="#">Projects</BreadcrumbItem>
            <BreadcrumbItem>iView</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="layout-content-main">
          <router-view></router-view>
        </div>
        </Col>
      </Row>
    </div>
    <div class="layout-copy">
      2011-2016 &copy; IReading
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowLeftNavBar: true
    }
  },
  computed: {
    spanRight () {
      return this.isShowLeftNavBar ? 19 : 24
    }
  },
  methods: {
    toggleClick () {
      this.isShowLeftNavBar = !this.isShowLeftNavBar
    }
  }
}
</script>
<style lang="scss">
@import 'assets/sass/index';

$copy-right-text-color: #9ea7b4;
$full-height: 100%;
$page-background-color: #f5f7f9;
$content-background-color: #fff;
.layout {
  border: 1px solid #d7dde4;
  background: $page-background-color;
  position: relative;
  height: $full-height;
  width: 100%;
  .layout-breadcrumb {
    padding: 10px 15px 0;
    & > * {
      display: inline-block;
    }
  }

  .layout-logo {
    border-radius: 3px;
    float: left;
    margin-left: 20px;
    span {
      font-size: 16px;
      color: #fff;
    }
    .ivu-icon {
      color: #fff;
    }
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
    .ivu-btn {
      padding-left: 5px;
    }
  }

  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    height: calc(100% - 138px);
    background: $content-background-color;
    border-radius: 4px;
    .ivu-row,
    .ivu-col,
    .ivu-menu {
      height: $full-height;
    }
  }

  .layout-content-main {
    padding: 10px 15px 0;
    height: calc(100% - 61px);
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: $copy-right-text-color;
  }
}
</style>
