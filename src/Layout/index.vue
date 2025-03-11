<template>
  <a-layout>
    <a-layout-sider width="200" style="background: #fff">
      <a-menu v-model:selectedKeys="currentRoute" v-model:openKeys="openKeys" mode="inline"
        :style="{ height: '100%', borderRight: 0 }">
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              处理数据
            </span>
          </template>
          <a-menu-item key="/home">
            home
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <laptop-outlined />
              UI 视图
            </span>
          </template>
          <a-menu-item key="/welcome">welcome</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <notification-outlined />
              Pending
            </span>
          </template>
          <!-- <a-menu-item key="9">option9</a-menu-item> -->
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">

        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

const currentRoute = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
const router = useRouter()
watch(currentRoute, (v) => router.push({ path: v[0] }))
</script>
<style scoped>
.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
